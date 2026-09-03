"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { X, Search } from "lucide-react";

import type { Post } from "@/types/post";

import { posts } from "@/data/posts";
import { friends } from "@/data/friends";

import FriendCard from "@/components/profile/FriendCard";
import FriendRequests from "@/components/profile/FriendRequests";
import AboutCard from "@/components/profile/AboutCard";
import ProfileCover from "@/components/profile/ProfileCover";
import ProfileHeader from "@/components/profile/ProfileHeader";
import ProfileStats from "@/components/profile/ProfileStats";
import ProfileTabs from "@/components/profile/ProfileTabs";

import PostCard from "@/components/feed/PostCard";
import CreatePost from "@/components/feed/CreatePost";

interface SavedFriend {
  id: string;
  name: string;
  username: string;
  avatar: string;
  mutualFriends: number;
}

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("Posts");

  // ================= POSTS =================

  const [profilePosts, setProfilePosts] =
    useState<Post[]>(posts);

  // ================= PHOTOS =================

  const [selectedPhoto, setSelectedPhoto] =
    useState<string | null>(null);

  // ================= FRIEND SEARCH =================

  const [friendSearch, setFriendSearch] =
    useState("");

  // ================= ACCEPTED FRIENDS =================

  const [savedFriends, setSavedFriends] =
    useState<SavedFriend[]>(friends);

  // ================= LOAD ACCEPTED FRIENDS =================

  useEffect(() => {
    const loadFriends = () => {
      const saved = localStorage.getItem(
        "ccapp-friends"
      );

      if (!saved) {
        setSavedFriends(friends);
        return;
      }

      try {
        const parsed = JSON.parse(saved);

        if (!Array.isArray(parsed)) {
          setSavedFriends(friends);
          return;
        }

        /*
         * Make sure every saved friend has
         * the fields that FriendCard expects.
         */
        const validSavedFriends: SavedFriend[] =
          parsed
            .filter(
              (friend): friend is SavedFriend =>
                friend &&
                typeof friend.id === "string" &&
                typeof friend.name === "string"
            )
            .map((friend) => ({
              id: friend.id,
              name: friend.name,
              username:
                typeof friend.username === "string"
                  ? friend.username
                  : "",
              avatar:
                typeof friend.avatar === "string"
                  ? friend.avatar
                  : "/images/profile/avatar.png",
              mutualFriends:
                typeof friend.mutualFriends ===
                "number"
                  ? friend.mutualFriends
                  : 0,
            }));

        const combinedFriends: SavedFriend[] = [
          ...friends,
          ...validSavedFriends.filter(
            (savedFriend) =>
              !friends.some(
                (friend) =>
                  friend.id === savedFriend.id
              )
          ),
        ];

        setSavedFriends(combinedFriends);
      } catch {
        setSavedFriends(friends);
      }
    };

    loadFriends();

    window.addEventListener(
      "ccapp-friends-change",
      loadFriends
    );

    return () => {
      window.removeEventListener(
        "ccapp-friends-change",
        loadFriends
      );
    };
  }, []);

  // ================= FRIEND FILTER =================

  const search =
    friendSearch.toLowerCase().trim();

  const filteredFriends = savedFriends.filter(
    (friend) => {
      const name =
        typeof friend.name === "string"
          ? friend.name.toLowerCase()
          : "";

      const username =
        typeof friend.username === "string"
          ? friend.username.toLowerCase()
          : "";

      return (
        name.includes(search) ||
        username.includes(search)
      );
    }
  );

  // ================= CREATE POST =================

  const handleCreatePost = (
    content: string,
    image?: string
  ) => {
    const newPost: Post = {
      id: Date.now().toString(),

      author: {
        id: "current-user",
        name: "Obiakor Chinenye",
        title: "Full Stack Developer",
        avatar: "/images/profile/avatar.png",
        verified: false,
      },

      content,

      image,

      likes: 0,
      comments: 0,
      shares: 0,

      time: "Just now",

      liked: false,

      commentsList: [],
    };

    setProfilePosts((prev) => [
      newPost,
      ...prev,
    ]);
  };

  return (
    <div className="mx-auto max-w-7xl space-y-6">

      {/* ================================================== */}
      {/* COVER */}
      {/* ================================================== */}

      <ProfileCover />

      {/* ================================================== */}
      {/* PROFILE HEADER */}
      {/* ================================================== */}

      <ProfileHeader />

      {/* ================================================== */}
      {/* PROFILE STATS */}
      {/* ================================================== */}

      <ProfileStats />

      {/* ================================================== */}
      {/* TABS */}
      {/* ================================================== */}

      <ProfileTabs
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />

      {/* ================================================== */}
      {/* POSTS */}
      {/* ================================================== */}

      {activeTab === "Posts" && (
        <div className="grid gap-6 lg:grid-cols-3">

          {/* ABOUT */}
          <div className="space-y-6 lg:col-span-1">
            <AboutCard />
          </div>

          {/* POSTS */}
          <div className="space-y-6 lg:col-span-2">

            <CreatePost
              onCreatePost={handleCreatePost}
            />

            <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900">
                Posts
              </h2>

              <p className="mt-2 text-sm text-slate-500">
                Recent activity
              </p>
            </section>

            {profilePosts.map((post) => (
              <PostCard
                key={post.id}
                post={post}
              />
            ))}

          </div>
        </div>
      )}

      {/* ================================================== */}
      {/* ABOUT */}
      {/* ================================================== */}

      {activeTab === "About" && (
        <div className="max-w-3xl">
          <AboutCard />
        </div>
      )}

      {/* ================================================== */}
      {/* PHOTOS */}
      {/* ================================================== */}

      {activeTab === "Photos" && (
        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

          <div className="mb-6">
            <h2 className="text-2xl font-bold text-slate-900">
              Photos
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              Photos shared on your profile.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">

            {[
              "photo1.jpg",
              "photo2.jpg",
              "photo3.jpg",
              "photo4.jpg",
              "photo5.jpg",
              "photo6.jpg",
            ].map((photo) => (

              <button
                key={photo}
                type="button"
                onClick={() =>
                  setSelectedPhoto(
                    `/images/profile/photos/${photo}`
                  )
                }
                className="
                  group
                  relative
                  aspect-square
                  overflow-hidden
                  rounded-2xl
                  bg-slate-100
                "
              >

                <Image
                  src={`/images/profile/photos/${photo}`}
                  alt="Profile photo"
                  fill
                  className="
                    object-cover
                    transition
                    duration-300
                    group-hover:scale-105
                  "
                  sizes="(max-width: 640px) 50vw, 33vw"
                />

                <div
                  className="
                    absolute
                    inset-0
                    bg-black/0
                    transition
                    duration-300
                    group-hover:bg-black/20
                  "
                />

              </button>

            ))}

          </div>

          {/* PHOTO MODAL */}

          {selectedPhoto && (
            <div
              className="
                fixed
                inset-0
                z-[200]
                flex
                items-center
                justify-center
                bg-black/80
                p-4
                backdrop-blur-sm
              "
              onClick={() =>
                setSelectedPhoto(null)
              }
            >

              <div
                className="
                  relative
                  max-h-[90vh]
                  w-full
                  max-w-4xl
                "
                onClick={(event) =>
                  event.stopPropagation()
                }
              >

                <button
                  type="button"
                  onClick={() =>
                    setSelectedPhoto(null)
                  }
                  className="
                    absolute
                    right-3
                    top-3
                    z-10
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    bg-black/60
                    text-white
                    shadow-lg
                    transition
                    hover:bg-black/80
                  "
                  aria-label="Close photo"
                >
                  <X size={22} />
                </button>

                <div
                  className="
                    relative
                    h-[70vh]
                    w-full
                    overflow-hidden
                    rounded-2xl
                  "
                >
                  <Image
                    src={selectedPhoto}
                    alt="Selected profile photo"
                    fill
                    className="object-contain"
                    sizes="100vw"
                  />
                </div>

              </div>
            </div>
          )}

        </section>
      )}

      {/* ================================================== */}
      {/* FRIENDS */}
      {/* ================================================== */}

      {activeTab === "Friends" && (
        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

          <div className="mb-6">
            <h2 className="text-2xl font-bold text-slate-900">
              Friends
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              People connected with you.
            </p>
          </div>

          {/* SEARCH */}

          <div className="relative mb-6">

            <Search
              size={20}
              className="
                absolute
                left-4
                top-1/2
                -translate-y-1/2
                text-slate-400
              "
            />

            <input
              type="text"
              value={friendSearch}
              onChange={(event) =>
                setFriendSearch(
                  event.target.value
                )
              }
              placeholder="Search friends..."
              className="
                w-full
                rounded-2xl
                border
                border-slate-300
                bg-slate-50
                py-3
                pl-12
                pr-4
                text-slate-900
                placeholder:text-slate-500
                outline-none
                transition
                focus:border-blue-500
                focus:bg-white
                focus:ring-4
                focus:ring-blue-100
              "
            />

          </div>

          {/* FRIEND LIST */}

          {filteredFriends.length > 0 ? (

            <div className="grid gap-4 sm:grid-cols-2">

              {filteredFriends.map((friend) => (
                <FriendCard
                  key={friend.id}
                  friend={friend}
                />
              ))}

            </div>

          ) : (

            <div className="rounded-2xl bg-slate-50 px-6 py-12 text-center">

              <p className="font-semibold text-slate-700">
                No friends found
              </p>

              <p className="mt-1 text-sm text-slate-500">
                Try searching with another name or username.
              </p>

            </div>

          )}

        </section>
      )}

      {/* ================================================== */}
      {/* REQUESTS */}
      {/* ================================================== */}

      {activeTab === "Requests" && (
        <FriendRequests />
      )}

    </div>
  );
}