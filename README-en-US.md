<div align="center">

# Aço Verde

**Presenting XCarb® — ArcelorMittal's low-carbon steel.**
<br>

**English** | [Português](/README.md)

<img width="1200" alt="Aço Verde project preview" src="https://github.com/user-attachments/assets/d06ce075-084e-43e3-b6de-83c4ab7bd4cb" />

</div>

> Capstone project for the Jornada Liga STEAM program. Aço Verde is a corporate landing page designed to connect businesses with ArcelorMittal's XCarb® program, showcasing low-emission steel solutions that support ESG goals and help reduce the environmental footprint of industry.

🔗 **[View Demo →](https://green-steel-two.vercel.app/)**

---

## Features

- **Light/dark theme** — toggled via CSS custom properties, no page reload
- **Internationalization (PT/EN)** — translation system using an external JSON file, applied dynamically with vanilla JavaScript
- **Animated mobile menu** — overlay with smooth transition, auto-closes on navigation
- **Dynamic data grid** — rendered via JavaScript from a centralized data source
- **Product showcase with tabs** — content switching without page reload; image preloading to prevent flicker
- **Responsive layout** — breakpoints at 576px, 768px, 900px, and 1100px

---

## CSS Architecture

The project follows a **layered CSS architecture by responsibility**, inspired by the ITCSS pattern:

| File | Responsibility |
|---|---|
| `reset.css` | Neutralizes browser default styles |
| `variables.css` | Design tokens: colors, typography, spacing |
| `patterns.css` | Utilities and reusable elements (buttons, sections, headings) |
| `style.css` | Page-specific components |
| `light-theme.css` | Variable overrides for the light theme |
| `responsive.css` | Isolated media queries, no rule duplication |

This separation improves maintainability and scalability: theme changes don't affect structure, and responsive rules are centralized in one place.

---

## Technologies

- Semantic HTML5 (`<section>`, `<nav>`, `aria-*`, `role`)
- CSS3 — custom properties, `clamp()`, `grid`, `backdrop-filter`
- JavaScript — DOM manipulation, Fetch API, JSON translation module
- Font Awesome · Bootstrap Icons · Google Fonts (Manrope + Playfair Display)

---

## Project Structure

```
Aco-Verde/
│
├── index.html
├── README.md
├── README-en-US.md
│
└── src/
    ├── css/
    │   ├── reset.css
    │   ├── variables.css
    │   ├── patterns.css
    │   ├── style.css
    │   ├── light-theme.css
    │   └── responsive.css
    ├── js/
    │   └── app.js
    ├── assets/
    │   ├── industria.jpg
    │   ├── arcelormittal.jpg
    │   ├── vergalhao.jpg
    │   ├── barra-chata-mola.jpg
    │   └── cantoneira.jpg
    └── data/
        └── translations.json
```
