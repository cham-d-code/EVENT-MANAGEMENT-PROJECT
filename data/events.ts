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
    year: 2025,
    client: "IMSSA UOK",
    location: "Waters Edge Hotel, Battaramulla",
    coverImage: "/images/events/hackx-grand-finale/cover.jpg",
    gallery: gallery("hackx-grand-finale", 9),
    services: ["event-planning", "event-coordination", "lighting", "audio", "videography"],
    description:
      "hackX is a premier national inter-university startup and innovation challenge organized annually by the Industrial Management Science Students' Association (IMSSA) of the University of Kelaniya in collaboration with the Ministry of Science and Technology.\n\nThe grand finale is hosted at Waters Edge, Battaramulla, bringing together top undergraduate teams from across the country to pitch disruptive business models and software solutions aimed at driving real-world industrial impact.",
    featured: true,
  },
  {
    slug: "hackx-jr-grand-finale",
    name: "HackX Jr Grand Finale",
    category: "Hackathon",
    year: 2025,
    client: "IMSSA UOK",
    location: "Waters Edge Hotel, Battaramulla",
    coverImage: "/images/events/hackx-jr-grand-finale/cover.jpg",
    gallery: gallery("hackx-jr-grand-finale", 5),
    services: ["event-planning", "event-coordination", "photography"],
    description:
      "Operating under the theme \"Give Shape to Ideas,\" hackX Jr. is a flagship national inter-school hackathon designed for students ranging from Grade 9 up to Advanced Level.\n\nIts grand finale is also hosted at Waters Edge, Battaramulla, marking the culmination of a months-long journey where school teams showcase creative tech proposals, receive mentorship from industry experts, and bridge school-level innovation with the professional tech sphere.",
    featured: true,
  },
  {
    slug: "ideasprint",
    name: "IdeaSprint",
    category: "Hackathon",
    year: 2025,
    client: "IMSSA UOK",
    location: "University of Kelaniya",
    coverImage: "/images/events/ideasprint/cover.jpg",
    gallery: gallery("ideasprint", 7),
    services: ["event-planning", "event-coordination", "video-production"],
    description:
      "iDEASPRINT is an intra-departmental ideation competition and ideashop hosted by IMSSA exclusively for students within the Department of Industrial Management.\n\nIt functions as a foundational platform where participants pitch raw, creative problem statements and early-stage concepts, acting as a vital stepping stone to equip aspiring innovators for major competitive arenas like the hackX preliminaries.",
    featured: true,
  },
  {
    slug: "exposition",
    name: "Exposition",
    category: "Exposition",
    year: 2026,
    client: "IMSSA UOK",
    location: "University of Kelaniya",
    coverImage: "/images/events/exposition/cover.jpg",
    gallery: gallery("exposition", 13),
    services: ["event-planning", "lighting", "audio", "video-production", "photography"],
    description:
      "Exposition is the official annual magazine published by the Department of Industrial Management at the University of Kelaniya.\n\nIssue 21 — officially launched on March 6, 2026, at the department auditorium — delivers forward-thinking perspectives blending information technology, modern management strategies, and student creativity through cutting-edge tech trends, academic research, and undergraduate writing.",
    featured: true,
  },
  {
    slug: "exposition-interview-series-vol-1",
    name: "Exposition Interview Series — Vol 1",
    category: "Interview Series",
    year: 2025,
    client: "IMSSA UOK",
    location: "KASSA Studio",
    coverImage: "/images/events/exposition-interview-series-vol-1/cover.jpg",
    gallery: gallery("exposition-interview-series-vol-1", 1),
    services: ["lighting", "audio", "videography", "event-coordination"],
    description:
      "In this debut episode, Formula 3 driver Yevan David shares his journey of breaking barriers, racing against the best, and proving that talent knows no boundaries.\n\nAs a team, we took care of lighting, camera handling, event flow, shot direction, and audio capturing.",
    featured: false,
  },
  {
    slug: "exposition-interview-series-vol-2",
    name: "Exposition Interview Series — Vol 2",
    category: "Interview Series",
    year: 2025,
    client: "IMSSA UOK",
    location: "KASSA Studio",
    coverImage: "/images/events/exposition-interview-series-vol-2/cover.jpg",
    gallery: gallery("exposition-interview-series-vol-2", 1),
    services: ["lighting", "audio", "videography", "event-coordination"],
    description:
      "In this episode, we sit down with Nikin Matharaarachchi, Founder & CEO of Synapse AI Labs and a Forbes 30 Under 30 Asia honoree, to unpack the journey behind one of Sri Lanka's most talked-about AI ventures.\n\nAs a team, we took care of lighting, camera handling, event flow, shot direction, and audio capturing.",
    featured: false,
  },
  {
    slug: "exposition-interview-series-vol-3",
    name: "Exposition Interview Series — Vol 3",
    category: "Interview Series",
    year: 2025,
    client: "IMSSA UOK",
    location: "KASSA Studio",
    coverImage: "/images/events/exposition-interview-series-vol-3/cover.jpg",
    gallery: gallery("exposition-interview-series-vol-3", 1),
    services: ["lighting", "audio", "videography", "event-coordination"],
    description:
      "In this episode, we sit down with Malinda Alahakon.\n\nAs a team, we took care of lighting, camera handling, event flow, shot direction, and audio capturing.",
    featured: false,
  },
  {
    slug: "exposition-interview-series-vol-4",
    name: "Exposition Interview Series — Vol 4",
    category: "Interview Series",
    year: 2025,
    client: "IMSSA UOK",
    location: "KASSA Studio",
    coverImage: "/images/events/exposition-interview-series-vol-4/cover.jpg",
    gallery: gallery("exposition-interview-series-vol-4", 6),
    services: ["videography", "post-production"],
    description:
      "{{EVENT_DESCRIPTION_PARA_1}} Placeholder copy describing Volume 4 of the Exposition interview series.\n\n{{EVENT_DESCRIPTION_PARA_2}} A second placeholder paragraph on featured guests and format.",
    featured: false,
  },
  {
    slug: "hackx-jr-awareness",
    name: "HackX Jr Awareness",
    category: "Hackathon",
    year: 2025,
    client: "IMSSA UOK",
    location: "University of Kelaniya",
    coverImage: "/images/events/hackx-jr-awareness/cover.jpg",
    gallery: gallery("hackx-jr-awareness", 8),
    services: ["event-planning", "event-coordination", "compering", "photography"],
    description:
      "Held at the University of Kelaniya with a hybrid reach spanning island-wide regional centers, the hackX Jr. Awareness Session serves as the official launchpad for the school-level competition cycle.\n\nIt features keynote speeches from prominent industry leaders covering tech hackathon evolution, AI futures, proposal structuring, and tech-business conversion, alongside a detailed breakdown of the official competition rulebook.",
    featured: true,
  },
  {
    slug: "innox-ideax",
    name: "InnoX – IdeaX",
    category: "Hackathon",
    year: 2025,
    client: "IMSSA UOK",
    location: "University of Kelaniya",
    coverImage: "/images/events/innox-ideax/cover.jpg",
    gallery: gallery("innox-ideax", 9),
    services: ["event-planning", "event-coordination", "decorations", "compering", "videography"],
    description:
      "The semi-final elimination tiers — including InnoX (the hackX Jr. semi-finals held at the University of Kelaniya) alongside the parallel undergraduate ideaX semi-finals — represent the critical bridge between initial proposal submissions and the grand finales.\n\nDuring these rounds, shortlisted school and university teams present their prototypes or architectural concepts, defending their feasibility through live Q&A sessions administered by panel judges to secure their spots on the ultimate final stages at Waters Edge.",
    featured: false,
  },
  {
    slug: "gloriance-sky-lounge",
    name: "Gloriance Sky Lounge",
    category: "Other",
    year: 2026,
    client: "Gloriance Sky Lounge",
    location: "Gloriance Sky Lounge",
    coverImage: "/images/events/gloriance-sky-lounge/cover.jpg",
    gallery: gallery("gloriance-sky-lounge", 1),
    services: ["event-coordination", "video-production", "decorations"],
    description:
      "At Gloriance Sky Lounge, we managed the technical and event requirements for a variety of live entertainment events.\n\nThis included organizing and operating live F1 and FIFA streaming experiences, managing the streaming setup, and handling event decoration and venue preparation to create an engaging experience for attendees.",
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
