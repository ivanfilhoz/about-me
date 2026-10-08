# Repository Guidelines

This repository will contain Ivan Filho's personal portfolio page, implemented through Fredrin.

## Implementation

- Use React, TypeScript, and Vite for a static site. No backend is required.
- Use npm and commit the lockfile once the application is scaffolded.
- Deploy to GitHub Pages through GitHub Actions. Upload the build as an artifact; never commit `dist/` or `node_modules/`.
- Support the repository subpath `/about-me/` when configuring asset URLs and deployment.
- Update README.md with actual setup, validation, and deployment commands after implementation.

## Content and Quality

- Write the page in English: who Ivan is, selected shipped projects, and professional contact links.
- Use only confirmed professional facts. Do not invent metrics, testimonials, project adoption, or authorship claims.
- Keep private application records, client documents, credentials, and unrelated project files out of this public repository.
- If secrets become necessary, use dotenc. Never commit plaintext credentials or expose them in the browser bundle.
- Build a responsive, accessible page with semantic HTML, keyboard support, visible focus, and reduced-motion support.
- Verify the production build and inspect the rendered page on desktop and mobile before calling it complete.
