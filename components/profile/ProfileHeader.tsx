
"use client";

import Image from "next/image";
import { useRef, useState } from "react";

import Button from "@/components/ui/Button";
import EditProfileModal from "@/components/profile/EditProfileModal";

interface ProfileData {
  name: string;
  username: string;
  bio: string;
  location: string;
  website: string;
}

export default function ProfileHeader() {
  const [isEditOpen, setIsEditOpen] = useState(false);

  const [avatar, setAvatar] = useState(
    "/images/profile/avatar.png"
  );

  const fileInputRef = useRef<HTMLInputElement>(null);

  const [profileData, setProfileData] = useState<ProfileData>({
    name: "Obiakor Chinenye",
    username: "@chinenye",
    bio: "Full Stack Developer passionate about building scalable web applications and solving real-world problems through technology.",
    location: "Lagos, Nigeria",
    website: "https://my-portfolio-website-sage-pi.vercel.app/",
  });

  const handleSaveProfile = (updatedProfile: ProfileData) => {
    setProfileData(updatedProfile);
  };

  const handleAvatarChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];

    if (!file) return;

    const imageUrl = URL.createObjectURL(file);

    setAvatar(imageUrl);
  };

  return (
    <>
      <section className="relative rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <div className="flex flex-col items-center text-center">
          {/* Avatar */}
          <div className="-mt-24 mb-4 overflow-hidden rounded-full border-4 border-white shadow-lg">
            <Image
              src={avatar}
              alt={profileData.name}
              width={140}
              height={140}
              className="h-36 w-36 object-cover"
            />
          </div>

          {/* Hidden File Input */}
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleAvatarChange}
            className="hidden"
          />

          {/* Change Photo Button */}
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="mb-6 rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-slate-100"
          >
            Change Photo
          </button>

          {/* Name */}
          <h1 className="text-3xl font-bold text-slate-900">
            {profileData.name}
          </h1>

          {/* Username */}
          <p className="mt-1 text-slate-500">
            {profileData.username}
          </p>

          {/* Bio */}
          <p className="mt-5 max-w-2xl text-slate-600">
            {profileData.bio}
          </p>

          {/* Location */}
          <p className="mt-3 text-sm text-slate-500">
            📍 {profileData.location}
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button onClick={() => setIsEditOpen(true)}>
              Edit Profile
            </Button>

            <Button variant="outline">
              Share Profile
            </Button>
          </div>
        </div>
      </section>

      {/* Edit Profile Modal */}
      {isEditOpen && (
        <EditProfileModal
          profileData={profileData}
          onSave={handleSaveProfile}
          onClose={() => setIsEditOpen(false)}
        />
      )}
    </>
  );
}
