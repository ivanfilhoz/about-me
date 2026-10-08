# Ivan Filho — personal portfolio

An English, single-page portfolio covering Ivan's engineering approach and selected work: dotenc, the Clade website, the Clade design system, and Autopilot.

Built with React, TypeScript, and Vite. Static hosting only: no backend, analytics, tracking, or credentials. Fonts are bundled locally; all project illustrations are original, simplified visual representations, not screenshots of private products.

## Development

Use Node.js 24 (the CI version) and npm. Vite requires Node.js 22.12 or newer.

```sh
npm ci
npm run dev
```

Open the local URL printed by Vite with `/about-me/`, normally `http://localhost:5173/about-me/`.

## Validation and production preview

```sh
npm run check           # TypeScript and ESLint
npm run build           # TypeScript and production build in dist/
npx playwright install chromium
npm run test:browser    # Starts its own production preview
npm run preview -- --host 127.0.0.1
```

The production preview is at `http://127.0.0.1:4173/about-me/`. Browser checks require an existing build and cover 320, 390, 768, and 1440px viewports, WCAG A/AA axe checks, navigation by keyboard, reduced motion, approved links, and asset paths. Screenshots are saved under ignored `test-results/`; visually inspect desktop and mobile screenshots as well as the automated results. Axe checks are a useful automated baseline, not a complete accessibility certification.

## GitHub Pages

[The Pages workflow](.github/workflows/pages.yml) installs dependencies, checks types and lint, builds, and runs browser checks on pull requests and pushes to `main`. Only `main` can upload and deploy a Pages artifact, using the official GitHub actions. The deploy job alone has Pages and OIDC write permissions. No personal access token or application secret is needed.

The repository is configured to use **GitHub Actions** as its Pages source (verified on October 8, 2026). For a fork or a reset, select it in **Settings → Pages → Build and deployment** before the first deployment. After a reviewed PR is merged into `main`, the workflow deploys automatically; `workflow_dispatch` can redeploy `main`. Neither `dist/` nor `node_modules/` belongs in Git.

Expected public URL: <https://ivanfilhoz.github.io/about-me/>. This address is a deployment target, not a claim that the site is live. Confirm the workflow completed, then open that URL and check the rendered page and its assets before sharing it as published. A pull request does not create a public preview.

Vite's base is `/about-me/`. Keep asset references base-aware; changing the repository name or moving to a custom domain also requires updating this setting and rechecking the production build.

## Content boundaries

Edit page content in `src/App.tsx` and presentation in `src/styles.css`. Publish confirmed professional facts only. Credit the Clade design collaboration. Clade design system and Autopilot descriptions may explain the approved capabilities and qualitative outcomes; do not add private source, stakeholder details, invented adoption claims, metrics, or public project links. The existing email, GitHub, LinkedIn, dotenc, and Clade links are intentional.
