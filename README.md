# joseph.edmonds.contact

Joseph Edmonds' personal landing page: one page of links to where the work actually lives.

Live at **[joseph.edmonds.contact](https://joseph.edmonds.contact)**, served by GitHub Pages
from this repository's CI workflow. The domain is on Cloudflare with a `CNAME` record for
`joseph` pointing at `longtermsupport.github.io`; the `public/CNAME` file tells Pages which
host to answer for.

## Architecture

The build system is the same one as [ltscommerce.dev](https://github.com/LTSCommerce/site),
trimmed to a single route:

- React 18, TypeScript (strict), Tailwind CSS v4
- React Router v7 with type-safe route constants in `src/routes.ts`
- SSG: Vite SSR build plus `scripts/prerender.mjs` renders the route to static HTML with
  title, description, Open Graph tags and Person JSON-LD
- QA: `@longtermsupport/ts-qa-ci` (type-check, ESLint, Prettier, Vitest, supply-chain checks)
- CI/CD: `.github/workflows/ci.yml` builds, runs QA, and deploys to GitHub Pages on `main`

```
├── src/
│   ├── pages/Home.tsx        # the page
│   ├── data/links.ts         # every outbound link, grouped
│   ├── components/layout/    # Page, Container, Section, Footer
│   ├── styles/global.css     # theme (sky blue primary), fonts, base type scale
│   ├── entry-server.tsx      # SSR entry: meta, JSON-LD, route list
│   └── main.tsx              # client entry (hydrates the prerendered HTML)
├── scripts/prerender.mjs     # writes dist/index.html from the SSR bundle
├── public/                   # fonts, headshot, favicon, CNAME, robots, sitemap
└── tsQaConfig/               # ts-qa-ci project configuration
```

## Development

```bash
pnpm install
pnpm run build        # tsc, vite build, SSR build, prerender
pnpm run preview      # serve dist/ locally
npx ts-qa             # the full QA pipeline
```

Edit the links in `src/data/links.ts`; the page renders whatever is there.
