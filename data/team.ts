export type TeamMember = {
  name: string;
  role: string;
  phone: string;
  image: string; // /images/team/{slug}.png
};

export const team: TeamMember[] = [
  {
    name: "Nadeesha Nilupul",
    role: "Event Planning Head",
    phone: "+94 76 822 4295",
    image: "/images/team/member-1.png",
  },
  {
    name: "Pasindu Kumarage",
    role: "Event Coordination Head",
    phone: "+94 71 984 6904",
    image: "/images/team/member-2.png",
  },
  {
    name: "Akila Pilapitiya",
    role: "Lighting Head",
    phone: "+94 76 343 9451",
    image: "/images/team/member-3.png",
  },
  {
    name: "Heshan Pramuditha",
    role: "Audio Head",
    phone: "+94 71 069 1571",
    image: "/images/team/member-4.png",
  },
  {
    name: "Rashmika Nammunige",
    role: "Video Production Head",
    phone: "+94 70 490 2526",
    image: "/images/team/member-5.png",
  },
  {
    name: "Nipun Perera",
    role: "Video Production Head",
    phone: "+94 71 993 8765",
    image: "/images/team/member-6.png",
  },
  {
    name: "Pasindu Dinuwan",
    role: "Post Production Head",
    phone: "+94 76 237 2588",
    image: "/images/team/member-7.png",
  },
  {
    name: "Lavindu Binuwara",
    role: "Compering Head",
    phone: "+94 71 684 6120",
    image: "/images/team/member-8.png",
  },
  {
    name: "Chamika Denuwan",
    role: "Photography & Videography Head",
    phone: "+94 76 705 1429",
    image: "/images/team/member-9.png",
  },
];
