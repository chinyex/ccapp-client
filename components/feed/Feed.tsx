"use client";

import { useState } from "react";

import { posts as initialPosts } from "@/data/posts";
import type { Post } from "@/types/post";

import CreatePost from "./CreatePost";
import PostCard from "./PostCard";
import Stories from "./Stories";

export default function Feed() {
  const [posts, setPosts] = useState<Post[]>(initialPosts);

  const handleCreatePost = (content: string) => {
    const newPost: Post = {
      id: Date.now().toString(),
      author: {
        id: "current-user",
        name: "Obiakor Chinenye",
        avatar: "/images/users/user-1.png",
        title: "Software Engineer",
        verified: true,
      },
      content,
      image: "",
      likes: 0,
      comments: 0,
      shares: 0,
      time: "Just now",
      liked: false,
      commentsList: [],
    };

    setPosts((prev) => [newPost, ...prev]);
  };

  return (
    <div className="space-y-6">
      {/* Stories */}
      <Stories />

      {/* Create Post */}
      <CreatePost onCreatePost={handleCreatePost} />

      {/* Feed Posts */}
      {posts.map((post) => (
        <PostCard
          key={post.id}
          post={post}
        />
      ))}
    </div>
  );
}