import Image from "next/image";
import { ExternalLink } from "lucide-react";

export default function SponsoredCard() {
  return (
    <section
      className="
        overflow-hidden
        rounded-3xl
        border
        border-slate-200
        bg-white
        shadow-sm
        transition-all
        duration-300
        hover:shadow-lg
      "
    >
      {/* Header */}
      <div className="flex items-center justify-between px-5 pt-5">
        <h2 className="text-lg font-bold text-slate-900">
          Sponsored
        </h2>

        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-500">
          Ad
        </span>
      </div>

      {/* Banner */}
      <div className="group mt-4 overflow-hidden">
        <Image
          src="/images/sponsored/ad-1.png"
          alt="Sponsored advertisement"
          width={600}
          height={400}
          className="
            h-48
            w-full
            object-cover
            transition-transform
            duration-700
            group-hover:scale-105
          "
        />
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-bold text-slate-900">
              Notion AI
            </h3>

            <p className="text-sm font-medium text-blue-600">
              notion.so
            </p>
          </div>

          <ExternalLink
            size={18}
            className="text-slate-500"
          />
        </div>

        <p className="mt-4 text-sm leading-7 text-slate-700">
          Organize projects, collaborate with your team, and write
          faster using AI-powered workspaces.
        </p>

        <button
          className="
            mt-5
            w-full
            rounded-2xl
            bg-blue-600
            py-3
            font-semibold
            text-white
            transition-all
            duration-300
            hover:-translate-y-0.5
            hover:bg-blue-700
            hover:shadow-lg
          "
        >
          Learn More
        </button>
      </div>
    </section>
  );
}