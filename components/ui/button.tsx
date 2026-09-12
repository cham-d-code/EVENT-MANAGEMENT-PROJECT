import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { Magnetic } from "@/components/ui/magnetic";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "solid" | "outline";
  className?: string;
  withIcon?: boolean;
};

export function Button({ href, children, variant = "solid", className = "", withIcon = true }: ButtonProps) {
  const base =
    "group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-300 will-change-transform hover:-translate-y-0.5";
  const styles =
    variant === "solid"
      ? "bg-gradient-to-r from-ember-2 via-ember to-ember-deep text-ink shadow-[0_0_0_1px_rgba(255,255,255,0.06)] hover:shadow-[0_10px_30px_-8px_rgba(255,106,31,0.55)]"
      : "border border-paper/25 text-paper hover:border-ember hover:text-ember-2";

  return (
    <Magnetic>
      <Link href={href} className={`${base} ${styles} ${className}`}>
        {children}
        {withIcon && (
          <ArrowUpRight
            size={16}
            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        )}
      </Link>
    </Magnetic>
  );
}

export function PillLink({ href, children, active = false }: { href: string; children: ReactNode; active?: boolean }) {
  return (
    <Link
      href={href}
      className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-widest transition-colors duration-300 ${
        active
          ? "border-ember bg-ember/10 text-ember-2"
          : "border-paper/15 text-fog hover:border-paper/40 hover:text-paper"
      }`}
    >
      {children}
    </Link>
  );
}
