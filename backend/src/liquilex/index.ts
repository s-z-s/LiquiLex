import { Service } from '@liquidmetal-ai/raindrop-framework';
import { Hono } from 'hono';
import { jwt } from 'hono/jwt';
import { cors } from 'hono/cors';
import { logger } from 'hono/logger';
import {
  Ai, Annotation, App, KvCache, Logger, MRNObject, SmartBucket, SmartSql, Tracer,
  QueueSendOptions, BucketPutOptions, BucketListOptions
} from '@liquidmetal-ai/raindrop-framework';
import { Env } from './raindrop.gen';
import { checkZoning } from '../tools/checkZoning';
import { calcFees } from '../tools/calcFees';
import { searchRegulations } from '../tools/searchRegulations';
import { Lex } from '../agent/lex';
import { setupVoiceProxy } from '../voice/proxy';
import { AuthService } from '../auth/service';
import { DashboardService } from './dashboard';

const JWT_SECRET = 'liquilex-secret-key-change-in-prod';

// Create Hono app with middleware
const app = new Hono<{ Bindings: Env }>();

// Setup Voice Proxy
setupVoiceProxy(app);

// Add request logging middleware
app.use('*', logger());

// Protect Dashboard & Projects Routes
app.use('/api/dashboard/*', jwt({ secret: JWT_SECRET }));
app.use('/api/projects/*', jwt({ secret: JWT_SECRET }));
app.use('/api/lex/*', jwt({ secret: JWT_SECRET }));
app.use('/api/user/*', jwt({ secret: JWT_SECRET }));

