import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

function base({ size = 18, ...props }: IconProps) {
  return {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    ...props,
  };
}

export function InstagramIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function LinkedinIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <line x1="7.5" y1="10.5" x2="7.5" y2="17" />
      <circle cx="7.5" cy="6.8" r="0.6" fill="currentColor" stroke="none" />
      <path d="M11.5 17v-3.6c0-1.6 1-2.7 2.5-2.7s2.5 1 2.5 2.6V17" />
      <line x1="11.5" y1="10.5" x2="11.5" y2="17" />
    </svg>
  );
}

export function YoutubeIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="2.5" y="6" width="19" height="12" rx="4" />
      <path d="M10.5 9.8v4.4l4-2.2z" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function BehanceIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M4 7h4.2c1.5 0 2.6.9 2.6 2.3 0 1-.5 1.7-1.4 2 1.1.3 1.8 1.1 1.8 2.3 0 1.6-1.3 2.6-3 2.6H4V7z" />
      <line x1="4.6" y1="10.9" x2="7.9" y2="10.9" />
      <line x1="4.6" y1="14" x2="8.3" y2="14" />
      <path d="M14 13.6c0 1.6 1 2.7 2.6 2.7 1.2 0 2-.5 2.4-1.4" />
      <path d="M14.2 12.4c.2-1.2 1.1-2 2.4-2 1.4 0 2.3.9 2.4 2.3h-4.9" />
      <line x1="15" y1="8" x2="19" y2="8" />
    </svg>
  );
}
