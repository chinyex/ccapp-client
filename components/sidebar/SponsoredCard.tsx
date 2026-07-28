import Image from "next/image";
import { ExternalLink } from "lucide-react";

export default function SponsoredCard() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      {/* Header */}
      <h2 className="mb-4 text-lg font-bold tracking-tight text-slate-900">
        Sponsored
      </h2>

      {/* Banner */}
      <div className="group overflow-hidden rounded-2xl">
        <Image
          src="/images/sponsored/ad-1.png"
          alt="Sponsored advertisement"
          width={600}
          height={400}
          className="h-44 w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="mt-4">
        <div className="flex items-center justify-between">
          <h3 className="text-base font-semibold text-slate-900">
            Notion AI
          </h3>

          <ExternalLink
            size={18}
            className="text-slate-500"
          />
        </div>

        <p className="mt-1 text-sm text-blue-600">
          notion.so
        </p>

        <p className="mt-3 text-sm leading-6 text-slate-700">
          Organize projects, collaborate with your team, and write faster using
          AI-powered workspaces.
        </p>

        <button className="mt-4 w-full rounded-xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700">
          Learn More
        </button>
      </div>
    </section>
  );
}