# User Directory

A compact user directory that fetches people from **JSONPlaceholder** and lets you filter by **name**, **city**, and **company**. Built to showcase clean React + Next composition, atomic component layering, and solid UX (debounced search, clear filters, loading/error states).

---

## ✨ Features

* Fetch users from a public API (JSONPlaceholder)
* Debounced text search (smooth typing; fewer re-renders)
* Free text and dropdown filters
* Resilient data fetch with `AbortController` and retry button
* Responsive card grid (mobile → desktop)

---

## 🧱 Tech Stack

* **React 19** + **Next 15** + **TypeScript**
* **shadcn/ui** (Radix + Tailwind)
* **Lucide** icons
* **Biome** formatter and linter
* **Bun** (recommended) — or any Node package manager

> No environment variables required.

---

## 🚀 Getting Started

### Prerequisites

* **Bun** ≥ 1.x *(recommended)*
  or **Node** ≥ 18 with **npm**/**pnpm**/**yarn**.

### Install & Run (Bun)

```bash
bun install
bun dev
```

The terminal will show the local development URL.

### Build & Preview

```bash
# Bun
bun build
bun start
```

---

## 🗂️ Project Structure (excerpt)

```
app/
  layout.tsx
  page.tsx
components/
  ui/                # shadcn/ui atoms
  molecules/         # multiple specific functional ui components 
  organisms/         # group of molecules components
hooks/
  useUsers.ts       # fetch with AbortController + refetch
  useDebouncedValue.ts
constants/
lib/
  utils.ts          # utility functions
types/

```
