# Aviation Trading Corporate Website (Next.js 15)

Premium, modern, responsive corporate website for an aviation trading company.

## Tech

- Next.js 15 (App Router) + React + TypeScript
- Tailwind CSS + shadcn-style UI primitives
- Framer Motion + Lucide Icons

## Getting started

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production

```bash
npm run build
npm run start
```

## Deploy (Vercel)

1. Push this repo to GitHub/GitLab/Bitbucket
2. Import into Vercel
3. Framework preset: Next.js
4. Build command: `npm run build`
5. Output: (auto)

## Branding

Update:

- `src/lib/site.ts` (`url`, contact info, locations)
- `src/components/logo.tsx` (logo mark + name)
- Replace SVGs in `public/placeholders/` with real imagery

