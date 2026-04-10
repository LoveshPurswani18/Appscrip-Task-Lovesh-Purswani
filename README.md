# Appscrip Task by Lovesh Purswani

A pixel-perfect, responsive e-commerce Product Listing Page (PLP) designed exclusively for the metta muse storefront evaluation. This application faithfully implements the provided Figma specifications utilizing modern React architectures while strictly adhering to the "No UI Library / CSS Framework" restriction.

### Live Links
- **Public GitHub Repository:** https://github.com/LoveshPurswani18/Appscrip-Task-Lovesh-Purswani
- **Live Hosted Application (Vercel):** https://appscrip-task-lovesh-purswani.vercel.app/

---

## Task Highlights & Features

- **No CSS Frameworks:** Built 100% using native modern CSS properties. Advanced implementations including CSS Layout Grids, Flexbox, Variable Tokens, Checkbox-Hack Accordions, and dynamically calculated Media Queries were applied.
- **Server Side Rendering (SSR):** Leveraged Next.js App Router for strict server-side hydration. Product payloads are processed asynchronously upstream via the Root Node (`page.tsx`) before delegating strictly typed structures to the interacting layout views. FakeStoreAPI integrations included dynamic handling to intercept/route broken domain references autonomously.
- **Responsive PWA Adaptation:** Perfectly shifts formatting scaling down from ultra-wide 1440px desktop layouts (Stable 3-column product grid alongside contextual filter sidebar) down to mobile environments utilizing isolated Drawer Overlays and simplified 2-column mobile grids.
- **Micro-Interactions Without JS bloat:** Custom "RECOMMENDED" Dropdowns natively handle hover styling without library reliance. The sidebar Accordion menus in the footer actively use CSS-only mechanics (`input type="checkbox"`) maximizing performance without JavaScript hydration dependencies.
- **SEO & Structured Data Optimized:**
  - Automated HTML `<title>` and `<meta name="description">` definitions mapping directly to "metta muse" semantics.
  - Dynamically injected **JSON-LD `ItemList`** Structured Data Schema markup into the virtual DOM.
  - Contextual DOM hierarchies properly nesting distinct `<h1/>` headers against nested `<h2/>` sub-sections.
  - Dynamically aggregated `alt=""` and accessibility tags wrapping fetched iconography globally.

---

## Technology Stack
- **Framework:** Next.js (React 18)
- **Styling:** Vanilla CSS (Variables & BEM conventions)
- **Typing:** TypeScript 
- **Deployment:** Vercel

## Getting Started

To run the local development server:

```bash
# Clone the repository
git clone https://github.com/LoveshPurswani18/Appscrip-Task-Lovesh-Purswani

# Move into project directory
cd appscrip-task-lovesh-purswani

# Install the packages
npm install

# Start the environment
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to experience the functional layout.
