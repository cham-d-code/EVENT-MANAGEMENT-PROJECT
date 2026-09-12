export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  image: string; // /images/team/{slug}.jpg
  social?: { instagram?: string; linkedin?: string; behance?: string };
};

export const team: TeamMember[] = [
  {
    name: "{{MEMBER_1_NAME}}",
    role: "{{MEMBER_1_ROLE}}",
    bio: "{{MEMBER_1_BIO}}",
    image: "/images/team/member-1.jpg",
    social: { instagram: "#", linkedin: "#" },
  },
  {
    name: "{{MEMBER_2_NAME}}",
    role: "{{MEMBER_2_ROLE}}",
    bio: "{{MEMBER_2_BIO}}",
    image: "/images/team/member-2.jpg",
    social: { instagram: "#", linkedin: "#" },
  },
  {
    name: "{{MEMBER_3_NAME}}",
    role: "{{MEMBER_3_ROLE}}",
    bio: "{{MEMBER_3_BIO}}",
    image: "/images/team/member-3.jpg",
    social: { instagram: "#", behance: "#" },
  },
  {
    name: "{{MEMBER_4_NAME}}",
    role: "{{MEMBER_4_ROLE}}",
    bio: "{{MEMBER_4_BIO}}",
    image: "/images/team/member-4.jpg",
    social: { linkedin: "#" },
  },
  {
    name: "{{MEMBER_5_NAME}}",
    role: "{{MEMBER_5_ROLE}}",
    bio: "{{MEMBER_5_BIO}}",
    image: "/images/team/member-5.jpg",
    social: { instagram: "#", linkedin: "#" },
  },
  {
    name: "{{MEMBER_6_NAME}}",
    role: "{{MEMBER_6_ROLE}}",
    bio: "{{MEMBER_6_BIO}}",
    image: "/images/team/member-6.jpg",
    social: { behance: "#" },
  },
  {
    name: "{{MEMBER_7_NAME}}",
    role: "{{MEMBER_7_ROLE}}",
    bio: "{{MEMBER_7_BIO}}",
    image: "/images/team/member-7.jpg",
    social: { instagram: "#" },
  },
  {
    name: "{{MEMBER_8_NAME}}",
    role: "{{MEMBER_8_ROLE}}",
    bio: "{{MEMBER_8_BIO}}",
    image: "/images/team/member-8.jpg",
    social: { instagram: "#", linkedin: "#", behance: "#" },
  },
];
