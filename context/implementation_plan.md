# Implementation Plan - LiquiLex: The AI Civic Compliance Navigator (Refined)

This plan is strictly aligned with the PRD v5.0, ensuring "Zero-Cost Agentic" build and "Hybrid Hyper-Speed" runtime. It prioritizes a granular "Hello World" approach for stability while guaranteeing a premium, "buttery smooth" UI.

## User Review Required

> [!IMPORTANT]
> **AI Stack**: **Cerebras** (Llama 3.3 70B) is the **ONLY** LLM provider for runtime inference. No other LLMs will be integrated.
> **UI Stack**: We will use **Next.js**, **Tailwind CSS**, and **Framer Motion** for high-performance animations.
> **Mapping**: We will use **Leaflet** (`react-leaflet`) for a completely free mapping solution.
> **Tech Verification**:
> - **WebSockets**: Raindrop docs do not explicitly mention WebSocket support. We will verify this in Phase 3.1. If native support is missing, we will use HTTP polling or an external relay.
> - **Vultr**: Raindrop does not have native Vultr integration. We will connect to Vultr Managed Services (Postgres, Valkey) using standard connection strings stored in Raindrop Secrets.

## Proposed Changes

### Phase 1: Foundation & Verification (The "Hello World" Strategy)

**Goal**: Establish a stable deployment pipeline for all infrastructure components before adding complex logic.

#### Step 1.1: Minimal Hello World - completed
- **Action**: Initialize a basic Raindrop project (`raindrop build init`).
- **Files**: `raindrop.manifest` (1 service), `src/hello/index.ts`.
- **User Action**:
    - Run `raindrop auth login` in your terminal if not already logged in.
    - Approve the `raindrop build deploy` command when prompted.
- **Verification**: `raindrop build deploy`. Verify "Hello World" response via curl.

#### Step 1.2: Add SmartBucket ("The Librarian") - completed
- **Action**: Update manifest to include `smartbucket "austin-codes"`.
- **User Action**:
    - Provide the `Austin_Title_25.pdf` file (place it in `context/data/` or similar).
    - Confirm upload command execution.
- **Verification**: `raindrop build deploy`. Verify bucket exists.
- **Data**: Upload `Austin_Title_25.pdf` (FR-1).

#### Step 1.3: Add SmartSQL ("The Accountant") - completed
- **Action**: Update manifest to include `smartsql "fees-db"`.
- **User Action**:
    - Provide the `fees.csv` file.
    - Confirm upload command execution.
- **Verification**: `raindrop build deploy`. Verify DB exists.
- **Data**: Upload `fees.csv` (FR-2).

#### Step 1.4: Add SmartMemory ("The Memory") - completed
- **Action**: Update manifest to include `smartmemory "user-context"`.
- **User Action**: None (automated provisioning).
- **Verification**: `raindrop build deploy`. Verify memory resource.
- **Purpose**: Persist user context (Business Type/Location) (FR-3).

#### Step 1.5: Regulatory Watchdog (RSS Poller) - completed
- **Action**: Create Raindrop Task `watchdog` (Cron: `*/15 * * * *`).
- **Logic**: Fetch RSS -> Check SmartMemory (dedup) -> Push to Queue if new.
- **Verification**: Manually trigger task and check Queue.

### Phase 2: Core Logic & Vultr Integration

**Goal**: Implement tools, agent logic, and the Vultr Bridge.

#### Step 2.0: Vultr Bridge - completed
- **Problem**: Raindrop Edge Runtime cannot connect to Vultr Managed Services via TCP.
- **Solution**: Create a lightweight **Vultr Bridge** (Node.js/Express) running on a Vultr VPS/Container.
- **Architecture**: Raindrop (Edge) -> HTTP -> Vultr Bridge (VPS) -> TCP -> Vultr Postgres/Valkey.
- **Action**:
    - Create `vultr-bridge` directory.
    - Implement simple proxy server.
    - Deploy to Vultr (or simulate locally for now).
- **Verification**: `/api/vultr/test` endpoint in Raindrop calls the Bridge.

#### Step 2.1: Zoning Tool (`checkZoning.ts`) - completed
- **Action**: Create tool to query Vultr PostGIS.
- **Logic**: `ST_Intersects` query to find zoning code from lat/long.
- **User Action**: Verify the Austin Zoning Shapefile import was successful in Vultr.
- **Verification**: Run unit test with a known Austin lat/long.

