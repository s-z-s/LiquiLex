# Product Requirements Document (PRD)

Product Requirements Document (PRD)
Project Name: LiquiLex - The AI Civic Compliance Navigator
Version: 5.0 (Final Execution Spec)
Build Architecture: Zero-Cost Agentic (Google Gemini CLI + Raindrop MCP)
Runtime Architecture: Hybrid Hyper-Speed (LiquidMetal + Vultr + Cerebras + ElevenLabs)
Hackathon Track Targets: Best Overall, Ultra-Low Latency, Best Voice Agent, Solopreneur.

1. Project Introduction & Vision
LiquiLex is a "Civic Operating System" designed to decouple regulatory complexity from small business ambition. Currently, a food truck owner must navigate three disconnected silos to open a business: Unstructured Law (PDF Ordinances), Geospatial Restrictions (Zoning Maps), and Structured Math (Fee Schedules).
LiquiLex unifies these into a single, Agentic Interface. It does not just "chat"; it acts as a digital expeditor that deterministically verifies zoning, calculates fees with 100% accuracy, and speaks naturally to users in the field.
1.1 The "Why This Wins" Strategy
The Speed: We utilize Cerebras (Llama 3.3 70B) to achieve ~2,000 tokens/sec inference. This creates a "magic" feeling where complex legal analysis happens instantly.
The Build: We utilize Google Gemini CLI (Free Tier) to provision the entire infrastructure. By leveraging Gemini’s 1-Million Token Context Window, we can load the entire LiquidMetal SDK documentation into memory, allowing the agent to write perfect infrastructure-as-code without costing the developer a dollar.
The Depth: We leverage LiquidMetal Raindrop's specialized services (SmartBuckets, SmartSQL) to handle data types that normally break LLMs (PDF tables and math).

2. Detailed Technical Architecture
2.1 The Build Plane: Raindrop Code
We bypass paid tools (Claude Code) by using Raindrop Code.
Role: The "Architect Agent". It writes the code, defines the database schemas, and provisions the cloud resources via the Raindrop MCP.
Configuration:
Model: GLM 4.6
Context Strategy: We utilize the @load command to ingest the full Raindrop and Vultr API documentation, enabling "One-Shot" provisioning.
2.2 The Runtime Plane: The "Golden Triangle" Stack
A. Cognitive Layer: LiquidMetal Raindrop
We utilize three distinct Raindrop services to handle different data modalities.
Service
Functionality
Implementation Detail
SmartBuckets
The Librarian
Ingestion: Stores Austin Code of Ordinances (PDFs).

AI Decomposition: Automatically extracts "Zoning Permitted Use Matrices" from PDFs and converts them into structured, queryable data. This allows the agent to read a table row (e.g., "Cocktail Lounge: Conditional in CS-1") accurately.

Vector Store: Automatically indexes text for semantic retrieval (RAG).
SmartSQL
The Accountant
Structure: Stores Permit Fee Schedules and Grant Eligibility Logic.

Reasoning: Allows the agent to execute natural language math. User: "Fee for 15 employees?" -> SQL: SELECT fee FROM fees WHERE 15 BETWEEN min_emp AND max_emp. This prevents the "LLM Math Hallucination" problem.
SmartMemory
The Memory
Semantic Memory: Stores the "Business Profile" (Name: Tacos Hermanos, Type: Mobile Food Unit).

Procedural Memory: Stores the "Compliance Checklist State" (Step 1: Zoning, Step 2: Grease Trap [Pending]). This ensures the agent remembers the user's journey weeks later.

