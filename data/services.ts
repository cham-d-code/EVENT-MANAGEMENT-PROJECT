export type Service = {
  slug: string;
  name: string;
  description: string;
  includes: string[];
  icon: LucideIconName;
};

export type LucideIconName =
  | "ClipboardList"
  | "Users"
  | "Lightbulb"
  | "AudioLines"
  | "Video"
  | "Clapperboard"
  | "Camera"
  | "Wand2";

export const services: Service[] = [
  {
    slug: "event-planning",
    name: "Event Planning",
    description:
      "End-to-end planning from concept to run-of-show. {{SERVICE_DESCRIPTION_PLACEHOLDER}}",
    includes: [
      "Concept & creative direction",
      "Budgeting & timeline",
      "Vendor sourcing",
      "Run-of-show documentation",
    ],
    icon: "ClipboardList",
  },
  {
    slug: "event-coordination",
    name: "Event Coordination",
    description:
      "On-ground execution and vendor management. {{SERVICE_DESCRIPTION_PLACEHOLDER}}",
    includes: [
      "Day-of logistics",
      "Vendor & crew management",
      "Attendee flow",
      "Live issue resolution",
    ],
    icon: "Users",
  },
  {
    slug: "lighting",
    name: "Lighting",
    description:
      "Stage, ambient, and architectural lighting design. {{SERVICE_DESCRIPTION_PLACEHOLDER}}",
    includes: [
      "Stage lighting design",
      "Ambient & architectural lighting",
      "Rigging & programming",
      "Live operation",
    ],
    icon: "Lightbulb",
  },
  {
    slug: "audio",
    name: "Audio",
    description:
      "Sound engineering, PA systems, live mixing. {{SERVICE_DESCRIPTION_PLACEHOLDER}}",
    includes: [
      "PA system design",
      "Live sound mixing",
      "Microphone & monitor setup",
      "Acoustic treatment",
    ],
    icon: "AudioLines",
  },
  {
    slug: "video-production",
    name: "Video Production",
    description:
      "Live switching, streaming, LED walls. {{SERVICE_DESCRIPTION_PLACEHOLDER}}",
    includes: [
      "Live multi-camera switching",
      "Streaming & broadcast",
      "LED wall content & operation",
      "Playback & show control",
    ],
    icon: "Video",
  },
  {
    slug: "videography",
    name: "Videography",
    description: "Event films, highlight reels, aftermovies. {{SERVICE_DESCRIPTION_PLACEHOLDER}}",
    includes: [
      "Multi-camera coverage",
      "Highlight reels",
      "Aftermovies",
      "Interview-style content",
    ],
    icon: "Clapperboard",
  },
  {
    slug: "photography",
    name: "Photography",
    description: "Event coverage, portraits, editorial. {{SERVICE_DESCRIPTION_PLACEHOLDER}}",
    includes: [
      "Full event coverage",
      "Portraits & headshots",
      "Editorial-style stills",
      "Same-day previews",
    ],
    icon: "Camera",
  },
  {
    slug: "post-production",
    name: "Post-Production",
    description: "Editing, color, motion graphics. {{SERVICE_DESCRIPTION_PLACEHOLDER}}",
    includes: [
      "Editing & story assembly",
      "Color grading",
      "Motion graphics & titles",
      "Sound design",
    ],
    icon: "Wand2",
  },
];
