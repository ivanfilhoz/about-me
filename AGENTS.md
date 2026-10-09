# Repository Guidelines

This repository contains Ivan Filho's English personal portfolio, built with React, TypeScript, and Vite through Fredrin.

## Implementation

- Use React, TypeScript, and Vite for a static site. No backend is required.
- Use npm and keep package-lock.json in sync. Node.js 24 is the CI runtime.
- Run `npm run check`, `npm run build`, and `npm run test:browser` (install Chromium with `npx playwright install chromium` first). Browser checks use the production build.
- See README.md for local preview and GitHub Pages setup.
- Deploy to GitHub Pages through GitHub Actions. Upload the build as an artifact; never commit `dist/` or `node_modules/`.
- Serve the custom domain `https://about.ivanfilho.com/` at the root `/`. Keep Vite base, asset URLs, canonical/social metadata, and browser-test URLs consistent.
- DNS and GitHub Pages domain settings are coordinated separately by Julia; do not change them as part of code-only deployment work.
- Update README.md with actual setup, validation, and deployment commands after implementation.

## Content and Quality

- Write the page in English: who Ivan is, selected shipped projects, and professional contact links.
- Selected work includes dotenc, the Clade website, the Clade design system, and Autopilot. Credit Clade design collaboration; never read or publish private Clade/Autopilot source or invent public URLs, adoption, or metrics.
- Project illustrations are original schematics, not product screenshots. Fonts remain locally bundled. No analytics or contact backend.
- Keep the page and public delivery artifacts professionally neutral and reusable as a general-purpose portfolio.
- Support technical claims with current public project documentation or explicit owner confirmation. Explain mechanisms concisely rather than adding long technology lists; never infer an unconfirmed stack.
- Use only confirmed professional facts. Do not invent metrics, testimonials, project adoption, or authorship claims.
- For dotenc, PGP-style describes envelope architecture only; it does not imply OpenPGP format compatibility or signatures.
- Keep private application records, client documents, credentials, and unrelated project files out of this public repository.
- If secrets become necessary, use dotenc. Never commit plaintext credentials or expose them in the browser bundle.
- Build a responsive, accessible page with semantic HTML, keyboard support, visible focus, and reduced-motion support.
- Verify the production build and inspect the rendered page on desktop and mobile before calling it complete.
- Deployment configuration, successful CI, and a verified live public URL are separate facts; do not claim publication without checking the public page.