B. Infrastructure Layer: Vultr Cloud
We use Vultr for the "Heavy Lifting" that requires raw compute and low-level database access.
Service
Functionality
Implementation Detail
Managed PostgreSQL
The Map
Journey 1: The "Spatial Truth" Check (Mobile Voice)
User (Jane, Chef): "I'm at 5th and Congress. Can I park my food truck here overnight?"
System Orchestration:
ElevenLabs: Captures audio -> Transcribes to text.
Cerebras Agent: Identifies intent: Check_Zoning_Compliance.
Tool Call (Vultr): Agent calls get_zone(lat, long) -> Vultr PostGIS returns Zone: CBD (Central Business District).
Tool Call (Raindrop SmartBuckets): Agent searches PDF knowledge base for "Mobile Food Unit parking rules in CBD". -> Returns: Allowed, but no operation between 3 AM - 6 AM.
Synthesis: Cerebras combines spatial fact + legal rule.
ElevenLabs: Speaks: "You can operate here, Jane, but you cannot park overnight. The CBD zone requires you to vacate between 3 AM and 6 AM for street cleaning."
Total Latency: ~1.2 Seconds.
Journey 2: The "Deterministic Fee" Calculation (Desktop)
User (Marcus, Architect): "How much is the permit for a 2,500 sq ft patio with 12 staff?"
System Orchestration:
Cerebras Agent: Identifies intent: Calculate_Fee.
Tool Call (Raindrop SmartSQL): Agent generates SQL: SELECT fee FROM permit_fees WHERE category='Patio' AND sq_ft_min <= 2500 AND sq_ft_max >= 2500.
Result: $420.50.
Synthesis: "The base permit fee is exactly $420.50. Would you like me to generate the PDF application?"

4. Master Execution Plan: The 11-Day Sprint
Phase 1: Infrastructure via Raindrop Code (Days 1-3)
Goal: Provision the entire backend using free tools.
Day 1: The Setup
Install: npm i -g @google/gemini-cli @liquidmetal-ai/raindrop.
Auth: raindrop auth login.
The "One-Shot" Prompt: Download Raindrop & Vultr docs. Run:
gemini @load docs/raindrop.md @load docs/vultr.md "Act as a DevOps Engineer. Generate a 'raindrop.manifest' for app 'LiquiLex'. Define: 1 SmartBucket 'austin-codes', 1 SmartSQL 'fees-db', 1 Service 'api-gateway'. Then write a Terraform script for Vultr Managed Postgres (PostGIS) and Valkey."
Day 2: Data Injection
Raindrop: Upload Austin_Title_25.pdf to SmartBucket. Upload fees.csv to SmartSQL.
Vultr: Connect to Postgres. Enable PostGIS (CREATE EXTENSION postgis;). Import Austin Zoning Shapefile.
Day 3: The Cerebras Bridge
Set CEREBRAS_API_KEY in Raindrop secrets.
Create agent.ts. Configure it to use baseURL: https://api.cerebras.ai/v1 and model: llama-3.3-70b.
Phase 2: Intelligence & Logic (Days 4-6)
Goal: The agent becomes smart.
Day 4: Tool Implementation
Create tools/checkZoning.ts: Connects to Vultr Postgres. Queries the polygon.
Create tools/calcFees.ts: Connects to Raindrop SmartSQL. Runs the math query.
Day 5: SmartMemory Wiring
Implement Semantic Memory to save the user's business profile ("Jane's Tacos").
Ensure the agent checks this memory before asking questions (e.g., "Since you are a Food Truck, here is the rule...").
Day 6: The Voice Proxy
Create a Raindrop Service (/voice-proxy) that accepts WebSocket connections from ElevenLabs.
Logic: Receive Text -> Send to Cerebras -> Return Text. This creates the "Brain" for the voice agent.
Phase 3: Frontend & Polish (Days 7-9)
Goal: A winning UI.
Day 7: Frontend Foundation & Auth
Scaffold a Next.js app with Tailwind CSS.
- **Landing Page**: A high-conversion showcase of LiquiLex features.
- **Authentication**: Integrate WorkOS (or similar) for secure sign-up/login.
- **Onboarding**: A form to capture Business Name, Type, and Location, saving to SmartMemory.
- **Dashboard**: A protected layout with sidebar navigation to feature pages.
Add a Leaflet map component (using React Leaflet). When the agent checks Vultr PostGIS, the map should fly to that location and highlight the zone.
Day 8: ElevenLabs Widget
Embed the ElevenLabs React widget. Point it to your custom agent ID.
Day 9: The "Wow" Factor
Add a "Thinking Chain" visualizer. Show the user which Raindrop service is being queried (e.g., "Reading PDF...", "Querying SQL...").
Phase 4: Submission (Days 10-11)
Day 10: Demo Video
Shot 1: Terminal showing gemini building the app (Solopreneur/Builder cred).
Shot 2: Voice Mode conversation (Best Voice Agent).
Shot 3: Instant response speed (Ultra-Low Latency).
Day 11: Deploy (raindrop build deploy) and Submit.

