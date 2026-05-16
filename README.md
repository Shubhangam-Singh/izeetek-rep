# Izeetek — React Replica

A responsive, fully-routed React replica of [izeetek.com](https://izeetek.com) — the IT
staffing & enterprise services site — built with Vite, React 18, React Router v6, Tailwind
CSS v3 and Swiper.js.

## Highlights

- Sticky navbar with hover dropdown (desktop) and accordion drawer (mobile)
- Swiper hero slider with autoplay, loop, custom arrows and a pill-shaped active dot
- Seamless CSS-only marquee ticker
- Two-column contact + about block with icon-bubble hover transitions
- 5-card services grid with translateY hover lift and brand-coloured bottom border
- Gradient CTA banner with stat counters
- 4-column footer with partner badges, Google Maps embed, and social icon strip
- Pulsing floating WhatsApp button
- Full pages: Home, About Us, Services, Career, Contact Us — wired through React Router v6
- `useScrollTop()` resets the viewport on every route change
- All in-app links use `<Link>` — no full-page reloads

## Tech Stack

| Layer        | Library / Tool                                         |
|--------------|--------------------------------------------------------|
| Build        | [Vite 5](https://vitejs.dev/) + `@vitejs/plugin-react` |
| UI           | React 18                                               |
| Routing      | react-router-dom v6                                    |
| Styling      | Tailwind CSS v3 + a small amount of CSS Modules        |
| Icons        | react-icons (`Fa*` set)                                |
| Carousel     | swiper v11 (Autoplay, Navigation, Pagination modules)  |
| Fonts        | Montserrat (headings/nav) + Open Sans (body)           |

## Brand Tokens

Defined in `tailwind.config.js`:

```js
brand:   { navy: '#1E3A5F', blue: '#1a5fa8', light: '#2d8cdc', accent: '#f5a623' }
neutral: { dark: '#222222', text: '#444444', light: '#f4f6f9' }
```

Fonts are loaded from Google Fonts in `src/index.css`.

## Project Structure

```
izeetek-rep/
├── public/
│   └── images/
│       ├── logo.svg
│       └── services/         SAP, Embedded, Staffing, Semiconductor, Software glyphs
├── src/
│   ├── components/           Navbar, HeroSlider, Ticker, ContactAbout, Services,
│   │                         CTABanner, Footer, WhatsAppFloat
│   ├── pages/                Home, AboutUs, Services, Career, ContactUs
│   ├── constants/data.js     Single source of truth for navigation + content
│   ├── hooks/useScrollTop.js
│   ├── App.jsx               Router + shared chrome
│   ├── main.jsx              BrowserRouter root
│   └── index.css             Tailwind directives, fonts, base layer overrides
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── index.html
```

All page-level copy, nav links, services, jobs, contact info and partner labels live in
`src/constants/data.js` — components stay presentational.

## Getting Started

Requires Node 18+ (Node 20 LTS recommended) and a recent npm.

```bash
# install dependencies
npm install

# start the dev server (http://localhost:5173)
npm run dev

# production build (outputs to dist/)
npm run build

# preview the production build locally
npm run preview
```

## Routes

| Path          | Page         |
|---------------|--------------|
| `/`           | Home         |
| `/about-us`   | About Us     |
| `/services`   | Services     |
| `/career`     | Career       |
| `/contact-us` | Contact Us   |

The Services dropdown deep-links to anchor IDs on `/services` (`#sap`, `#embedded`, etc.).

## Notes on Content

- Marketing copy is original — written in the style of the original site without verbatim
  reproduction.
- Hero banner photography is hot-linked from Unsplash with `?auto=format&w=1600`. The service
  glyphs and wordmark are hand-authored SVGs in `public/images/`.
- The contact form is client-side only — submission validates the inputs and renders a
  confirmation; no API key is committed.
- Partner badges (GreytHR, Monster, Naukri, LinkedIn Talent) are rendered as styled chips,
  not rehosted brand marks.

## License

MIT — see the repository for details.