// Health check endpoint
app.get('/health', (c) => {
  return c.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// === Basic API Routes ===
app.get('/api/hello', (c) => {
  return c.json({ message: 'Hello World from LiquiLex!' });
});

app.get('/api/hello/:name', (c) => {
  const name = c.req.param('name');
  return c.json({ message: `Hello, ${name}!` });
});

// Example POST endpoint
app.post('/api/echo', async (c) => {
  const body = await c.req.json();
  return c.json({ received: body });
});

// === RPC Examples: Service calling Actor ===
// Example: Call an actor method
/*
app.post('/api/actor-call', async (c) => {
  try {
    const { message, actorName } = await c.req.json();

    if (!actorName) {
      return c.json({ error: 'actorName is required' }, 400);
    }

    // Get actor namespace and create actor instance
    // Note: Replace MY_ACTOR with your actual actor binding name
    const actorNamespace = c.env.MY_ACTOR; // This would be bound in raindrop.manifest
    const actorId = actorNamespace.idFromName(actorName);
    const actor = actorNamespace.get(actorId);

    // Call actor method (assuming actor has a 'processMessage' method)
    const response = await actor.processMessage(message);

    return c.json({
      success: true,
      actorName,
      response
    });
  } catch (error) {
    return c.json({
      error: 'Failed to call actor',
      message: error instanceof Error ? error.message : 'Unknown error'
    }, 500);
  }
});
*/

// Example: Get actor state
/*
app.get('/api/actor-state/:actorName', async (c) => {
  try {
    const actorName = c.req.param('actorName');

    // Get actor instance
    const actorNamespace = c.env.MY_ACTOR;
    const actorId = actorNamespace.idFromName(actorName);
    const actor = actorNamespace.get(actorId);

    // Get actor state (assuming actor has a 'getState' method)
    const state = await actor.getState();

    return c.json({
      success: true,
      actorName,
      state
    });
  } catch (error) {
    return c.json({
      error: 'Failed to get actor state',
      message: error instanceof Error ? error.message : 'Unknown error'
    }, 500);
  }
});
*/

// === SmartBucket Examples ===
// Example: Upload file to SmartBucket

app.post('/api/upload', async (c) => {
  try {
    const formData = await c.req.formData();
    const file = formData.get('file') as File;
    const description = formData.get('description') as string;

    if (!file) {
      return c.json({ error: 'No file provided' }, 400);
    }

    // Upload to SmartBucket
    // @ts-ignore
    const smartbucket = c.env.AUSTIN_CODES;
    const arrayBuffer = await file.arrayBuffer();

    const putOptions: BucketPutOptions = {
      httpMetadata: {
        contentType: file.type || 'application/octet-stream',
      },
      customMetadata: {
        originalName: file.name,
        size: file.size.toString(),
        description: description || '',
        uploadedAt: new Date().toISOString()
      }
    };

    const result = await smartbucket.put(file.name, new Uint8Array(arrayBuffer), putOptions);

    return c.json({
      success: true,
      message: 'File uploaded successfully',
      key: result.key,
      size: result.size,
      etag: result.etag
    });
  } catch (error) {
    return c.json({
      error: 'Failed to upload file',
      message: error instanceof Error ? error.message : 'Unknown error'
    }, 500);
  }
});


// Seed Regulations (SmartBucket)
app.post('/api/admin/seed-regulations', async (c) => {
  try {
    const body = await c.req.parseBody();
    const file = body['file'];

    if (!file || !(file instanceof File)) {
      return c.json({ error: 'File required' }, 400);
    }

    console.log(`Uploading ${file.name} to SmartBucket...`);

    // SmartBucket .put()
    // @ts-ignore
    const smartbucket = c.env.AUSTIN_CODES;
    const arrayBuffer = await file.arrayBuffer();

    const putOptions: BucketPutOptions = {
      httpMetadata: {
        contentType: file.type || 'text/plain',
      },
      customMetadata: {
        originalName: file.name,
        uploadedAt: new Date().toISOString()
      }
    };

    await smartbucket.put(file.name, new Uint8Array(arrayBuffer), putOptions);

    return c.json({ success: true, message: `Uploaded ${file.name} to regulations database.` });
  } catch (error) {
    console.error('Seed Regulations Error:', error);
    return c.json({ error: String(error) }, 500);
  }
});

// List Regulations (SmartBucket)
app.get('/api/admin/list-regulations', async (c) => {
  try {
    // @ts-ignore
    const result = await c.env.AUSTIN_CODES.list();
    return c.json({ success: true, files: result.objects.map((o: any) => o.key) });
  } catch (error) {
    return c.json({ error: String(error) }, 500);
  }
});

// Test Search (SmartBucket Debug)
app.get('/api/admin/test-search', async (c) => {
  try {
    const query = c.req.query('q');
    if (!query) return c.json({ error: 'Query param ?q= required' }, 400);

    // Use the tool function to test the actual logic used by the agent
    const result = await searchRegulations(query, c.env);
    return c.json({ success: true, query, ...result });
  } catch (error) {
    return c.json({ error: String(error) }, 500);
  }
});

// Seed Fees Database
app.post('/api/admin/seed-fees', async (c) => {
  try {
    const csvText = await c.req.text();
    if (!csvText) {
      return c.json({ error: 'CSV content required' }, 400);
    }

    // @ts-ignore
    const db = c.env.FEES_DB;

    // 1. Create Table
    await db.executeQuery({
      sqlQuery: `
      CREATE TABLE IF NOT EXISTS fees (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        category TEXT,
        trade TEXT,
        min_sq_ft INTEGER,
        max_sq_ft INTEGER,
        base_fee REAL,
        incremental_fee REAL,
        incremental_threshold INTEGER
      )
    `
    });

    // 2. Parse and Insert
    const lines = csvText.split('\n').filter(line => line.trim() !== '');
    if (lines.length < 2) {
      return c.json({ error: 'CSV is empty or missing data' }, 400);
    }

    // const headers = lines[0].split(','); // Skip headers

    let inserted = 0;

    // Batching would be better, but doing one-by-one for simplicity/debugging
    for (let i = 1; i < lines.length; i++) {
      const line = lines[i];
      if (!line) continue;

      const cols = line.split(',');
      if (cols.length < 7) continue;

      const category = cols[0]?.trim();
      const trade = cols[1]?.trim();
      const minSqFtStr = cols[2]?.trim();
      const maxSqFtStr = cols[3]?.trim();
      const baseFeeStr = cols[4]?.trim();
      const incFeeStr = cols[5]?.trim();
      const incThresholdStr = cols[6]?.trim();

      if (!category || !trade || !minSqFtStr || !maxSqFtStr || !baseFeeStr || !incFeeStr || !incThresholdStr) {
        continue;
      }

      await db.executeQuery({
        sqlQuery: `
        INSERT INTO fees (category, trade, min_sq_ft, max_sq_ft, base_fee, incremental_fee, incremental_threshold)
        VALUES ('${category}', '${trade}', ${parseInt(minSqFtStr)}, ${parseInt(maxSqFtStr)}, ${parseFloat(baseFeeStr)}, ${parseFloat(incFeeStr)}, ${parseInt(incThresholdStr)})
      `
      });
      inserted++;
    }

    return c.json({
      success: true,
      message: `Seeded ${inserted} fee records`,
      table: 'fees'
    });

  } catch (error) {
    return c.json({
      error: 'Failed to seed database',
      message: error instanceof Error ? error.message : 'Unknown error'
    }, 500);
  }
});




// Save User Context (Onboarding)
app.post('/api/user/context', async (c) => {
  try {
    const body = await c.req.json();
    const { businessName, businessType, description } = body;

    if (!businessName || !businessType) {
      return c.json({ error: 'Business Name and Type are required' }, 400);
    }

    // Save to SmartMemory (Procedural)
    const payload = c.get('jwtPayload');
    const memory = await c.env.USER_CONTEXT.getProceduralMemory();
    await memory.putProcedure(`user_${payload.userId}`, JSON.stringify({
      businessName,
      businessType,
      description,
      timestamp: new Date().toISOString()
    }));

    return c.json({ success: true, message: 'Context saved' });
  } catch (error) {
    return c.json({ error: String(error) }, 500);
  }
});

// Direct Zoning Check (for Map UI)
app.get('/api/zoning/check', async (c) => {
  try {
    const lat = c.req.query('lat');
    const long = c.req.query('long');

    if (!lat || !long) {
      return c.json({ error: 'Latitude and Longitude are required' }, 400);
    }

    const result = await checkZoning(parseFloat(lat), parseFloat(long), c.env);
    return c.json(result);
  } catch (error) {
    return c.json({ error: String(error) }, 500);
  }
});

// === Dashboard Routes ===

app.post('/api/admin/init-dashboard', async (c) => {
  try {
    const dashboard = new DashboardService(c.env);
    const result = await dashboard.initDB();
    return c.json(result);
  } catch (error) {
    return c.json({ error: String(error) }, 500);
  }
});

app.get('/api/dashboard/summary', async (c) => {
  try {
    const payload = c.get('jwtPayload');
    const dashboard = new DashboardService(c.env);
    const summary = await dashboard.getSummary(payload.userId);
    return c.json(summary);
  } catch (error) {
    return c.json({ error: String(error) }, 500);
  }
});

app.get('/api/projects', async (c) => {
  try {
    const payload = c.get('jwtPayload');
    const dashboard = new DashboardService(c.env);
    const projects = await dashboard.getProjects(payload.userId);
    return c.json({ success: true, projects });
  } catch (error) {
    return c.json({ error: String(error) }, 500);
  }
});

app.post('/api/projects', async (c) => {
  try {
    const payload = c.get('jwtPayload');
    const { address, zone, details, score } = await c.req.json();
    if (!address) return c.json({ error: 'Address required' }, 400);

    const dashboard = new DashboardService(c.env);
    const project = await dashboard.createProject(payload.userId, address, zone || '', details || '', score || 0);
    return c.json({ success: true, project });
  } catch (error) {
    return c.json({ error: String(error) }, 500);
  }
});

app.delete('/api/projects/:id', async (c) => {
  try {
    const payload = c.get('jwtPayload');
    const id = c.req.param('id');
    const dashboard = new DashboardService(c.env);
    await dashboard.deleteProject(payload.userId, id);
    return c.json({ success: true });
  } catch (error) {
    return c.json({ error: String(error) }, 500);
  }
});

app.get('/api/tasks', async (c) => {
  try {
    const dashboard = new DashboardService(c.env);
    // Re-using getSummary() logic or implementing separate getTasks if needed
    // For now, simpler to just query all via direct SQL if not in dashboard.ts 
    // OR, better, update dashboard.ts to have getTasks() public. 
    // Wait, getTasks() wasn't explicitly added to class public methods in previous step?
    // Checking previous step... No, I didn't add getTasks()! I added create, update, delete.
    // I will use direct query here for now or add it later. Direct query is fine as quick fix.
    // Actually, dashboard.ts has queryPostgres helper but it is private? No, queryPostgres is imported.
    // I'll instantiate DashboardService and just use its create/update/delete, but for LIST, i will 
    // add a ad-hoc query here via the imported queryPostgres helper if I can access env.
    const { queryPostgres } = await import('../auth/db');
    const res = await queryPostgres(c.env, 'SELECT * FROM tasks ORDER BY created_at DESC');
    return c.json({ success: true, tasks: res.rows });
  } catch (error) {
    return c.json({ error: String(error) }, 500);
  }
});

app.post('/api/tasks', async (c) => {
  try {
    const { title, description } = await c.req.json();
    const dashboard = new DashboardService(c.env);
    const task = await dashboard.createTask(title, description);
    return c.json({ success: true, task });
  } catch (error) {
    return c.json({ error: String(error) }, 500);
  }
});

app.put('/api/tasks/:id', async (c) => {
  try {
    const id = c.req.param('id');
    const updates = await c.req.json();
    const dashboard = new DashboardService(c.env);
    const task = await dashboard.updateTask(id, updates);
    return c.json({ success: true, task });
  } catch (error) {
    return c.json({ error: String(error) }, 500);
  }
});

app.delete('/api/tasks/:id', async (c) => {
  try {
    const id = c.req.param('id');
    const dashboard = new DashboardService(c.env);
    await dashboard.deleteTask(id);
    return c.json({ success: true });
  } catch (error) {
    return c.json({ error: String(error) }, 500);
  }
});

app.get('/api/alerts', async (c) => {
  try {
    const { queryPostgres } = await import('../auth/db');
    const res = await queryPostgres(c.env, 'SELECT * FROM alerts ORDER BY created_at DESC');
    return c.json({ success: true, alerts: res.rows });
  } catch (e) {
    return c.json({ error: String(e) }, 500);
  }
});

// === Auth Routes ===

app.post('/api/admin/init-auth', async (c) => {
  try {
    const auth = new AuthService(c.env);
    const result = await auth.initAuthDB();
    return c.json(result);
  } catch (error) {
    return c.json({ error: String(error) }, 500);
  }
});

app.post('/api/auth/signup', async (c) => {
  try {
    const { email, password, businessName, businessType } = await c.req.json();
    if (!email || !password) return c.json({ error: 'Missing fields' }, 400);

    const auth = new AuthService(c.env);
    const result = await auth.signup(email, password, businessName, businessType);
    return c.json(result);
  } catch (error) {
    return c.json({ error: String(error) }, 400);
  }
});

app.post('/api/auth/login', async (c) => {
  try {
    const { email, password } = await c.req.json();
    if (!email || !password) return c.json({ error: 'Missing fields' }, 400);

    const auth = new AuthService(c.env);
    const result = await auth.login(email, password);
    return c.json(result);
  } catch (error) {
    return c.json({ error: String(error) }, 401);
  }
});

// Test SmartMemory
app.post('/api/memory/test', async (c) => {
  try {
    // @ts-ignore
    const memory = c.env.USER_CONTEXT;

    // Simple write/read test if API allows, or just check existence
    // Based on docs, SmartMemory might be more complex (sessions, actors).
    // For now, let's just check if the binding exists and return its keys/proto

    return c.json({
      success: true,
      hasMemory: !!memory,
      keys: memory ? Object.keys(memory) : [],
      // @ts-ignore
      proto: memory ? Object.getOwnPropertyNames(Object.getPrototypeOf(memory)) : []
    });

  } catch (error) {
    return c.json({
      error: 'Failed to access SmartMemory',
      message: error instanceof Error ? error.message : 'Unknown error'
    }, 500);
  }
});

// Test Zoning Tool
app.post('/api/zoning/test', async (c) => {
  try {
    const { lat, long } = await c.req.json();
    if (!lat || !long) return c.json({ error: 'lat and long required' }, 400);

    const result = await checkZoning(lat, long, c.env);
    return c.json({ success: true, result });
  } catch (error) {
    return c.json({
      success: false,
      error: error instanceof Error ? error.message : String(error)
    }, 500);
  }
});

// Calculate Fees
app.post('/api/fees/calculate', async (c) => {
  try {
    const body = await c.req.json();
    const { category, trade, sq_ft } = body;

    if (!category || !trade || !sq_ft) {
      return c.json({ error: 'category, trade, and sq_ft are required' }, 400);
    }

    const result = await calcFees(c.env, { category, trade, sq_ft });


    return c.json({ success: true, result });
  } catch (error) {
    return c.json({
      success: false,
      error: error instanceof Error ? error.message : String(error)
    }, 500);
  }
});


// Example: Get file from SmartBucket
/*
app.get('/api/file/:filename', async (c) => {
  try {
    const filename = c.req.param('filename');

    // Get file from SmartBucket
    const smartbucket = c.env.MY_SMARTBUCKET;
    const file = await smartbucket.get(filename);

    if (!file) {
      return c.json({ error: 'File not found' }, 404);
    }

    return new Response(file.body, {
      headers: {
        'Content-Type': file.httpMetadata?.contentType || 'application/octet-stream',
        'Content-Disposition': `attachment; filename="${filename}"`,
        'X-Object-Size': file.size.toString(),
        'X-Object-ETag': file.etag,
        'X-Object-Uploaded': file.uploaded.toISOString(),
      }
    });
  } catch (error) {
    return c.json({
      error: 'Failed to retrieve file',
      message: error instanceof Error ? error.message : 'Unknown error'
    }, 500);
  }
});
*/

// Example: Search SmartBucket documents
/*
app.post('/api/search', async (c) => {
  try {
    const { query, page = 1, pageSize = 10 } = await c.req.json();

    if (!query) {
      return c.json({ error: 'Query is required' }, 400);
    }

    const smartbucket = c.env.MY_SMARTBUCKET;

    // For initial search
    if (page === 1) {
      const requestId = `search-${Date.now()}-${Math.random().toString(36).substring(7)}`;
      const results = await smartbucket.search({
        input: query,
        requestId
      });

      return c.json({
        success: true,
        message: 'Search completed',
        query,
        results: results.results,
        pagination: {
          ...results.pagination,
          requestId
        }
      });
    } else {
      // For paginated results
      const { requestId } = await c.req.json();
      if (!requestId) {
        return c.json({ error: 'Request ID required for pagination' }, 400);
      }

      const paginatedResults = await smartbucket.getPaginatedResults({
        requestId,
        page,
        pageSize
      });

      return c.json({
        success: true,
        message: 'Paginated results',
        query,
        results: paginatedResults.results,
        pagination: paginatedResults.pagination
      });
    }
  } catch (error) {
    return c.json({
      error: 'Search failed',
      message: error instanceof Error ? error.message : 'Unknown error'
    }, 500);
  }
});
*/

// Example: Chunk search for finding specific sections
/*
app.post('/api/chunk-search', async (c) => {
  try {
    const { query } = await c.req.json();

    if (!query) {
      return c.json({ error: 'Query is required' }, 400);
    }

    const smartbucket = c.env.MY_SMARTBUCKET;
    const requestId = `chunk-${Date.now()}-${Math.random().toString(36).substring(7)}`;

    const results = await smartbucket.chunkSearch({
      input: query,
      requestId
    });

    return c.json({
      success: true,
      message: 'Chunk search completed',
      query,
      results: results.results
    });
  } catch (error) {
    return c.json({
      error: 'Chunk search failed',
      message: error instanceof Error ? error.message : 'Unknown error'
    }, 500);
  }
});
*/

// Example: Document chat/Q&A
/*
app.post('/api/document-chat', async (c) => {
  try {
    const { objectId, query } = await c.req.json();

    if (!objectId || !query) {
      return c.json({ error: 'objectId and query are required' }, 400);
    }

    const smartbucket = c.env.MY_SMARTBUCKET;
    const requestId = `chat-${Date.now()}-${Math.random().toString(36).substring(7)}`;

    const response = await smartbucket.documentChat({
      objectId,
      input: query,
      requestId
    });

    return c.json({
      success: true,
      message: 'Document chat completed',
      objectId,
      query,
      answer: response.answer
    });
  } catch (error) {
    return c.json({
      error: 'Document chat failed',
      message: error instanceof Error ? error.message : 'Unknown error'
    }, 500);
  }
});
*/

// Example: List objects in bucket
/*
app.get('/api/list', async (c) => {
  try {
    const url = new URL(c.req.url);
    const prefix = url.searchParams.get('prefix') || undefined;
    const limit = url.searchParams.get('limit') ? parseInt(url.searchParams.get('limit')!) : undefined;

    const smartbucket = c.env.MY_SMARTBUCKET;

    const listOptions: BucketListOptions = {
      prefix,
      limit
    };

    const result = await smartbucket.list(listOptions);

    return c.json({
      success: true,
      objects: result.objects.map(obj => ({
        key: obj.key,
        size: obj.size,
        uploaded: obj.uploaded,
        etag: obj.etag
      })),
      truncated: result.truncated,
      cursor: result.truncated ? result.cursor : undefined
    });
  } catch (error) {
    return c.json({
      error: 'List failed',
      message: error instanceof Error ? error.message : 'Unknown error'
    }, 500);
  }
});
*/

// === KV Cache Examples ===
// Example: Store data in KV cache
/*
app.post('/api/cache', async (c) => {
  try {
    const { key, value, ttl } = await c.req.json();

    if (!key || value === undefined) {
      return c.json({ error: 'key and value are required' }, 400);
    }

    const cache = c.env.MY_CACHE;

    const putOptions: KvCachePutOptions = {};
    if (ttl) {
      putOptions.expirationTtl = ttl;
    }

    await cache.put(key, JSON.stringify(value), putOptions);

    return c.json({
      success: true,
      message: 'Data cached successfully',
      key
    });
  } catch (error) {
    return c.json({
      error: 'Cache put failed',
      message: error instanceof Error ? error.message : 'Unknown error'
    }, 500);
  }
});
*/

// Example: Get data from KV cache
/*
app.get('/api/cache/:key', async (c) => {
  try {
    const key = c.req.param('key');

    const cache = c.env.MY_CACHE;

    const getOptions: KvCacheGetOptions<'json'> = {
      type: 'json'
    };

    const value = await cache.get(key, getOptions);

    if (value === null) {
      return c.json({ error: 'Key not found in cache' }, 404);
    }

    return c.json({
      success: true,
      key,
      value
    });
  } catch (error) {
    return c.json({
      error: 'Cache get failed',
      message: error instanceof Error ? error.message : 'Unknown error'
    }, 500);
  }
});
*/

// === Queue Examples ===
// Example: Send message to queue
/*
app.post('/api/queue/send', async (c) => {
  try {
    const { message, delaySeconds } = await c.req.json();

    if (!message) {
      return c.json({ error: 'message is required' }, 400);
    }

    const queue = c.env.MY_QUEUE;

    const sendOptions: QueueSendOptions = {};
    if (delaySeconds) {
      sendOptions.delaySeconds = delaySeconds;
    }

    await queue.send(message, sendOptions);

    return c.json({
      success: true,
      message: 'Message sent to queue'
    });
  } catch (error) {
    return c.json({
      error: 'Queue send failed',
      message: error instanceof Error ? error.message : 'Unknown error'
    }, 500);
  }
});
*/

// === Environment Variable Examples ===
app.get('/api/config', (c) => {
  return c.json({
    hasEnv: !!c.env,
    availableBindings: {
      // These would be true if the resources are bound in raindrop.manifest
      // MY_ACTOR: !!c.env.MY_ACTOR,
      // MY_SMARTBUCKET: !!c.env.MY_SMARTBUCKET,
      // MY_CACHE: !!c.env.MY_CACHE,
      // MY_QUEUE: !!c.env.MY_QUEUE,
    },
    // Example access to environment variables:
    // MY_SECRET_VAR: c.env.MY_SECRET_VAR // This would be undefined if not set
  });
});

// Lex Agent Chat Endpoint
app.post('/api/lex/chat', async (c) => {
  try {
    const { messages } = await c.req.json();
    if (!messages || !Array.isArray(messages)) {
      return c.json({ error: 'Messages array required' }, 400);
    }

    // Fetch User Context from SmartMemory
    const payload = c.get('jwtPayload');
    let userContext = '';
    try {
      const memory = await c.env.USER_CONTEXT.getProceduralMemory();
      userContext = await memory.getProcedure(`user_${payload.userId}`) || '';
      console.log('Lex Context:', userContext);
    } catch (e) {
      console.warn('Failed to fetch user context', e);
    }

    const lex = new Lex(c.env);
    const result = await lex.chat(messages, userContext);

    // Handle both string (legacy) and object return types just in case
    const responseText = typeof result === 'string' ? result : result.response;
    const steps = typeof result === 'string' ? [] : result.steps;

    return c.json({ success: true, response: responseText, steps });
  } catch (error) {
    return c.json({ success: false, error: String(error) }, 500);
  }
});

// Text-to-Speech Endpoint
app.post('/api/voice/speak', async (c) => {
  try {
    const { text } = await c.req.json();
    if (!text) return c.json({ error: 'Text required' }, 400);

    // @ts-ignore
    const apiKey = c.env.ELEVENLABS_API_KEY;

    // "Rachel" voice ID: 21m00Tcm4TlvDq8ikWAM
    const voiceId = '21m00Tcm4TlvDq8ikWAM';

    const response = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'xi-api-key': apiKey,
      },
      body: JSON.stringify({
        text,
        model_id: 'eleven_turbo_v2',
        voice_settings: {
          stability: 0.5,
          similarity_boost: 0.75,
        },
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      console.error('ElevenLabs TTS Error:', error);
      return c.json({ error: 'TTS failed', details: error }, 500);
    }

    if (!response.body) {
      return c.json({ error: 'No audio content received' }, 500);
    }

    return c.body(response.body, 200, {
      'Content-Type': 'audio/mpeg',
    });

  } catch (error) {
    return c.json({ error: String(error) }, 500);
  }
});

export default class extends Service<Env> {
  async fetch(request: Request): Promise<Response> {
    return app.fetch(request, this.env);
  }

  async onTask(ctx: any): Promise<void> {
    if (ctx.name === 'watchdog') {
      console.log('🐶 Watchdog Task Triggered');

      // 1. Mock RSS Fetch (Austin City Council)
      const mockRssItem = {
        title: 'New Food Truck Zoning Ordinance Proposed',
        link: 'https://austintexas.gov/news/zoning-update-2025',
        pubDate: new Date().toISOString(),
        guid: `guid-${new Date().getHours()}` // Change hourly for testing
      };

      // 2. Check SmartMemory (Dedup)
      // @ts-ignore
      const memory = this.env.USER_CONTEXT;
      // In a real app, we'd check if mockRssItem.guid exists in memory
      // For now, we'll just log it.
      console.log('Checking memory for dupes...', mockRssItem.guid);

      // 3. Push to Queue
      // @ts-ignore
      const queue = this.env.REGULATORY_ALERTS;
      if (queue) {
        await queue.send(JSON.stringify(mockRssItem));
        console.log('🚨 Alert pushed to queue:', mockRssItem.title);
      } else {
        console.error('Queue REGULATORY_ALERTS not found');
      }
    }
  }
}