#### Step 2.2: Fees Tool (`calcFees.ts`) - completed
- **Action**: Create tool to query SmartSQL.
- **Logic**: Structured SQL query for deterministic math.
- **User Action**: None.
- **Verification**: Run unit test with known fee parameters. (Completed)

#### Step 2.3: Chat Agent (Lex) - completed
- **Action**: Create `src/agent/lex.ts` class.
- **Configuration**:
    - Model: `llama-3.3-70b` via Cerebras API.
    - System Prompt: Define persona "Lex", strict legal/compliance focus.
- **Tools Integration**:
    - `checkZoning(lat, long)`
    - `calcFees(category, trade, sq_ft)`
    - `searchCodes(query)` (SmartBucket RAG)
- **Memory**: Integrate `SmartMemory` to persist "Business Profile" (e.g., "Food Truck").
- **Endpoint**: Expose `/api/lex/chat` for testing.
- **User Action**: Test conversation flows (Zoning check, Fee calc).

### Phase 3: Integration (The Voice & UI)

**Goal**: Connect the brain to the world with a premium user experience.

#### Step 3.1: Voice Proxy Service - completed
- **Action**: Create `src/voice/proxy.ts` (or add to `index.ts`).
- **Logic**:
    - Expose WebSocket endpoint `/api/voice/ws`.
    - Handle ElevenLabs "Custom LLM" WebSocket protocol.
    - On message: Parse text -> Call `Lex.chat()` -> Send response back.
- **User Action**: **Provide ElevenLabs Agent ID and API Key**.
- **Verification**: Connect via a WebSocket client (or ElevenLabs dashboard) and speak to Lex.

#### Step 3.2: Frontend Foundation (Next.js + Tailwind + Auth)
- **Action**:
    - Initialize Next.js app with Tailwind CSS.
    - **Landing Page**: High-conversion "Showcase" page explaining LiquiLex features (Zoning, Fees, Voice Agent).
    - **Authentication**: Integrate Auth (e.g., WorkOS/Clerk).
    - **Onboarding Flow**: Form to capture Business Name, Type (e.g., "Food Truck"), and Location. Save to `SmartMemory`.
    - **Dashboard Layout**: Protected route `/dashboard` with sidebar navigation.
- **User Action**: Review the initial UI design and provide feedback on the "vibe".

#### Step 3.4: Authentication System (Real Auth)
- **Action**: Implement full Login/Signup flow.
    - **Backend**:
        - Create `users` table in **Vultr PostgreSQL**.
        - Add `/api/auth/signup`, `/api/auth/login` endpoints.
    - **Frontend**: Create `/login` and `/signup` pages.
    - **Protection**: Add Next.js Middleware to protect `/dashboard`.

#### Step 3.5: Landing Page Expansion
- **Action**: Upgrade `page.tsx` to a full-featured landing page.
    - Sections: Hero, Problem/Solution, How it Works (Step-by-Step), Features Deep Dive, Testimonials, CTA.
    - Design: improved typography, more animations, "premium" feel.

#### Step 3.6: Dynamic Dashboard
- **Action**: Connect Dashboard stats to real data.
    - Fetch "Active Permits" count from `SmartSQL`.
    - Fetch "Zoning Checks" history from `SmartMemory`.
    - Display real user business name in header.
    - **Fees Page**: `/dashboard/fees` - Form-based fee calculator using `calcFees` tool.
- **User Action**: **Provide ElevenLabs Agent ID** (for the widget).
- **Verification**: Visual check of animations and map interactions.

### Phase 4: Final Polish & Submission

**Goal**: Production readiness.

- **Action**: Full end-to-end test.
- **User Action**:
    - Perform the "User Journeys" (Voice Check, Fee Calc) yourself to verify the "feel".
    - Record the Demo Video.
- **Deliverable**: Demo video recording showing:
    1.  Terminal build (Gemini).
    2.  Voice conversation (ElevenLabs).
    3.  Instant response (Cerebras).
    4.  Visual thinking chain (UI).

## Verification Plan

- **Every Step**: Ends with a `deploy` or `test` action.
- **Rollback**: If a step fails, we revert to the previous stable manifest.
