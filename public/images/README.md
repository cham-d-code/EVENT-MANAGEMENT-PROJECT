# Image placeholders

No real images are committed for v1. Every image path referenced in the data
files points here — drop matching files in and they'll appear automatically
(no code changes needed). Anywhere an image is missing, the site shows a
graceful placeholder instead of a broken icon.

## Where things go

```
public/
  logo.svg                         # wordmark, swap for the real logo
  images/
    hero/
      slides/
        anything.jpg                # homepage hero background slideshow —
        another-one.jpg              # drop any number of images in here,
        ...                          # no code or data-file edit needed
      hero.jpg                     # homepage hero background image (single-image mode)
      poster.jpg                   # poster frame for the hero video (if used)
      loop.mp4                     # looping hero background video (if used)
    events/
      {event-slug}/
        cover.jpg                  # card + detail page hero image
        1.jpg, 2.jpg, 3.jpg ...    # gallery images (any count)
    team/
      member-1.jpg ... member-8.jpg
```

Event slugs match the `slug` field in [`/data/events.ts`](../../data/events.ts).
Team images match the `image` path set per member in [`/data/team.ts`](../../data/team.ts).

## Recommended sizes

- Event cover images: at least 1600×1200px, landscape.
- Gallery images: at least 1200×1200px, square works best for the grid.
- Team photos: at least 800×1000px, portrait (3:4).
- Hero image: at least 1920×1080px.

## Homepage hero background

The hero supports three background modes — a cross-dissolving slideshow, a
single static image, or a looping video — controlled by the `HERO_MEDIA_TYPE`
constant at the top of [`/components/home/hero.tsx`](../../components/home/hero.tsx).
It defaults to `"slideshow"`.

**Slideshow mode** (the default): drop any number of images into
`public/images/hero/slides/` — any filenames, any of `.jpg` `.jpeg` `.png`
`.webp` `.avif`. They're read from disk at build/request time
([`/lib/hero-slides.ts`](../../lib/hero-slides.ts)), sorted by filename, and
cross-dissolve into one another automatically (6s per slide, 1.4s fade). No
code or data-file edit needed — just add or remove files and restart/redeploy.
With zero images in the folder, the hero simply shows no background media.

Recommended size: at least 1920×1080px, landscape, similar exposure/color
across the set so the cross-dissolve reads as one continuous background
rather than a jump cut.
