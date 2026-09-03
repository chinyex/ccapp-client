import { Users } from "lucide-react";

export default function EmptyCommunities() {
  return (
    <div className="flex flex-col items-center justify-center rounded-3xl border border-slate-200 bg-white px-8 py-20 text-center shadow-sm">
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-50">
        <Users className="h-10 w-10 text-blue-600" />
      </div>

      <h2 className="mt-6 text-2xl font-bold text-slate-900">
        No communities found
      </h2>

      <p className="mt-3 max-w-md leading-7 text-slate-500">
        There are no communities to display at the moment. Check back later or
        create your own community.
      </p>
    </div>
  );
}
