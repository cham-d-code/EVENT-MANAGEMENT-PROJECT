# {{COMPANY_NAME}} — Event Management Portfolio

A portfolio website for an event management studio, built to convince
prospective clients (companies, universities, organizers) that the team can
run their event end-to-end — planning through execution.

## Tech stack

- **Framework:** Next.js 16 (App Router) + TypeScript
- **Styling:** Tailwind CSS v4
- **Animation:** Framer Motion (section reveals, image hovers, page transitions)
- **Icons:** lucide-react
- **Content:** typed data files, no CMS

## Getting started

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Where to edit content

| What | File |
| --- | --- |
| Company name, tagline, contact info, nav links, social links | [`/config/site.ts`](config/site.ts) |
| Events (portfolio work) | [`/data/events.ts`](data/events.ts) |
| Team members | [`/data/team.ts`](data/team.ts) |
| Services | [`/data/services.ts`](data/services.ts) |
| Logo | [`/public/logo.svg`](public/logo.svg) |

Anywhere real copy is missing, you'll find a `{{TOKEN_LIKE_THIS}}` placeholder
— search the codebase for `{{` to find every spot that still needs real
content.

## Adding a new event

Append an object to the `events` array in [`/data/events.ts`](data/events.ts):

```ts
{
  slug: "my-new-event",
  name: "My New Event",
  category: "Other", // "Hackathon" | "Exposition" | "Interview Series" | "Other"
  year: 2025,
  client: "Client name",
  location: "City, Country",
  coverImage: "/images/events/my-new-event/cover.jpg",
  gallery: ["/images/events/my-new-event/1.jpg", "/images/events/my-new-event/2.jpg"],
  services: ["event-planning", "lighting"], // slugs from /data/services.ts
  description: "First paragraph.\n\nSecond paragraph.",
  featured: false, // set true to show on the homepage (3-4 max recommended)
}
```

Then drop matching images into `public/images/events/my-new-event/` — see
[`/public/images/README.md`](public/images/README.md).

## Adding a new team member

Append an object to the `team` array in [`/data/team.ts`](data/team.ts). The
About page grid reflows automatically — no layout changes needed.

## Changing the theme colors

All colors are defined once as design tokens in the `@theme` block at the top
of [`/app/globals.css`](app/globals.css) (`--color-ink`, `--color-ember`,
`--color-paper`, etc.). Change a value there and it updates everywhere the
corresponding Tailwind utility (`bg-ink`, `text-ember`, ...) is used.

Fonts are wired in [`/app/layout.tsx`](app/layout.tsx) via `next/font/google`
(Unbounded for display headings, Manrope for body text) — swap the font
imports there to change typefaces.

## Images

No real images are committed. Every path is a placeholder that resolves to a
graceful fallback until you add the real file — see
[`/public/images/README.md`](public/images/README.md) for the full folder
map and recommended sizes.

## Contact form

The contact form ([`/app/contact/page.tsx`](app/contact/page.tsx) and
[`/components/contact/contact-form.tsx`](components/contact/contact-form.tsx))
validates client-side and logs submissions to the console with a success
state — there's no backend wired up yet. Look for the `TODO: wire to email
service` comment in `contact-form.tsx` to connect it to Resend, Formspree, or
your own API route.

## Deployment

The app is built to deploy on Vercel with zero configuration:

```bash
npm run build
```

## Out of scope for v1

CMS integration, actual email sending, blog, multi-language support, and
analytics wiring are intentionally left out — see the build spec for details.
