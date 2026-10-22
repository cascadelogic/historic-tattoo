# Historic Tattoo — Portland, OR

New website for Historic Tattoo built with Next.js 15.5.28, TypeScript, and Tailwind CSS.

## Pages

- `/` — Home (hero, services preview, artist grid, visit CTA)
- `/about` — Shop history and info
- `/artists` — Full artist directory with Instagram links
- `/get-what-you-get` — GWYG / Plinko service pages with FAQ

## Stack

- **Framework**: Next.js 15.5.28 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: Oswald (display), Inter (body), Playfair Display (serif accents) via next/font/google
- **Hosting**: Vercel

## Getting Started

```bash
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy

Production uses the `historic-tattoo` Vercel project in the `historictattoo-afks-projects` account. The project is not connected to GitHub; a merge does not deploy it. After the required checks and an authorized merge, deploy the clean merged source with the existing authenticated Vercel CLI (`npx vercel --prod --yes --scope historictattoo-afks-projects`) and verify its source commit, Ready state, aliases, and live routes.

## Verification

```bash
npm run lint
npm run typecheck
npm run build
```

Next.js also checks types during the production build. React 19 is required for this App Router app.

After building, run `npm start -- --port 3000` and `npm run test:smoke` in another terminal. The smoke check exercises all nine artist pages, encoded and invalid slugs, image optimization, metadata, legacy redirects, and API validation against the local production build.
