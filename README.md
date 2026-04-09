# Portfolio

Minimal dark personal portfolio. Static HTML — no build step, no framework.

## Structure

```
portfolio/
├── config.js          ← THE ONLY FILE YOU EDIT
├── index.html
├── netlify.toml
└── assets/
    ├── css/style.css
    └── js/main.js
```

## How to deploy

1. Fork this repo on GitHub
2. Open `config.js` and update your name, bio, and links
3. Go to [Netlify](https://app.netlify.com) → **Add new site** → **Import from GitHub**
4. Select your fork — leave all build settings blank
5. Click **Deploy** → done

Any future push to `main` auto-redeploys.

## How to customise

Everything is in `config.js`:

| Field    | What it does                              |
|----------|-------------------------------------------|
| `name`   | Your full name                            |
| `handle` | Short handle shown in the top-left tag    |
| `role`   | One-liner subtitle under your name        |
| `bio`    | The paragraph on the right side           |
| `links`  | Array of `{ label, url }` — add/remove freely |
| `accent` | Hex colour for highlights and arrows      |
