# Rohit Raj — Game Designer Portfolio

A clean, editorial portfolio built with React + Vite. Ready to deploy on Vercel.

## Quick Start

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Build for Production

```bash
npm run build
```

## Deploy to Vercel

### Option A — Vercel CLI (Recommended)
```bash
npm install -g vercel
vercel
```

### Option B — Vercel Dashboard
1. Push this folder to a GitHub repo
2. Go to vercel.com → New Project
3. Import your repo
4. Framework: Vite (auto-detected)
5. Deploy ✅

## Updating Content

All content lives in **`src/data.js`** — no digging through components needed:

- **Personal info**: name, email, LinkedIn, phone
- **About bio**: your bio paragraphs
- **Games**: add/edit/remove games in the `games` array
- **Skills**: edit categories and items

### Adding Your Godot Game Link
When your game is ready, find this in `src/data.js`:
```js
{ title: "Untitled Godot Project", link: null, ... }
```
Change `link: null` to `link: "https://your-game-url.com"`.

### Adding Unity Video
For the Unity prototype, you can set `link: "https://youtube.com/your-video"` and change `linkLabel: "Watch Video"`.

## Customisation

- **Colors**: Edit CSS variables in `src/index.css` under `:root`
- **Fonts**: Change the Google Fonts import in `index.html`
- **Accent color**: `--accent: #c84b2f` in `index.css`
