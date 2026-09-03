import { communities } from "@/data/communities";

import CommunityCard from "./CommunityCard";
import CommunityHeader from "./CommunityHeader";
import EmptyCommunities from "./EmptyCommunities";

export default function CommunitiesPage() {
  if (communities.length === 0) {
    return <EmptyCommunities />;
  }

  return (
    <div className="mx-auto max-w-7xl">
      <CommunityHeader />

      <div
        className="
          mt-10
          grid
          gap-8
          sm:grid-cols-2
          xl:grid-cols-3
        "
      >
        {communities.map((community) => (
          <CommunityCard
            key={community.id}
            community={community}
          />
        ))}
      </div>
    </div>
  );
}