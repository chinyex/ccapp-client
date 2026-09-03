"use client";

const tabs = [
  "Posts",
  "About",
  "Photos",
  "Friends",
  "Requests",
];

interface ProfileTabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export default function ProfileTabs({
  activeTab,
  onTabChange,
}: ProfileTabsProps) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-2 shadow-sm">
      <div className="flex flex-wrap gap-2">
        {tabs.map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => onTabChange(tab)}
            className={`rounded-2xl px-5 py-3 font-medium transition-all ${
              activeTab === tab
                ? "bg-blue-600 text-white"
                : "text-slate-600 hover:bg-slate-100"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
}