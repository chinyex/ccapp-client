"use client";

import Image from "next/image";
import { Check, UserX } from "lucide-react";
import { useEffect, useState } from "react";

const REQUESTS_KEY = "ccapp-friend-requests";
const FRIENDS_KEY = "ccapp-friends";

interface SavedFriend {
  id: string;
  name: string;
  username: string;
  avatar: string;
  mutualFriends: number;
}

export default function FriendRequests() {
  const [requests, setRequests] = useState<SavedFriend[]>([]);

  useEffect(() => {
    const loadRequests = () => {
      const saved = localStorage.getItem(REQUESTS_KEY);

      if (!saved) {
        setRequests([]);
        return;
      }

      try {
        const parsed = JSON.parse(saved);

        if (Array.isArray(parsed)) {
          setRequests(parsed);
        } else {
          setRequests([]);
        }
      } catch {
        setRequests([]);
      }
    };

    loadRequests();

    window.addEventListener(
      "ccapp-friend-request-change",
      loadRequests
    );

    return () => {
      window.removeEventListener(
        "ccapp-friend-request-change",
        loadRequests
      );
    };
  }, []);

  const handleAccept = (request: SavedFriend) => {
    const savedFriends = localStorage.getItem(FRIENDS_KEY);

    let currentFriends: SavedFriend[] = [];

    if (savedFriends) {
      try {
        const parsed = JSON.parse(savedFriends);

        if (Array.isArray(parsed)) {
          currentFriends = parsed;
        }
      } catch {
        currentFriends = [];
      }
    }

    const alreadyFriend = currentFriends.some(
      (friend) => friend.id === request.id
    );

    if (!alreadyFriend) {
      currentFriends.push(request);
    }

    localStorage.setItem(
      FRIENDS_KEY,
      JSON.stringify(currentFriends)
    );

    const updatedRequests = requests.filter(
      (item) => item.id !== request.id
    );

    localStorage.setItem(
      REQUESTS_KEY,
      JSON.stringify(updatedRequests)
    );

    setRequests(updatedRequests);

    window.dispatchEvent(
      new Event("ccapp-friend-request-change")
    );

    window.dispatchEvent(
      new Event("ccapp-friends-change")
    );
  };

  const handleDelete = (request: SavedFriend) => {
    const updatedRequests = requests.filter(
      (item) => item.id !== request.id
    );

    localStorage.setItem(
      REQUESTS_KEY,
      JSON.stringify(updatedRequests)
    );

    setRequests(updatedRequests);

    window.dispatchEvent(
      new Event("ccapp-friend-request-change")
    );
  };

  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-slate-900">
          Friend Requests
        </h2>

        <p className="mt-2 text-sm text-slate-500">
          People who want to connect with you.
        </p>
      </div>

      {requests.length === 0 ? (
        <div className="rounded-2xl bg-slate-50 px-6 py-12 text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-slate-200">
            <UserX
              size={22}
              className="text-slate-500"
            />
          </div>

          <p className="mt-4 font-semibold text-slate-700">
            No friend requests
          </p>

          <p className="mt-1 text-sm text-slate-500">
            You are all caught up.
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {requests.map((request) => (
            <div
              key={request.id}
              className="rounded-2xl border border-slate-200 p-4"
            >
              <div className="flex items-center gap-4">
                <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full">
                  <Image
                    src={request.avatar}
                    alt={request.name}
                    fill
                    sizes="56px"
                    className="object-cover"
                  />
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className="truncate font-semibold text-slate-900">
                    {request.name}
                  </h3>

                  <p className="truncate text-sm text-slate-500">
                    {request.username}
                  </p>

                  <p className="mt-1 text-xs text-slate-400">
                    {request.mutualFriends} mutual friends
                  </p>
                </div>

                <div className="flex shrink-0 gap-2">
                  <button
                    type="button"
                    onClick={() => handleAccept(request)}
                    className="flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
                  >
                    <Check size={17} />

                    <span className="hidden sm:inline">
                      Accept
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleDelete(request)}
                    className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-200"
                  >
                    <UserX size={17} />

                    <span className="hidden sm:inline">
                      Delete
                    </span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}