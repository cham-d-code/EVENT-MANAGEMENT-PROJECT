import fs from "node:fs";
import path from "node:path";

// Server-only: reads whatever images are sitting in public/images/hero/slides
// so dropping files in that folder is enough — no data file to edit. Only
// ever import this from a Server Component (e.g. app/page.tsx), never from
// a "use client" file, or the build would try to bundle `fs` for the browser.
const SLIDES_DIR = path.join(process.cwd(), "public", "images", "hero", "slides");
const VALID_EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif"]);

export function getHeroSlides(): string[] {
  let files: string[];
  try {
    files = fs.readdirSync(SLIDES_DIR);
  } catch {
    return [];
  }

  return files
    .filter((file) => VALID_EXTENSIONS.has(path.extname(file).toLowerCase()))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
    .map((file) => `/images/hero/slides/${file}`);
}
