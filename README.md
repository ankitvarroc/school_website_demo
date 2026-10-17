# Dynamic Public School — Flagship Institutional Platform (Next.js + Bootstrap + React Bits)

A production-ready enterprise starter template built for **Dynamic Public School** with **Next.js 16 (App Router & Turbopack)**, **Bootstrap 5**, and **React Bits** animated motion components.

---

## 🚀 Key Architectural Highlights

1. **Clean SSR & Client Boundary Strategy**:
   - Bootstrap's CSS and Bootstrap Icons are loaded globally on the server.
   - Bootstrap JavaScript (`bootstrap.bundle.min.js`) is lazily hydrated on client-mount via [`src/components/BootstrapClient.tsx`](src/components/BootstrapClient.tsx) to prevent `document is not defined` runtime SSR errors.
2. **React Bits Component Architecture**:
   - Modular, self-contained animated components organized in [`src/components/reactbits/`](src/components/reactbits/).
   - Powered by **Framer Motion** and **GSAP** for 60fps hardware-accelerated animations.
   - Fully compatible with Bootstrap layouts and grids without requiring Tailwind CSS.
3. **Modern Styling & Dark Theme**:
   - Equipped with `data-bs-theme="dark"` and sleek glassmorphism styles.
   - Enhanced button gradients, custom badges, and responsive containers.

---

## 📁 Directory Structure

```text
dav/
├── src/
│   ├── app/
│   │   ├── globals.css         # Custom tokens, Bootstrap dark theme enhancements & glassmorphism
│   │   ├── layout.tsx          # Root layout importing Bootstrap CSS/Icons & BootstrapClient
│   │   └── page.tsx            # Full interactive showcase with React Bits & Bootstrap components
│   └── components/
│       ├── BootstrapClient.tsx # Client-side dynamic loader for Bootstrap JS features
│       └── reactbits/          # React Bits animated motion library
│           ├── text/
│           │   ├── SplitText.tsx   # Staggered character/word reveals
│           │   ├── BlurText.tsx    # Blur-to-sharp animated typography
│           │   ├── ShinyText.tsx   # Sweeping light metallic text effect
│           │   └── TrueFocus.tsx   # Neon focus frame tracking words
│           ├── backgrounds/
│           │   └── Squares.tsx     # High-performance interactive grid canvas
│           ├── components/
│           │   ├── SpotlightCard.tsx # Dynamic cursor spotlight illumination
│           │   └── Magnet.tsx        # Spring physics magnetic button pull
│           └── index.ts        # Barrel export for clean imports
├── public/
├── package.json
└── tsconfig.json
```

---

## 📦 Installed Dependencies

### Framework & Core
- `next`: ^16.4.2 (App Router with Turbopack)
- `react`: ^19.3.0
- `react-dom`: ^19.3.0

### Bootstrap Suite
- `bootstrap`: ^5.3.8
- `react-bootstrap`: ^2.10.10
- `bootstrap-icons`: ^1.13.2
- `@popperjs/core`: ^2.11.8

### React Bits Animation Engine
- `framer-motion`: ^14.3.0
- `gsap`: ^3.15.0
- `lucide-react`: ^1.58.0

---

## 🛠️ Getting Started

### 1. Start Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 2. Build for Production
```bash
npm run build
```

### 3. Run ESLint Validation
```bash
npm run lint
```

---

## 🧩 Adding New React Bits Components

When adding new components from [reactbits.dev](https://reactbits.dev/):
1. Place the component file in `src/components/reactbits/<category>/<ComponentName>.tsx`.
2. Ensure `"use client";` is declared at the top if the component utilizes hooks, canvas, or motion physics.
3. Export it in `src/components/reactbits/index.ts`.
4. Import directly in your pages:
   ```tsx
   import { SplitText, SpotlightCard } from "@/components/reactbits";
   ```
