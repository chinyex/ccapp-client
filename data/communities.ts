import { Community } from "@/types/community";

export const communities: Community[] = [
  {
    id: "1",
    name: "React Developers",
    description:
      "Discuss React, Next.js, TypeScript and everything frontend.",
    cover: "/images/communities/react.png",
    members: "18.2K",
    joined: true,
  },
  {
    id: "2",
    name: "Gamers Hub",
    description:
      "Gaming discussions, esports, streaming and everything fun.",
    cover: "/images/communities/gaming.png",
    members: "12.1K",
    joined: false,
  },
  {
    id: "3",
    name: "Football Fans",
    description:
      "Latest football news, transfers and live match discussions.",
    cover: "/images/communities/football.png",
    members: "43K",
    joined: false,
  },
  {
    id: "4",
    name: "UI/UX Designers",
    description:
      "Share designs, inspirations and improve your design skills.",
    cover: "/images/communities/design.png",
    members: "9.4K",
    joined: true,
  },
];