import { Search } from "lucide-react";

export default function CommunityHeader() {
  return (
    <header className="mb-10">
      <h1 className="text-3xl font-bold tracking-tight text-white">
        Communities
      </h1>

      <p className="mt-2 max-w-2xl text-slate-300">
        Discover communities, connect with people who share your interests, and
        build meaningful conversations.
      </p>

      <div className="relative mt-8">
        <Search
          size={20}
          className="absolute left-5 top-1/2 -translate-y-1/2 text-blue-400"
        />

        <input
          type="text"
          placeholder="Search communities..."
          className="w-full rounded-2xl border border-slate-700 bg-slate-900 py-4 pl-14 pr-5 text-white placeholder:text-slate-400 shadow-sm outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-500/20"
        />
      </div>
    </header>
  );
}