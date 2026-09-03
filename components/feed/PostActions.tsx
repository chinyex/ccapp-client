"use client";

import { motion } from "framer-motion";
import { Heart, MessageCircle, Share } from "lucide-react";

import type { Post } from "@/types/post";

type PostActionsProps = {
  post: Post;
  liked: boolean;
  likes: number;
  comments: number;
  commentsOpen: boolean;
  onLike: () => void;
  onComment: () => void;
};
export default function PostActions({
  post,
  liked,
  likes,
  comments,
  onLike,
  onComment,
}: PostActionsProps) {
  return (
    <div className="mt-5">
      {/* Post Stats */}
      <div className="flex items-center justify-between border-b border-slate-200 pb-3">
        <div className="flex items-center gap-2">
          <div
            className={`flex h-6 w-6 items-center justify-center rounded-full transition-colors duration-300 ${
              liked ? "bg-red-500" : "bg-slate-300"
            }`}
          >
            <Heart
              size={14}
              className={`transition-all duration-300 ${
                liked ? "fill-white text-white" : "text-white"
              }`}
            />
          </div>

          <span className="text-sm font-medium text-slate-700">
            {likes} Likes
          </span>
        </div>

        <div className="flex items-center gap-4 text-sm font-medium text-slate-600">
          <span>{comments} Comments</span>
          <span>{post.shares} Shares</span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-2 grid grid-cols-3 gap-2">
        {/* Like */}
        <button
          onClick={onLike}
          className={`flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold transition-all duration-200 hover:bg-slate-100 active:scale-95 ${
            liked ? "text-red-500" : "text-slate-700"
          }`}
        >
          <motion.div
            animate={{
              scale: liked ? [1, 1.35, 1] : 1,
              rotate: liked ? [0, -10, 10, 0] : 0,
            }}
            transition={{ duration: 0.3 }}
          >
            <Heart
              size={20}
              className={liked ? "fill-current" : ""}
            />
          </motion.div>

          {liked ? "Liked" : "Like"}
        </button>

        {/* Comment */}
        <button
          onClick={onComment}
          className="
            flex
            items-center
            justify-center
            gap-2
            rounded-xl
            px-4
            py-3
            text-sm
            font-semibold
            text-slate-700
            transition-all
            duration-200
            hover:bg-slate-100
            active:scale-95
          "
        >
          <MessageCircle size={20} />
          Comment
        </button>

        {/* Share */}
        <button
          className="
            flex
            items-center
            justify-center
            gap-2
            rounded-xl
            px-4
            py-3
            text-sm
            font-semibold
            text-slate-700
            transition-all
            duration-200
            hover:bg-slate-100
            active:scale-95
          "
        >
          <Share size={20} />
          Share
        </button>
      </div>
    </div>
  );
}