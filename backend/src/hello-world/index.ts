import { Service } from '@liquidmetal-ai/raindrop-framework';
import { Hono } from 'hono';
import { Env } from './raindrop.gen';

// Web API types that should be available in Cloudflare Workers
// These type aliases ensure compatibility between test and runtime environments
type Headers = globalThis.Headers;
type Blob = globalThis.Blob;
type FormData = globalThis.FormData;
type ReadableStream = globalThis.ReadableStream;

// Create Hono app with middleware
const app = new Hono<{ Bindings: Env }>();

// Add request logging middleware
app.use('*', async (c, next) => {
  const start = Date.now();
  const url = c.req.url;
  const method = c.req.method;
  
  await next();
  
  const duration = Date.now() - start;
  c.env.logger.info(`${method} ${url}`, { 
    status: c.res.status,
    duration: `${duration}ms`
  });
});

// Health check endpoint
app.get('/health', (c) => {
  return c.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// === Basic API Routes ===

app.get('/api/hello', (c) => {
  return c.json({ message: 'Hello from ProjectManager!' });
});

app.get('/api/hello/:name', (c) => {
  const name = c.req.param('name');
  return c.json({ message: `Hello, ${name}!` });
});

// Example POST endpoint with proper error handling
app.post('/api/echo', async (c) => {
  try {
    const body = await c.req.json();
    return c.json({ received: body });
  } catch (error) {
    if (error instanceof SyntaxError) {
      return c.json({ 
        error: 'Invalid JSON format in request body',
        details: 'Please ensure your request body contains valid JSON'
      }, 400);
    }
    if (error instanceof Error) {
      c.env.logger.error('Echo endpoint error', { 
        error: error.message,
        stack: error.stack 
      });
      return c.json({ 
        error: 'Internal server error',
        requestId: crypto.randomUUID()
      }, 500);
    }
    return c.json({ error: 'Unknown error occurred' }, 500);
  }
});

// === Actor Integration Example ===

// Uncomment and modify to call your actor
/*
app.post('/api/increment', async (c) => {
  try {
    const body = await c.req.json();
    
    // Get actor namespace from environment
    const actorNamespace = c.env.PROJECT_MANAGER;
    const actorId = actorNamespace.idFromName('default');
    const actor = actorNamespace.get(actorId);
    
    // Call actor method
    const newCount = await actor.incrementCounter();
    
    return c.json({ 
      success: true,
      newCount,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    c.env.logger.error('Failed to increment counter', { error: errorMessage });
    return c.json({ error: errorMessage }, 500);
  }
});
*/

// === Storage Integration Example ===

// Uncomment and modify to use storage
/*
app.get('/api/files', async (c) => {
  try {
    // Use bucket from environment
    const bucket = c.env.FILE_STORAGE;
    const result = await bucket.list();
    
    return c.json({
      success: true,
      files: result.objects.map(obj => ({
        key: obj.key,
        size: obj.size,
        lastModified: obj.uploaded
      }))
    });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    c.env.logger.error('Failed to list files', { error: errorMessage });
    return c.json({ error: errorMessage }, 500);
  }
});

app.post('/api/files/:key', async (c) => {
  try {
    const key = c.req.param('key');
    const body = await c.req.text();
    const bucket = c.env.FILE_STORAGE;
    
    await bucket.put(key, body);
    
    return c.json({
      success: true,
      key,
      message: 'File uploaded successfully'
    });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    c.env.logger.error('Failed to upload file', { error: errorMessage, key: c.req.param('key') });
    return c.json({ error: errorMessage }, 500);
  }
});
*/

// === Service Handler ===

export default class extends Service<Env> {
  async fetch(request: Request, env: Env, ctx: any): Promise<Response> {
    // Note: CORS is application-specific
    // Developers should add their own CORS policy based on their needs
    /*
    // Example CORS middleware:
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        status: 200,
        headers: {
          'Access-Control-Allow-Origin': 'https://yourdomain.com',
          'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        },
      });
    }
    */

    // Let Hono handle the request
    return app.fetch(request, env, ctx);
  }
}