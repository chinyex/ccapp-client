import Image from "next/image";
import { Plus } from "lucide-react";

import type { Story } from "@/types/story";

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
        cursor-pointer
        overflow-hidden
        rounded-3xl
        border
        border-slate-200
        bg-slate-100
        shadow-md
        transition-all
        duration-300
        hover:-translate-y-2
        hover:shadow-2xl
      "
    >
      {/* Cover */}
      <Image
        src={story.cover}
        alt={story.name}
        fill
        sizes="144px"
        loading={story.isMine ? "eager" : "lazy"}
        className="
          object-cover
          transition-transform
          duration-700
          group-hover:scale-110
        "
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      {/* Avatar */}
      <div className="absolute left-4 top-4">
        {story.isMine ? (
          <div className="relative">
            <div
              className="
                h-14
                w-14
                overflow-hidden
                rounded-full
                border-4
                border-white
                shadow-xl
              "
            >
              <Image
                src={story.cover}
                alt={story.name}
                fill
                sizes="144px"
                priority={story.id === "1"}
                className="
    object-cover
    transition-transform
    duration-700
    group-hover:scale-110
  "
              />
            </div>

            <div
              className="
                absolute
                -bottom-1
                -right-1
                flex
                h-7
                w-7
                items-center
                justify-center
                rounded-full
                border-2
                border-white
                bg-blue-600
                text-white
                shadow-lg
              "
            >
              <Plus size={15} />
            </div>
          </div>
        ) : (
          <div
            className="
              rounded-full
              bg-gradient-to-br
              from-pink-500
              via-purple-500
              to-blue-500
              p-[3px]
              shadow-xl
            "
          >
            <div className="overflow-hidden rounded-full border-2 border-white">
              <Image
                src={story.avatar}
                alt={story.name}
                width={56}
                height={56}
                className="h-14 w-14 object-cover"
              />
            </div>
          </div>
        )}
      </div>

      {/* Name */}
      <div className="absolute bottom-4 left-4 right-4">
        <p className="truncate text-sm font-bold tracking-wide text-white drop-shadow-lg">
          {story.name}
        </p>
      </div>
    </div>
  );
}
