import { stories } from "@/data/stories";

import StoryCard from "./StoryCard";

export default function Stories() {
  return (
    <section className="overflow-x-auto py-1 scrollbar-hide">
      <div className="flex min-w-max gap-4 px-1">
        {stories.map((story) => (
          <StoryCard
            key={story.id}
            story={story}
          />
        ))}
      </div>
    </section>
  );
}