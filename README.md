# LiquiLex

**Civic Compliance, Decoded by AI.**

LiquiLex is an advanced AI-powered platform designed to help businesses and developers navigate complex zoning regulations, building codes, and permit fees in Austin, Texas.

## 🚀 Features

-   **🤖 Agentic Lex**: An intelligent AI assistant that doesn't just chat—it **acts**. It creates tasks, remembers your business context, and proactively guides you using RAG.
-   **📝 Task Management**: Lex creates and manages your compliance checklist automatically. "Remind me to call the city" -> *Task Created*.
-   **🐕 Intelligent Watchdog**: A real-time monitoring system that filters regulatory news based on **your** business type (e.g., Food Trucks see Food Truck news).
-   **🧠 Semantic Search 2.0**: Advanced regulation search with synonym mapping ("Food Truck" = "Mobile Food Establishment") and phrase boosting for pinpoint accuracy.
-   **🗺️ Interactive Zoning Map**: Visualize zoning districts with dynamic data layers, powered by connection to a Vultr PostgreSQL database.
-   **💲 Smart Fee Calculator**: Instantly estimate permit fees for new construction or remodels based on accurate fee schedules.
-   **�️ Voice-Native Interaction**: Talk to Lex naturally using the microphone. Lex replies with text and **speaks back instantly** using ElevenLabs "Adam" (Male Voice).
    -   *How it works*: Browser Speech Recognition -> AI Processing -> ElevenLabs TTS.
    -   *Control*: Play/Pause any message at any time.
-   **�🔒 Secure Dashboard**: User-isolated project management with secure authentication (JWT) and data persistence.

## 🛠️ Technology Stack

### Backend (Raindrop Framework)
-   **Framework**: [Raindrop](https://github.com/liquidmetal-ai/raindrop) (Hono.js based serverless).
-   **Database**: PostgreSQL (Hosted on Vultr, accessed via Vultr Bridge).
-   **Caching**: Valkey (KvCache) for high-performance API responses (Hosted on Vultr, accessed via Vultr Bridge).
-   **🛡️ Self-Repairing Architecture**: Dashboard services automatically detect and fix schema inconsistencies (e.g., missing tables) and isolate failures to prevent crashes.
-   **AI & Memory**:
    -   `SmartBucket`: Vector storage for regulatory documents (RAG).
    -   `SmartMemory`: Persistent user context and session management.
    -   `SmartSql`: Natural language to SQL translation.
    -   **Cerebras**: Ultra-fast inference (Llama 3.3 70B) for instant agent responses (~2,000 tokens/sec).
    -   **ElevenLabs**: Real-time text-to-speech (TTS) for natural-sounding responses.

### Frontend
-   **Framework**: Next.js 14 (App Router).
-   **Styling**: Tailwind CSS + Framer Motion.
-   **Maps**: React Leaflet (OpenStreetMap).
-   **State**: React Hooks + LocalStorage.

### Development
-   **AI Architect**: Built with **Antigravity** (Powered by **Gemini 3 Pro**).

## 📂 Project Structure

```
liquilex/
├── backend/                # Raindrop Backend
│   ├── src/
│   │   ├── liquilex/       # Main Service Logic (API Types)
│   │   ├── agent/          # Lex Agent Logic (LLM Integration)
│   │   ├── tools/          # AI Tools (CheckZoning, CalculateFee)
│   │   └── auth/           # Authentication Service
│   └── raindrop.manifest   # Infrastructure Configuration
├── frontend/               # Next.js Frontend
│   ├── app/                # App Router Pages
│   └── components/         # Reusable UI Components
└── vultr-bridge/           # Database Bridge (Middleware)
```

## 🚀 Getting Started

### Prerequisites
-   Node.js 18+
-   Raindrop CLI
-   Vultr Account (for DB) & Cerebras/ElevenLabs Keys (for AI).

### Installation

1.  **Clone the Repository**
    ```bash
    git clone https://github.com/yourusername/liquilex.git
    cd liquilex
    ```

2.  **Backend Setup**
    ```bash
    cd backend
    npm install
    # Set up environment variables in raindrop.manifest (or .env for dev)
    npm start
    ```

3.  **Frontend Setup**
    ```bash
    cd ../frontend
    npm install
    npm run dev
    ```

4.  **Access**
    -   Frontend: `http://localhost:3000`
    -   Backend API: `http://localhost:8080/api/hello`

## 🔒 Security
-   **JWT Authentication**: All dashboard routes are protected.
-   **Data Isolation**: Projects and data are strictly scoped to the authenticated user.
-   **Secure Storage**: Sensitive keys managed via Raindrop Secrets.

## 📄 License
Private / Proprietary.
