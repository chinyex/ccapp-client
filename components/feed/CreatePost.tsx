"use client";

import { useRef, useState } from "react";
import {
  Image as ImageIcon,
  Smile,
  Video,
  BarChart3,
  X,
} from "lucide-react";

import Avatar from "@/components/ui/Avatar";

type CreatePostProps = {
  onCreatePost: (content: string, image?: string) => void;
};

export default function CreatePost({
  onCreatePost,
}: CreatePostProps) {
  const [content, setContent] = useState("");
  const [selectedImage, setSelectedImage] = useState<string | null>(
    null
  );

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];

    if (!file) return;

    const imageUrl = URL.createObjectURL(file);

    setSelectedImage(imageUrl);

    // Allows the user to select the same image again later.
    event.target.value = "";
  };

  const handleRemoveImage = () => {
    setSelectedImage(null);
  };

  const handlePost = () => {
    const trimmed = content.trim();

    if (!trimmed && !selectedImage) return;

    onCreatePost(trimmed, selectedImage ?? undefined);

    setContent("");
    setSelectedImage(null);
  };

  return (
    <section className="rounded-2xl bg-white p-6 shadow-sm">
      {/* Top */}
      <div className="flex items-start gap-4">
        <Avatar
          name="Obiakor Chinenye"
          size="md"
        />

        <div className="flex-1 space-y-3">
          {/* Text */}
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Share something with your community..."
            rows={3}
            className="
              w-full
              resize-none
              rounded-2xl
              border
              border-slate-300
              bg-slate-50
              p-4
              text-slate-900
              placeholder:text-slate-500
              outline-none
              transition
              focus:border-blue-500
              focus:bg-white
              focus:ring-2
              focus:ring-blue-100
            "
          />

          {/* Image Preview */}
          {selectedImage && (
            <div className="relative overflow-hidden rounded-2xl border border-slate-200">
              <img
                src={selectedImage}
                alt="Selected post"
                className="max-h-[400px] w-full object-cover"
              />

              <button
                type="button"
                onClick={handleRemoveImage}
                className="
                  absolute
                  right-3
                  top-3
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  bg-black/60
                  text-white
                  backdrop-blur-sm
                  transition
                  hover:bg-black/80
                "
                aria-label="Remove selected image"
              >
                <X size={18} />
              </button>
            </div>
          )}

          {/* Post Button */}
          <div className="flex justify-end">
            <button
              type="button"
              onClick={handlePost}
              disabled={!content.trim() && !selectedImage}
              className="
                rounded-xl
                bg-blue-600
                px-6
                py-2.5
                font-semibold
                text-white
                transition
                hover:bg-blue-700
                disabled:cursor-not-allowed
                disabled:opacity-50
              "
            >
              Post
            </button>
          </div>
        </div>
      </div>

      <div className="my-5 border-t" />

      {/* Actions */}
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
        {/* Photo */}
        <button
          type="button"
          onClick={() => fileInputRef.current?.click()}
          className="
            flex
            items-center
            justify-center
            gap-2
            rounded-xl
            py-3
            transition
            hover:bg-slate-100
          "
        >
          <ImageIcon className="h-5 w-5 text-green-600" />

          <span className="text-[15px] font-semibold text-slate-900">
            Photo
          </span>
        </button>

        {/* Video */}
        <button
          type="button"
          className="
            flex
            items-center
            justify-center
            gap-2
            rounded-xl
            py-3
            transition
            hover:bg-slate-100
          "
        >
          <Video className="h-5 w-5 text-red-500" />

          <span className="text-[15px] font-semibold text-slate-900">
            Video
          </span>
        </button>

        {/* Poll */}
        <button
          type="button"
          className="
            flex
            items-center
            justify-center
            gap-2
            rounded-xl
            py-3
            transition
            hover:bg-slate-100
          "
        >
          <BarChart3 className="h-5 w-5 text-orange-500" />

          <span className="text-[15px] font-semibold text-slate-900">
            Poll
          </span>
        </button>

        {/* Feeling */}
        <button
          type="button"
          className="
            flex
            items-center
            justify-center
            gap-2
            rounded-xl
            py-3
            transition
            hover:bg-slate-100
          "
        >
          <Smile className="h-5 w-5 text-yellow-500" />

          <span className="text-[15px] font-semibold text-slate-900">
            Feeling
          </span>
        </button>

        {/* Hidden file input */}
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="hidden"
        />
      </div>
    </section>
  );
}