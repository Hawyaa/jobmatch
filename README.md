# JobMatch

CV-based job search platform.

## Setup

```bash
npm install
cp .env.example .env.local   # fill in real keys — never commit .env.local
npm run dev
```

## Structure

- `src/app/api/cv/parse` — extract raw text from uploaded PDF/DOCX
- `src/app/api/cv/extract` — raw text → Groq → structured profile JSON
- `src/app/api/jobs/search` — profile + filters → JSearch → normalized job results
- `src/app/api/assistant/chat` — site-guide chat widget, powered by Groq
- `src/lib/firebase.ts` — client-side Firebase (Auth + Firestore)
- `src/lib/firebase-admin.ts` — server-side Firebase Admin (API routes only)

## Env vars (see `.env.example`)

- `GROQ_API_KEY`
- `RAPIDAPI_KEY`
- `NEXT_PUBLIC_FIREBASE_API_KEY`
- `NEXT_PUBLIC_FIREBASE_PROJECT_ID`
- `FIREBASE_ADMIN_PRIVATE_KEY`
- `FIREBASE_ADMIN_CLIENT_EMAIL`

## Status

Scaffold only — routes are stubs (`501 not implemented`), Firebase config wired but needs real project keys.
