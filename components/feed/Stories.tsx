import { stories } from "@/data/stories";

import StoryCard from "./StoryCard";

export default function Stories() {
  return (
    <section className="overflow-x-auto scrollbar-hide">
      <div className="flex gap-5 py-2">
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