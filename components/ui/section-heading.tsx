import type { ReactNode } from "react";

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-paper/15 bg-paper/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-fog">
      <span className="h-1.5 w-1.5 rounded-full bg-ember" />
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={`flex flex-col gap-4 ${align === "center" ? "items-center text-center" : "items-start text-left"}`}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="font-display text-3xl font-bold leading-[1.1] text-paper sm:text-4xl lg:text-5xl">{title}</h2>
      {description && <p className="max-w-2xl text-base text-fog sm:text-lg">{description}</p>}
    </div>
  );
}
