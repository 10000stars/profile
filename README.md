# profile — gh-pages

This branch contains the **auto-deployed static build** of the personal portfolio site.

⚠️ All changes are made on the `master` branch and deployed via `npm run deploy`.

- **Framework:** Next.js
- **Deployment:** GitHub Pages via `gh-pages`
- **Live site:** https://10000stars.github.io/profile

The `master` branch holds the source code. Running the deploy command builds the site and force-pushes the static output to this branch:

```bash
npm run build
npm run deploy
```

| Branch | Purpose |
|--------|---------|
| `master` | Source code |
| `gh-pages` | Auto-generated static build (this branch) |
