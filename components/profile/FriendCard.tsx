"use client";

import Image from "next/image";
import Link from "next/link";
import { UserCheck, UserPlus } from "lucide-react";
import { useState } from "react";

import { Friend } from "@/types/friend";

interface FriendCardProps {
  friend: Friend;
}

const REQUESTS_KEY = "ccapp-friend-requests";

interface SavedFriendRequest {
  id: string;
  name: string;
  username: string;
  avatar: string;
  mutualFriends: number;
}

function getSavedRequests(): SavedFriendRequest[] {
  if (typeof window === "undefined") {
    return [];
  }

  const savedRequests = localStorage.getItem(
    REQUESTS_KEY
  );

  if (!savedRequests) {
    return [];
  }

  try {
    return JSON.parse(savedRequests);
  } catch {
    return [];
  }
}

export default function FriendCard({
  friend,
}: FriendCardProps) {
  const [requestSent, setRequestSent] = useState(() => {
    const requests = getSavedRequests();

    return requests.some(
      (request) => request.id === friend.id
    );
  });

  const handleFriendRequest = () => {
    const requests = getSavedRequests();

    if (requestSent) {
      // Cancel request
      const updatedRequests = requests.filter(
        (request) => request.id !== friend.id
      );

      localStorage.setItem(
        REQUESTS_KEY,
        JSON.stringify(updatedRequests)
      );

      setRequestSent(false);

      window.dispatchEvent(
        new Event("ccapp-friend-request-change")
      );

      return;
    }

    // Create request
    const newRequest: SavedFriendRequest = {
      id: friend.id,
      name: friend.name,
      username: friend.username,
      avatar: friend.avatar,
      mutualFriends: friend.mutualFriends,
    };

    const alreadyExists = requests.some(
      (request) => request.id === friend.id
    );

    const updatedRequests = alreadyExists
      ? requests
      : [...requests, newRequest];

    localStorage.setItem(
      REQUESTS_KEY,
      JSON.stringify(updatedRequests)
    );

    setRequestSent(true);

    window.dispatchEvent(
      new Event("ccapp-friend-request-change")
    );
  };

  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="flex items-center gap-4">
        {/* Avatar */}
        <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full">
          <Image
            src={friend.avatar}
            alt={friend.name}
            fill
            sizes="64px"
            className="object-cover"
          />
        </div>

        {/* Friend Info */}
        <div className="min-w-0 flex-1">
          <Link
            href={`/profile/${friend.id}`}
            className="block truncate font-semibold text-slate-900 transition hover:text-blue-600"
          >
            {friend.name}
          </Link>

          <p className="truncate text-sm text-slate-500">
            {friend.username}
          </p>

          <p className="mt-1 text-xs text-slate-400">
            {friend.mutualFriends} mutual friends
          </p>
        </div>

        {/* Friend Request Button */}
        <button
          type="button"
          onClick={handleFriendRequest}
          aria-label={
            requestSent
              ? `Cancel friend request to ${friend.name}`
              : `Add ${friend.name}`
          }
          className={`flex h-10 shrink-0 items-center justify-center gap-2 rounded-xl px-3 text-sm font-semibold transition ${
            requestSent
              ? "border border-slate-200 bg-slate-100 text-slate-600 hover:bg-slate-200"
              : "border border-blue-200 bg-blue-50 text-blue-600 hover:bg-blue-100"
          }`}
        >
          {requestSent ? (
            <>
              <UserCheck size={17} />

              <span className="hidden sm:inline">
                Requested
              </span>
            </>
          ) : (
            <>
              <UserPlus size={17} />

              <span className="hidden sm:inline">
                Add
              </span>
            </>
          )}
        </button>
      </div>
    </article>
  );
} 