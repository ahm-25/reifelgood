# AETHER: Complete Luxury Design System Specification

## Overview
The Aether Design System ("Obsidian & Neon") is handcrafted for modern, high-velocity SaaS applications. Every token is precision-tuned for high contrast readability, ultra-soft glassmorphic depth (`backdrop-blur-xl`), and Apple/Linear aesthetic standards.

---

## 1. Typography Hierarchy

Our typography pairs **Outfit** (geometric, authoritative display headers) with **Inter** (crystal-clear body reading & UI labels).

| Role | Font Family | Size (px / rem) | Line Height | Tracking (Letter Spacing) | Weight | Usage |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Display** | `Outfit`, sans-serif | `72px` (`4.5rem`) | `1.05` | `-0.04em` (`tracking-tighter`) | `800` (Extrabold) | Hero titles, landing impact headlines |
| **H1** | `Outfit`, sans-serif | `56px` (`3.5rem`) | `1.10` | `-0.035em` (`tracking-tight`) | `800` (Extrabold) | Primary page titles, section headers |
| **H2** | `Outfit`, sans-serif | `40px` (`2.5rem`) | `1.15` | `-0.03em` (`tracking-tight`) | `700` (Bold) | Major feature headers, pricing titles |
| **H3** | `Inter`, sans-serif | `24px` (`1.5rem`) | `1.25` | `-0.02em` (`tracking-normal`) | `600` (Semibold) | Bento card titles, modal headings |
| **Body** | `Inter`, sans-serif | `16px` (`1.0rem`) | `1.60` | `-0.01em` (`tracking-normal`) | `400` (Normal) | Descriptive text, paragraphs, FAQs |
| **Caption** | `Inter`, sans-serif | `12px` (`0.75rem`)| `1.50` | `+0.04em` (`tracking-widest uppercase`) | `500` (Medium) | Pill badges, telemetry status, metadata |

---

## 2. Color System (Obsidian & Luxury Neon)

Our palette balances deep obsidian dark-mode backgrounds with vibrant, calibrated neon highlights for interactive feedback and subtle ambient glows.

| Role | Token Name | Hex / RGBA Value | Tailwind Class Variable | Description |
| :--- | :--- | :--- | :--- | :--- |
| **Primary** | `--color-primary` | `#A855F7` (`rgb(168, 85, 247)`) | `bg-primary`, `text-primary` | Electric Violet — Main CTAs, active highlights |
| **Secondary** | `--color-secondary` | `#06B6D4` (`rgb(6, 182, 212)`) | `bg-secondary`, `text-secondary` | Apple Cyan — Telemetry charts, secondary links |
| **Accent** | `--color-accent` | `#EC4899` (`rgb(236, 72, 153)`) | `bg-accent`, `text-accent` | Neon Fuchsia — AI neural engine indicators |
| **Background** | `--color-background` | `#060608` (`rgb(6, 6, 8)`) | `bg-background` | Pure Deep Obsidian — Main viewport backdrop |
| **Surface** | `--color-surface` | `rgba(255, 255, 255, 0.035)` | `bg-surface` | Glassmorphic cards, navigation bars |
| **Border** | `--color-border` | `rgba(255, 255, 255, 0.09)` | `border-surface-border` | Hairline border highlights for glass layers |
| **Muted** | `--color-muted` | `#94A3B8` (`rgb(148, 163, 184)`) | `text-muted` | High-contrast readable slate gray for body text |
| **Success** | `--color-success` | `#10B981` (`rgb(16, 185, 129)`) | `bg-success`, `text-success` | Operational status, 99.999% SLA metrics |
| **Warning** | `--color-warning` | `#F59E0B` (`rgb(245, 158, 11)`) | `bg-warning`, `text-warning` | Latency thresholds, system notices |
| **Danger** | `--color-danger` | `#F43F5E` (`rgb(244, 63, 94)`) | `bg-danger`, `text-danger` | Security threat neutralization, critical logs |

---

## 3. Spacing System (Harmonic Scale)

Precision spacing tokens ensuring consistent rhythm across layouts, cards, and micro-components.

| Scale Token | Pixel Value | Rem Value | Common Applications |
| :--- | :--- | :--- | :--- |
| **4** | `4px` | `0.25rem` | Micro padding, pill border gap |
| **8** | `8px` | `0.5rem` | Tight component spacing, icon margins |
| **12** | `12px` | `0.75rem` | Button vertical padding, badge interior spacing |
| **16** | `16px` | `1.0rem` | Card inner gap, form field spacing |
| **24** | `24px` | `1.5rem` | Standard card padding (`p-6`), grid gaps |
| **32** | `32px` | `2.0rem` | Large card padding (`p-8`), major element spacing |
| **48** | `48px` | `3.0rem` | Section header bottom margin |
| **64** | `64px` | `4.0rem` | Moderate section vertical breathing room |
| **96** | `96px` | `6.0rem` | Generous section-to-section luxury padding (`py-24`) |

---

## 4. Radius System (Sleek Rounded Corners)

Calibrated border radii designed for modern tactile smoothness without harsh edges.

| Radius Token | Pixel Value | Rem Value | Tailwind Variable | Target UI Elements |
| :--- | :--- | :--- | :--- | :--- |
| **Small** | `6px` | `0.375rem` | `--radius-sm` | `<kbd>` shortcuts, micro badges, tooltips |
| **Medium** | `12px` | `0.75rem` | `--radius-md` | Buttons, input boxes, inner status bars |
| **Large** | `16px` | `1.0rem` | `--radius-lg` | Standard Bento cards, modal dialogs |
| **XL** | `24px` | `1.5rem` | `--radius-xl` | Featured pricing tiers, large interactive panels |
| **2XL** | `32px` | `2.0rem` | `--radius-2xl` | Main Hero wrappers, outer glass card containers |

---

## 5. Shadow System (Multi-Layered Depth & Spotlight Glows)

Instead of flat gray drop shadows, our shadow system incorporates multi-layered dark ambient elevation combined with colored neon spotlight sheens (`shadow-luxury-medium`, `shadow-luxury-heavy`).

| Shadow Tier | CSS Definition | Visual Character |
| :--- | :--- | :--- |
| **Light** | `0 2px 10px -2px rgba(0,0,0,0.4), 0 1px 2px -1px rgba(255,255,255,0.05)` | Crisp separation for badges and small dropdowns |
| **Medium** | `0 12px 28px -6px rgba(0,0,0,0.65), 0 4px 12px -2px rgba(168,85,247,0.12), inset 0 1px 1px 0 rgba(255,255,255,0.1)` | Floating glass cards, navigation bar when scrolled |
| **Heavy** | `0 25px 50px -12px rgba(0,0,0,0.85), 0 0 45px -5px rgba(168,85,247,0.25), inset 0 1px 1px 0 rgba(255,255,255,0.18)` | Hero terminal widget, featured pricing tier, active modal |
