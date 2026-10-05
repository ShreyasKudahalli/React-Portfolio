# Frontend documentation

## Overview

The frontend is the main user-facing part of the portfolio. It is built as a Vite-powered React application and contains a collection of section-based components that create the landing page experience.

## Technology stack

- React 19
- Vite
- JavaScript
- Tailwind CSS
- Lucide React
- React Icons

## Folder structure

```text
Frontend/
├── public/
│   ├── Resume.pdf
│   ├── favicon.svg
│   ├── hero-bg.jpg
│   ├── profile-pic.jpg
│   ├── profile-pic1.jpg
│   └── projects/
├── src/
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│   ├── assets/
│   ├── components/
│   ├── layout/
│   └── sections/
├── package.json
├── README.md
└── vite.config.*
```

## Application responsibilities

### `src/App.jsx`

This file composes the overall page by rendering the navbar and major sections. It acts as the page assembly layer for the portfolio.

### `src/layout/`

Contains global page structure and shared layout components such as the navigation and header UI.

### `src/components/`

Contains reusable UI components such as buttons and shared interaction elements.

### `src/sections/`

This is the content-heavy directory. Each section is responsible for one part of the portfolio experience, including:

- About
- Skills
- Projects
- Education
- CodingProfiles
- Contact
- Hero

## Styling approach

The app uses Tailwind CSS for layout and design. It is intended to provide a modern, polished, and responsive interface with a lightweight component-driven structure.

## Development workflow

Run the frontend locally with:

```bash
cd Frontend
npm install
npm run dev
```

For a production build:

```bash
npm run build
```

## Notes for contributors

- Keep content changes in section components when updating portfolio copy.
- Prefer reusing shared components before creating new UI structures.
- Maintain responsiveness across mobile and desktop viewports.
- Use static assets in `public/` for downloadable or image resources.

## Recommended improvements

- Add a CMS or JSON-based content source for easier updates
- Refactor repeated section data into typed or centralized content objects
- Add stronger accessibility checks for contrast, focus states, and keyboard navigation
