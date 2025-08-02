# 📄 GitHub Pages Deployment Branch

This branch (`gh-pages`) contains the **static build** of [my personal website](https://10000stars.github.io/profile/), generated using:

```bash
npm run build
npm run deploy
```

The files here are automatically deployed by GitHub Pages and are not meant to be edited directly.

## 🔄 How It Works
The main site source code lives in the main branch.

This gh-pages branch is created by exporting the static site (out/ directory).

Deployment uses GitHub Pages to serve the contents of this branch.
