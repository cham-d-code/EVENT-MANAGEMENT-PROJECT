export type Event = {
  slug: string;
  name: string;
  category: "Hackathon" | "Exposition" | "Interview Series" | "Other";
  year: number;
  client?: string;
  location?: string;
  coverImage: string; // /images/events/{slug}/cover.jpg
  gallery: string[]; // /images/events/{slug}/1.jpg ...
  services: string[]; // slugs from /data/services.ts
  description: string;
  featured: boolean;
};

function gallery(slug: string, count: number) {
  return Array.from({ length: count }, (_, i) => `/images/events/${slug}/${i + 1}.jpg`);
}

export const events: Event[] = [
  {
    slug: "hackx-grand-finale",
    name: "HackX Grand Finale",
    category: "Hackathon",
    year: 2024,
    client: "{{CLIENT_NAME}}",
    location: "{{EVENT_LOCATION}}",
    coverImage: "/images/events/hackx-grand-finale/cover.jpg",
    gallery: gallery("hackx-grand-finale", 8),
    services: ["event-planning", "event-coordination", "lighting", "audio", "videography"],
    description:
      "{{EVENT_DESCRIPTION_PARA_1}} Placeholder copy describing the scale and format of the HackX Grand Finale, the run-of-show, and the outcome for the client.\n\n{{EVENT_DESCRIPTION_PARA_2}} A second placeholder paragraph covering standout moments, attendee numbers, and production highlights.",
    featured: true,
  },
  {
    slug: "hackx-jr-grand-finale",
    name: "HackX Jr Grand Finale",
    category: "Hackathon",
    year: 2024,
    client: "{{CLIENT_NAME}}",
    location: "{{EVENT_LOCATION}}",
    coverImage: "/images/events/hackx-jr-grand-finale/cover.jpg",
    gallery: gallery("hackx-jr-grand-finale", 6),
    services: ["event-planning", "event-coordination", "photography"],
    description:
      "{{EVENT_DESCRIPTION_PARA_1}} Placeholder copy describing HackX Jr, the junior edition of the flagship hackathon finale.\n\n{{EVENT_DESCRIPTION_PARA_2}} A second placeholder paragraph on audience, format, and highlights.",
    featured: true,
  },
  {
    slug: "ideasprint",
    name: "IdeaSprint",
    category: "Hackathon",
    year: 2023,
    client: "{{CLIENT_NAME}}",
    location: "{{EVENT_LOCATION}}",
    coverImage: "/images/events/ideasprint/cover.jpg",
    gallery: gallery("ideasprint", 6),
    services: ["event-planning", "event-coordination", "video-production"],
    description:
      "{{EVENT_DESCRIPTION_PARA_1}} Placeholder copy describing IdeaSprint's format and goals.\n\n{{EVENT_DESCRIPTION_PARA_2}} A second placeholder paragraph on results and production notes.",
    featured: true,
  },
  {
    slug: "exposition",
    name: "Exposition",
    category: "Exposition",
    year: 2024,
    client: "{{CLIENT_NAME}}",
    location: "{{EVENT_LOCATION}}",
    coverImage: "/images/events/exposition/cover.jpg",
    gallery: gallery("exposition", 10),
    services: ["event-planning", "lighting", "audio", "video-production", "photography"],
    description:
      "{{EVENT_DESCRIPTION_PARA_1}} Placeholder copy describing the Exposition showcase, exhibitors, and staging.\n\n{{EVENT_DESCRIPTION_PARA_2}} A second placeholder paragraph on scale and production highlights.",
    featured: true,
  },
  {
    slug: "exposition-interview-series-vol-1",
    name: "Exposition Interview Series — Vol 1",
    category: "Interview Series",
    year: 2024,
    client: "{{CLIENT_NAME}}",
    location: "{{EVENT_LOCATION}}",
    coverImage: "/images/events/exposition-interview-series-vol-1/cover.jpg",
    gallery: gallery("exposition-interview-series-vol-1", 6),
    services: ["videography", "post-production"],
    description:
      "{{EVENT_DESCRIPTION_PARA_1}} Placeholder copy describing Volume 1 of the Exposition interview series.\n\n{{EVENT_DESCRIPTION_PARA_2}} A second placeholder paragraph on featured guests and format.",
    featured: false,
  },
  {
    slug: "exposition-interview-series-vol-2",
    name: "Exposition Interview Series — Vol 2",
    category: "Interview Series",
    year: 2024,
    client: "{{CLIENT_NAME}}",
    location: "{{EVENT_LOCATION}}",
    coverImage: "/images/events/exposition-interview-series-vol-2/cover.jpg",
    gallery: gallery("exposition-interview-series-vol-2", 6),
    services: ["videography", "post-production"],
    description:
      "{{EVENT_DESCRIPTION_PARA_1}} Placeholder copy describing Volume 2 of the Exposition interview series.\n\n{{EVENT_DESCRIPTION_PARA_2}} A second placeholder paragraph on featured guests and format.",
    featured: false,
  },
  {
    slug: "exposition-interview-series-vol-3",
    name: "Exposition Interview Series — Vol 3",
    category: "Interview Series",
    year: 2024,
    client: "{{CLIENT_NAME}}",
    location: "{{EVENT_LOCATION}}",
    coverImage: "/images/events/exposition-interview-series-vol-3/cover.jpg",
    gallery: gallery("exposition-interview-series-vol-3", 6),
    services: ["videography", "post-production"],
    description:
      "{{EVENT_DESCRIPTION_PARA_1}} Placeholder copy describing Volume 3 of the Exposition interview series.\n\n{{EVENT_DESCRIPTION_PARA_2}} A second placeholder paragraph on featured guests and format.",
    featured: false,
  },
  {
    slug: "exposition-interview-series-vol-4",
    name: "Exposition Interview Series — Vol 4",
    category: "Interview Series",
    year: 2024,
    client: "{{CLIENT_NAME}}",
    location: "{{EVENT_LOCATION}}",
    coverImage: "/images/events/exposition-interview-series-vol-4/cover.jpg",
    gallery: gallery("exposition-interview-series-vol-4", 6),
    services: ["videography", "post-production"],
    description:
      "{{EVENT_DESCRIPTION_PARA_1}} Placeholder copy describing Volume 4 of the Exposition interview series.\n\n{{EVENT_DESCRIPTION_PARA_2}} A second placeholder paragraph on featured guests and format.",
    featured: false,
  },
  {
    slug: "placeholder-event-9",
    name: "Placeholder Event 9",
    category: "Other",
    year: 2023,
    client: "{{CLIENT_NAME}}",
    location: "{{EVENT_LOCATION}}",
    coverImage: "/images/events/placeholder-event-9/cover.jpg",
    gallery: gallery("placeholder-event-9", 6),
    services: ["event-planning", "photography"],
    description:
      "{{EVENT_DESCRIPTION_PARA_1}} Placeholder copy for event 9.\n\n{{EVENT_DESCRIPTION_PARA_2}} A second placeholder paragraph for event 9.",
    featured: false,
  },
  {
    slug: "placeholder-event-10",
    name: "Placeholder Event 10",
    category: "Other",
    year: 2023,
    client: "{{CLIENT_NAME}}",
    location: "{{EVENT_LOCATION}}",
    coverImage: "/images/events/placeholder-event-10/cover.jpg",
    gallery: gallery("placeholder-event-10", 6),
    services: ["event-coordination", "audio"],
    description:
      "{{EVENT_DESCRIPTION_PARA_1}} Placeholder copy for event 10.\n\n{{EVENT_DESCRIPTION_PARA_2}} A second placeholder paragraph for event 10.",
    featured: false,
  },
  {
    slug: "placeholder-event-11",
    name: "Placeholder Event 11",
    category: "Other",
    year: 2022,
    client: "{{CLIENT_NAME}}",
    location: "{{EVENT_LOCATION}}",
    coverImage: "/images/events/placeholder-event-11/cover.jpg",
    gallery: gallery("placeholder-event-11", 6),
    services: ["video-production", "post-production"],
    description:
      "{{EVENT_DESCRIPTION_PARA_1}} Placeholder copy for event 11.\n\n{{EVENT_DESCRIPTION_PARA_2}} A second placeholder paragraph for event 11.",
    featured: false,
  },
];

export function getEventBySlug(slug: string) {
  return events.find((e) => e.slug === slug);
}

export function getFeaturedEvents() {
  return events.filter((e) => e.featured);
}

export const eventCategories = ["All", "Hackathons", "Expositions", "Interview Series", "Other"] as const;

export function categoryToFilter(category: Event["category"]) {
  switch (category) {
    case "Hackathon":
      return "Hackathons";
    case "Exposition":
      return "Expositions";
    default:
      return category;
  }
}
