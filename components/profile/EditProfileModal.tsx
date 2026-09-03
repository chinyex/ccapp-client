"use client";

import { X } from "lucide-react";
import { useState } from "react";

interface ProfileData {
  name: string;
  username: string;
  bio: string;
  location: string;
  website: string;
}

interface EditProfileModalProps {
  onClose: () => void;
  profileData: ProfileData;
  onSave: (data: ProfileData) => void;
}

export default function EditProfileModal({
  onClose,
  profileData,
  onSave,
}: EditProfileModalProps) {
  const [name, setName] = useState(profileData.name);
  const [username, setUsername] = useState(profileData.username);
  const [bio, setBio] = useState(profileData.bio);
  const [location, setLocation] = useState(profileData.location);
  const [website, setWebsite] = useState(profileData.website);

  const inputStyles =
    "w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 placeholder:text-slate-400 shadow-sm outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100";

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    onSave({
      name,
      username,
      bio,
      location,
      website,
    });

    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
      <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl bg-white shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-200 p-6">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Edit Profile</h2>

            <p className="mt-1 text-sm text-slate-500">
              Update your profile information.
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="rounded-xl p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
            aria-label="Close edit profile"
          >
            <X size={22} />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6 p-6">
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="mb-2 block text-sm font-semibold text-slate-700"
            >
              Name
            </label>

            <input
              id="name"
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              className={inputStyles}
            />
          </div>

          {/* Username */}
          <div>
            <label
              htmlFor="username"
              className="mb-2 block text-sm font-semibold text-slate-700"
            >
              Username
            </label>

            <input
              id="username"
              type="text"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              className={inputStyles}
            />
          </div>

          {/* Bio */}
          <div>
            <label
              htmlFor="bio"
              className="mb-2 block text-sm font-semibold text-slate-700"
            >
              Bio
            </label>

            <textarea
              id="bio"
              rows={4}
              value={bio}
              onChange={(event) => setBio(event.target.value)}
              className={`${inputStyles} resize-none`}
            />
          </div>

          {/* Location */}
          <div>
            <label
              htmlFor="location"
              className="mb-2 block text-sm font-semibold text-slate-700"
            >
              Location
            </label>

            <input
              id="location"
              type="text"
              value={location}
              onChange={(event) => setLocation(event.target.value)}
              className={inputStyles}
            />
          </div>

          {/* Website */}
          <div>
            <label
              htmlFor="website"
              className="mb-2 block text-sm font-semibold text-slate-700"
            >
              Website
            </label>

            <input
              id="website"
              type="url"
              value={website}
              onChange={(event) => setWebsite(event.target.value)}
              className={inputStyles}
            />
          </div>

          {/* Actions */}
          <div className="flex justify-end gap-3 border-t border-slate-200 pt-6">
            <button
              type="button"
              onClick={onClose}
              className="rounded-xl border border-slate-300 bg-white px-5 py-3 font-medium text-slate-700 shadow-sm transition hover:bg-slate-100"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white shadow-sm transition hover:bg-blue-700"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
