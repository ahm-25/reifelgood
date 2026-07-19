# Nuxt 4 Frontend Architecture: Premium SaaS Landing Page ("AETHER")

## Executive Summary
This document defines the scalable, handcrafted architecture for **AETHER**, an Apple and Linear-inspired luxury modern SaaS landing page built with **Nuxt 4**, **Vue 3 Composition API (`<script setup lang="ts">`)**, **TypeScript**, **Tailwind CSS**, and **GSAP**. Zero external UI libraries are used; every component, interactive card, button, accordion, and SVG icon is 100% handcrafted for maximum performance, accessibility, and aesthetic perfection.

---

## 1. Scalable Folder Architecture (`app/` Directory Standard for Nuxt 4)

```
d:\reifelgood/
├── app/
│   ├── app.vue                     # Root layout wrapper with ambient background effects & global transitions
│   ├── assets/
│   │   └── css/
│   │       └── main.css            # Tailwind design system, glassmorphism tokens, and custom keyframes
│   ├── components/
│   │   ├── common/                 # Atomic, handcrafted primitives (Buttons, Badges, Glass Cards)
│   │   │   ├── AppButton.vue       # Interactive button with hover sheen, magnet feel, and focus-visible rings
│   │   │   ├── AppBadge.vue        # Sleek glassmorphic pill badge with shimmer animation
│   │   │   ├── GlassCard.vue       # Core soft glass card (`backdrop-blur-xl`, subtle border, mouse-glow)
│   │   │   └── SectionHeader.vue   # Standardized typography hierarchy with animated subtitle & gradient title
│   │   ├── icons/                  # Handcrafted inline SVG icon system (Strict zero UI library compliance)
│   │   │   ├── IconCommand.vue     # ⌘ Command / Action symbol
│   │   │   ├── IconSparkle.vue     # AI / Intelligence symbol
│   │   │   ├── IconLightning.vue   # Speed / Real-time execution symbol
│   │   │   ├── IconShield.vue      # Enterprise grade security symbol
│   │   │   ├── IconChart.vue       # Analytics / Telemetry symbol
│   │   │   ├── IconCheck.vue       # Accessible checkmark indicator
│   │   │   ├── IconArrowRight.vue  # Directional CTA arrow
│   │   │   ├── IconCode.vue        # Developer API bracket symbol
│   │   │   ├── IconLayers.vue      # Architecture / Multi-tenant symbol
│   │   │   ├── IconGlobe.vue       # Global edge network symbol
│   │   │   └── IconWorkflow.vue    # Automated workflow nodes symbol
│   │   ├── layout/                 # Global structural layout components
│   │   │   ├── AppNavbar.vue       # Sticky glassmorphic navigation bar with mobile responsive drawer
│   │   │   ├── AppFooter.vue       # Apple-style minimal footer with live system status indicator & links
│   │   │   └── AmbientBackground.vue # Floating soft blurred shapes (Deep violet, fuchsia, cyan orbs)
│   │   └── sections/               # Modular, highly cohesive landing page sections
│   │       ├── HeroSection.vue     # High-impact Hero with interactive Command/Terminal simulator
│   │       ├── SocialProof.vue     # Enterprise ticker with glassmorphic stat callouts
│   │       ├── FeaturesBento.vue   # Linear-style Bento Box grid with interactive card states & GSAP reveals
│   │       ├── InteractiveDemo.vue # Live interactive workflow / API builder simulator for users
│   │       ├── MetricsSection.vue  # Live animated counter metrics triggered on scroll
│   │       ├── PricingSection.vue  # Monthly/Annual toggle pricing cards with popular glow badge
│   │       ├── Testimonials.vue    # Sleek quote cards grid with executive avatars & roles
│   │       ├── FaqSection.vue      # Handcrafted accessible accordion (`aria-expanded`, smooth height transitions)
│   │       └── CtaSection.vue      # High-conversion closing banner with floating glass orb effects
│   ├── composables/                # Typed Vue 3 composition functions for shared behaviors
│   │   ├── useGsap.ts              # Safe GSAP registration, ScrollTrigger management & automatic cleanup
│   │   └── useMouseGlow.ts         # Calculates dynamic mouse-follow spotlight on glass cards
│   ├── types/                      # TypeScript interfaces and data contracts
│   │   └── landing.ts              # Interfaces for `FeatureItem`, `PricingPlan`, `Testimonial`, `FaqItem`
│   ├── data/                       # Centralized, strongly-typed content models
│   │   └── landingData.ts          # Content dictionary ensuring easy localization and scalability
│   ├── pages/
│   │   └── index.vue               # Main landing page integrating sections with comprehensive `useSeoMeta`
│   └── plugins/                    # Nuxt 4 client plugins
│       └── gsap.client.ts          # Client-side GSAP & ScrollTrigger registration
├── public/                         # Static web assets (favicon, robots.txt, OG social preview cards)
├── nuxt.config.ts                  # Nuxt 4 configuration, Vite Tailwind setup, and SEO attributes
├── tailwind.config.ts              # Tailwind CSS configuration and theme extensions
├── tsconfig.json                   # Strict TypeScript compiler options
└── package.json                    # Project dependencies (`gsap`, `@tailwindcss/vite`, `tailwindcss`)
```

---

## 2. Design System & Aesthetic Foundations

### A. Color Palette (Obsidian & Luxury Neon)
- **Background (`#060608` to `#0A0A0E`)**: Deep obsidian dark mode with subtle radial ambient glow.
- **Glass Surfaces (`rgba(255, 255, 255, 0.03)` to `0.07`)**: Ultra-soft glassmorphism (`backdrop-blur-xl`) with 1px border highlights (`border-white/10` to `border-white/20`).
- **Accent Gradients**:
  - *Linear Purple*: `from-violet-500 via-purple-500 to-fuchsia-500`
  - *Apple Cyan*: `from-cyan-400 via-teal-400 to-blue-500`
  - *Text Sheen*: `bg-clip-text text-transparent bg-gradient-to-b from-white via-white/90 to-white/50`

### B. Typography & Spacing
- **Font**: Inter / Outfit modern clean sans-serif with tight letter spacing (`tracking-tight` on headings, `tracking-widest uppercase` on badges).
- **Spacing**: Generous vertical rhythm (`py-24 md:py-32`) ensuring effortless breathing room between sections.

### C. GSAP Animation Strategy
- **Hero Stagger**: Smooth upward fade-in stagger of badges, headline, subheadline, CTAs, and interactive command bar.
- **ScrollTrigger Bento Grid**: Cards reveal dynamically as they enter the viewport using subtle y-axis translation and opacity transitions.
- **Animated Counters**: Scroll-triggered numerical counter animations for performance metrics.
- **Ambient Floating Orbs**: Continuous organic drift of background blurred blobs (`blur-3xl opacity-30`).

### D. Accessibility & SEO Standards
- **Semantic HTML**: `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`, `<article>`, `<button>`.
- **Keyboard Navigation & Focus**: Clear `focus-visible:ring-2 focus-visible:ring-violet-500/80 focus-visible:outline-none` on all interactive elements.
- **ARIA Attributes**: `aria-expanded`, `aria-controls`, `aria-label`, `role="region"`.
- **SEO Metadata**: Full `useSeoMeta` including title, description, OpenGraph tags, Twitter summary card, and structured data (JSON-LD).
