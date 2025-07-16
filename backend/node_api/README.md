# Node.js API Gateway

This service acts as the main API gateway for Smart Recruiter.
- Handles authentication, user management, and routing
- Forwards AI/embedding requests to the Python FastAPI service
- Communicates with the frontend (Next.js)

## Setup

1. `cd node_api`
2. `npm install`
3. `npm run dev` (or `npm start` for production)

## Structure
- `src/` — Main source code
- `routes/` — API routes
- `controllers/` — Route handlers
- `services/` — Business logic and Python API integration
- `.env` — Environment variables 