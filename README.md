# team-payments (demo)

Mock **payments** team service for the Soultech Engineering Ops Copilot portfolio.

This is not a real payments product. It is a tiny Express API used to seed PRs, issues, and CI so an AI triage agent has mixed-state work to inspect.

## Run locally

```bash
npm install
npm test
npm start
```

Health check: `GET http://localhost:3000/health`

## Stack

- Node.js + Express
- Jest + ESLint
- GitHub Actions: lint + test on PRs
