import Image from "next/image";
import { Plus } from "lucide-react";

import { Story } from "@/types/story";

type StoryCardProps = {
  story: Story;
};

export default function StoryCard({ story }: StoryCardProps) {
  return (
    <div
      className="
        group
        relative
        h-60
        w-36
        shrink-0
        overflow-hidden
        rounded-3xl
        shadow-lg
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-2xl
      "
    >
      {/* Cover Image */}
      <Image
        src={story.cover}
        alt={story.name}
        fill
        sizes="144px"
        loading={story.isMine ? "eager" : "lazy"}
        className="object-cover transition duration-500 group-hover:scale-110"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

      {/* Avatar */}
      <div className="absolute left-4 top-4">
        {story.isMine ? (
          <div className="relative">
            {/* Avatar */}
            <div className="h-14 w-14 overflow-hidden rounded-full border-4 border-white shadow-lg">
              <Image
                src={story.avatar}
                alt={story.name}
                width={56}
                height={56}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Plus Icon */}
            <div className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-blue-600 text-white shadow-lg">
              <Plus size={14} />
            </div>
          </div>
        ) : (
          <div className="h-14 w-14 overflow-hidden rounded-full border-4 border-blue-500 shadow-lg">
            <Image
              src={story.avatar}
              alt={story.name}
              width={56}
              height={56}
              className="h-full w-full object-cover"
            />
          </div>
        )}
      </div>

      {/* Story Name */}
      <div className="absolute bottom-4 left-4 right-4">
        <p className="truncate text-base font-semibold text-white drop-shadow-md">
          {story.name}
        </p>
      </div>
    </div>
  );
}