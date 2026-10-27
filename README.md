# WalshDemo

A Next.js (App Router) marketing/demo website with Tailwind CSS and GSAP animations, plus an optional embedded admin dashboard (`admin-dashboard/`, `.admin-dashboard-kit/`).

## Requirements

- Node.js and npm

## Setup

```bash
npm install
cp .env.example .env
cp .admin-dashboard-kit/.env.admin-dashboard.example .admin-dashboard-kit/.env.admin-dashboard
```

Edit the copied files with your own values. The real `.env` files are git-ignored; only the `*.example` templates (placeholder values) are committed.

## Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the Next.js dev server |
| `npm run build` | Production build |
| `npm start` | Serve the production build |
| `npm run lint` | Run `next lint` |
| `npm run dev:admin-sidecar` | Run the admin dashboard starter on port 4100 |
