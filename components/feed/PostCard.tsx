"use client";

import { useState } from "react";

import { Post } from "@/types/post";

import PostActions from "./PostActions";
import PostBody from "./PostBody";
import PostHeader from "./PostHeader";

type PostCardProps = {
  post: Post;
};

export default function PostCard({
  post,
}: PostCardProps) {
  const [liked, setLiked] = useState(post.liked);
  const [likes, setLikes] = useState(post.likes);

  function handleLike() {
    if (liked) {
      setLiked(false);
      setLikes((prev) => prev - 1);
    } else {
      setLiked(true);
      setLikes((prev) => prev + 1);
    }
  }

  return (
    <article
      className="
        overflow-hidden
        rounded-3xl
        border
        border-slate-200
        bg-white
        p-5
        shadow-sm
        transition-all
        duration-300
        hover:shadow-lg
      "
    >
      <PostHeader post={post} />

      <PostBody post={post} />

      <PostActions
        post={post}
        liked={liked}
        likes={likes}
        onLike={handleLike}
      />
    </article>
  );
}