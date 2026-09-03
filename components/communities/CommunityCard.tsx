import Image from "next/image";

import Button from "@/components/ui/Button";
import { Community } from "@/types/community";

type CommunityCardProps = {
  community: Community;
};

export default function CommunityCard({ community }: CommunityCardProps) {
  return (
    <article
      className="
        group
        overflow-hidden
        rounded-3xl
        border
        border-slate-200
        bg-white
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-xl
      "
    >
      <div className="relative h-48 w-full">
        <Image
          src={community.cover}
          alt={community.name}
          fill
          sizes="100vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="space-y-4 p-6">
        <div>
          <h2 className="text-xl font-bold text-slate-900">{community.name}</h2>

          <p className="mt-1 text-sm font-medium text-blue-600">
            {community.members} members
          </p>

          <p className="mt-4 leading-7 text-slate-600">
            {community.description}
          </p>
        </div>

        <Button
          className="w-full"
          variant={community.joined ? "secondary" : "primary"}
        >
          {community.joined ? "Joined" : "Join Community"}
        </Button>
      </div>
    </article>
  );
}
