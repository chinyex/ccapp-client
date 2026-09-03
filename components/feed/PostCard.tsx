"use client";

import { useState } from "react";

import type { PostComment } from "@/types/comment";
import type { Post } from "@/types/post";

import PostActions from "./PostActions";
import PostBody from "./PostBody";
import PostComments from "./PostComments";
import PostHeader from "./PostHeader";

type PostCardProps = {
  post: Post;
};

export default function PostCard({
  post,
}: PostCardProps) {
  const [liked, setLiked] = useState(post.liked);
  const [likes, setLikes] = useState(post.likes);

  const [comments, setComments] = useState<PostComment[]>(
    post.commentsList
  );

  const [showComments, setShowComments] = useState(false);

  const handleLike = () => {
    if (liked) {
      setLiked(false);
      setLikes((prev) => prev - 1);
    } else {
      setLiked(true);
      setLikes((prev) => prev + 1);
    }
  };

  const handleToggleComments = () => {
    setShowComments((prev) => !prev);
  };

  const handleAddComment = (content: string) => {
    const newComment: PostComment = {
      id: Date.now().toString(),
      author: {
        id: "current-user",
        name: "You",
        avatar: "/images/users/user-1.png",
      },
      content,
      createdAt: "Just now",
    };

    setComments((prev) => [...prev, newComment]);
  };

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
  comments={comments.length}
  commentsOpen={showComments}
  onLike={handleLike}
  onComment={handleToggleComments}
/>
      {showComments && (
        <PostComments
          comments={comments}
          onAddComment={handleAddComment}
        />
      )}
    </article>
  );
}