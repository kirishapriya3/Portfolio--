# Kirisha Priya — Portfolio

A modern, animated full-stack developer portfolio built with React, JavaScript, Tailwind CSS, and Framer Motion.

## Tech Stack
- **HTML5** — single entry page (`index.html`)
- **JavaScript (ES6+) / JSX** — all component logic (no TypeScript)
- **React 18** — UI components and state (hooks: `useState`, `useEffect`)
- **Tailwind CSS v4** — utility-first styling
- **Framer Motion** — scroll-triggered animations, transitions, the typing effect
- **Lucide React** & **React Icons** — icon set (GitHub, mail, tech-stack logos)
- **Vite** — dev server and build tool

No backend, no database, no TypeScript — this is a fully static frontend site.

## Project Structure
```
src/
 ├── components/
 │    ├── Navigation.jsx
 │    ├── CustomCursor.jsx
 │    ├── ParticleBackground.jsx
 │    ├── LoadingScreen.jsx
 │    └── sections/
 │         ├── HeroSection.jsx
 │         ├── AboutSection.jsx
 │         ├── SkillsSection.jsx
 │         ├── ProjectsSection.jsx
 │         ├── EducationSection.jsx
 │         ├── CertificationsSection.jsx
 │         └── ContactSection.jsx
 ├── pages/
 │    └── Portfolio.jsx
 ├── lib/
 │    └── data.js     ← all your personal info, skills, projects, etc.
 ├── App.jsx
 ├── main.jsx
 └── index.css
```

## Sections
- Hero — name, role, quick stats, resume download
- About Me (About)
- Technical Skills (Skills)
- Featured Projects — StayMate, Kanban Board, Movie Searching App
- Professional Credentials (Certifications)
- Contact

## Local Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Output goes to the `dist/` folder.

## Deploy to Netlify

### Option A — Netlify CLI
```bash
npm install -g netlify-cli
npm run build
netlify deploy --prod --dir=dist
```

### Option B — Drag and drop
1. Run `npm run build`
2. Go to https://app.netlify.com/drop
3. Drag the generated `dist` folder onto the page

### Option C — Git-based deploy
1. Push this project to a GitHub repository
2. In Netlify: **Add new site → Import an existing project**
3. Build command: `npm run build`
4. Publish directory: `dist`

A `netlify.toml` is already included with the correct build settings and SPA redirect rule.
