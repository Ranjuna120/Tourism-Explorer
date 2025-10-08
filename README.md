# Tourism Explorer

Simple Next.js + Tailwind CSS starter for a Sri Lanka tourism site (Homepage, Destinations, Services, Gallery, Contact).

Getting started (Windows PowerShell)

1. Install Node.js (LTS >= 16) and npm from https://nodejs.org/
2. In PowerShell run:

```powershell
cd d:/gitupload/uploadgit/Tourism-Explorer
npm install
npm run dev
```

Open http://localhost:3000

Notes
- If you see "npm: The term 'npm' is not recognized", install Node.js and re-open your terminal.
- Tailwind requires the devDependencies to be installed; until then you may see CSS editor lint warnings for `@tailwind` and `@apply`.
- Images use external Unsplash URLs; Next.js Image optimization requires the domains be allowed (configured in next.config.js).

Project structure (key files)
- `pages/` — Next.js pages (index, Destinations, about, services, gallery, contact)
- `components/` — Navbar, Footer, DestinationCard
- `styles/globals.css` — Tailwind imports and small helpers
- `tailwind.config.js`, `postcss.config.js`, `next.config.js`

If you'd like, I can:
- Add more destinations and real image assets
- Wire the contact form to an email or serverless function
- Convert to the Next.js app router or add TypeScript
# Tourism-Explorer
A simple tourism website for Sri Lanka, built with Next.js, Tailwind CSS, and Vanilla JavaScript.
