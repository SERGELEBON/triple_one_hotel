# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js hotel website for **Triple One Hotel** in Ghana, built with TypeScript, Tailwind CSS, shadcn/ui components, and Prisma ORM with SQLite. The site showcases hotel accommodations, services, event spaces, and includes a contact form.

## Tech Stack

- **Framework**: Next.js 16 (App Router) with TypeScript
- **Styling**: Tailwind CSS 4 with shadcn/ui components
- **Database**: SQLite via Prisma ORM
- **Runtime**: Bun (recommended)
- **Deployment**: Configured for standalone output

## Key Commands

### Development
```bash
bun run dev          # Start dev server on port 3000 (logs to dev.log)
bun run build        # Build for production (creates standalone output)
bun run start        # Run production build (logs to server.log)
bun run lint         # Run ESLint
```

### Database Management
```bash
bun run db:push      # Push schema changes to database (accepts data loss)
bun run db:generate  # Generate Prisma Client
bun run db:migrate   # Create and run migrations
bun run db:reset     # Reset database to initial state
```

## Architecture

### App Structure (Next.js App Router)
- `/src/app/` - Page routes and layouts
  - Route groups: `accommodation`, `restaurant`, `services`, `gallery`, `about-us`, `contact-us`
  - `/api/contact/` - Contact form submission endpoint
- `/src/components/` - Reusable components
  - `/site/` - Hotel-specific components (header, footer, room cards, etc.)
  - `/site/sections/` - Homepage sections (hero, rooms, services, gallery, etc.)
  - `/ui/` - shadcn/ui base components
- `/src/lib/` - Utilities
  - `db.ts` - Prisma client singleton
  - `utils.ts` - Tailwind merge utilities

### Data Layer
- **Prisma Models**: User, Post, ContactMessage (see `prisma/schema.prisma`)
- **Content Data**: All hotel content (rooms, services, navigation) centralized in `/src/components/site/site-data.ts`
- **Database**: SQLite file at path specified in `.env` (`DATABASE_URL`)

### Styling
- CSS variables for theming defined in `globals.css`
- Two Google Fonts: Inter (body) and Playfair Display (headings)
- Tailwind 4 with `@tailwindcss/postcss`

## Important Notes

- **TypeScript**: Build errors are currently ignored (`ignoreBuildErrors: true`)
- **React Strict Mode**: Disabled (`reactStrictMode: false`)
- **Output**: Standalone mode enabled for optimized deployment
- **Hotel Content**: To update hotel information (rooms, prices, services, contact info), edit `/src/components/site/site-data.ts`
- **Image Assets**: Hotel images expected in `/public/images/` directory
- **Build Process**: Build copies static assets and public folder to standalone output

## Database Workflow

1. Modify schema in `prisma/schema.prisma`
2. Run `bun run db:push` for dev changes or `bun run db:migrate` for production
3. Run `bun run db:generate` to update Prisma Client types

## Environment Variables

- `DATABASE_URL` - SQLite database file path (required)