5. Functional Requirements Checklist (FRs)
[ ] FR-1 (SmartBuckets): PDF ingestion with AI Decomposition for table extraction.
[ ] FR-2 (SmartSQL): Structured fee calculation to avoid math errors.
[ ] FR-3 (SmartMemory): Persistent user context (Business Type/Location).
[ ] FR-4 (Vultr PostGIS): Spatial ground-truth verification for zoning.
[ ] FR-5 (Vultr Valkey): High-speed session caching.
[ ] FR-6 (Cerebras): <500ms inference latency using Llama 3.3 70B.
[ ] FR-7 (ElevenLabs): Voice-enabled interface via WebSocket proxy.
This document serves as your complete roadmap. By following the Phase 1 instructions, you effectively bypass the paid tooling requirements while utilizing the full power of the LiquidMetal platform.
1. Environment Setup: The "Two-Plane" Architecture
The system requires a strict separation between the Build Plane (where code is generated) and the Runtime Plane (where the app lives).
Build Plane (Local/Raindrop):
Tooling: Raindrop Code + Raindrop MCP.
Role: Acts as the "Architect Agent" to generate Infrastructure-as-Code (IaC) without incurring developer seat costs (e.g., avoiding Claude Code) .
Runtime Plane (Hybrid Cloud):
Services: LiquidMetal Raindrop for logic services (voice-proxy).
Compute/Storage: Vultr Cloud for heavy lifting (Postgres, Valkey, Kafka) .
Intelligence: Cerebras and ElevenLabs for API-based inference.
2. CI/CD & Deployment Automation
The deployment pipeline is unique because it is Agentic.
Provisioning: Infrastructure is defined via a "One-Shot" prompt to Raindrop Code, which ingests the SDK documentation and outputs a perfect raindrop.manifest file.
Deployment Command: The entire stack is deployed using the Raindrop CLI command raindrop build deploy.
Release Process: A specific "11-Day Sprint" structure where Phase 1 is Infrastructure, Phase 2 is Logic, Phase 3 is UI, and Phase 4 is Deployment.
3. Monitoring & Observability
"Thinking Chain" Visualizer: You must implement a UI component that visualizes the agent's logic in real-time, showing the user exactly which Raindrop service is being queried (e.g., "Reading PDF...", "Querying SQL...").
Latency Tracking: Strict monitoring is required to ensure the Cerebras Brain maintains <300ms inference latency and the total voice journey remains under ~1.2 seconds.
4. Database Migration & Data Injection
Strategy: "Initialization & Injection" (Phase 1, Day 2).
Schema Setup: You must manually connect to the Vultr Postgres instance to run CREATE EXTENSION postgis; before data import.
Data Hydration:
PDFs: Upload Austin_Title_25.pdf to the austin-codes SmartBucket.
CSVs: Upload fees.csv to the fees-db SmartSQL instance.
Spatial Data: Import Austin Zoning Shapefiles directly into PostGIS.
5. Backup & Disaster Recovery
Infrastructure Reproducibility: The "Architect Agent" strategy ensures that if the infrastructure is lost, it can be re-provisioned instantly using the /reattach-raindrop-session and /update-raindrop-app commands
User State: User context (e.g., "Jane's Tacos") is persisted in SmartMemory and Valkey (Hot Cache), ensuring the agent remembers the user's journey weeks later.
6. Cost Management
"Zero-Cost Agentic" Strategy: A core requirement is to bypass paid coding tools. You use the Raindrop Code to generate the code for free.
Hybrid Efficiency: High-cost computations (Inference) are offloaded to Cerebras, while static storage logic is handled by efficient LiquidMetal services to keep runtime costs low.

