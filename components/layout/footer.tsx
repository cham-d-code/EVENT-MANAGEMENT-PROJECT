import Link from "next/link";
import Image from "next/image";
import { InstagramIcon, LinkedinIcon, YoutubeIcon, BehanceIcon } from "@/components/ui/social-icons";
import { siteConfig } from "@/config/site";

const socials = [
  { icon: InstagramIcon, href: siteConfig.social.instagram, label: "Instagram" },
  { icon: LinkedinIcon, href: siteConfig.social.linkedin, label: "LinkedIn" },
  { icon: YoutubeIcon, href: siteConfig.social.youtube, label: "YouTube" },
  { icon: BehanceIcon, href: siteConfig.social.behance, label: "Behance" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-line-soft bg-ink-soft">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Link href="/" className="flex items-center gap-3">
              <Image src="/logo.svg" alt={siteConfig.name} width={36} height={36} />
              <span className="font-display text-xl font-bold text-paper">{siteConfig.name}</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm text-fog">{siteConfig.tagline}</p>
            <div className="mt-6 flex items-center gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-paper/15 text-fog transition-colors duration-300 hover:border-ember hover:text-ember-2"
                >
                  <Icon size={16} />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-fog-dim">Quick links</h3>
            <ul className="mt-4 space-y-3">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-fog transition-colors hover:text-paper">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-fog-dim">Get in touch</h3>
            <ul className="mt-4 space-y-3 text-sm text-fog">
              <li>{siteConfig.email}</li>
              <li>{siteConfig.phone}</li>
              <li>{siteConfig.location}</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-line-soft pt-8 text-xs text-fog-dim md:flex-row">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p>Built with Next.js, Tailwind CSS &amp; Framer Motion.</p>
        </div>
      </div>
    </footer>
  );
}
