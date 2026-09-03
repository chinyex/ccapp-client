import {
  Briefcase,
  Calendar,
  Globe,
  GraduationCap,
  Mail,
  MapPin,
} from "lucide-react";

export default function AboutCard() {
  return (
    <section
      className="
        rounded-3xl
        border
        border-slate-200
        bg-white
        p-6
        shadow-sm
        transition-all
        duration-300
        hover:shadow-lg
      "
    >
      {/* Heading */}
      <h2 className="mb-6 text-2xl font-bold text-slate-900">
        About
      </h2>

      <div className="space-y-5">
        {/* Job */}
        <div className="flex items-start gap-4">
          <div className="rounded-xl bg-blue-50 p-3 text-blue-600">
            <Briefcase size={20} />
          </div>

          <div>
            <p className="text-sm text-slate-500">
              Occupation
            </p>

            <h3 className="font-semibold text-slate-900">
              Full Stack Developer
            </h3>
          </div>
        </div>

        {/* Education */}
        <div className="flex items-start gap-4">
          <div className="rounded-xl bg-purple-50 p-3 text-purple-600">
            <GraduationCap size={20} />
          </div>

          <div>
            <p className="text-sm text-slate-500">
              Education
            </p>

            <h3 className="font-semibold text-slate-900">
              University of Nigeria, Nsukka
            </h3>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-start gap-4">
          <div className="rounded-xl bg-emerald-50 p-3 text-emerald-600">
            <MapPin size={20} />
          </div>

          <div>
            <p className="text-sm text-slate-500">
              Location
            </p>

            <h3 className="font-semibold text-slate-900">
              Lagos, Nigeria
            </h3>
          </div>
        </div>

        {/* Website */}
        <div className="flex items-start gap-4">
          <div className="rounded-xl bg-orange-50 p-3 text-orange-600">
            <Globe size={20} />
          </div>

          <div>
            <p className="text-sm text-slate-500">
              Portfolio
            </p>

            <a
              href="https://my-portfolio-website-sage-pi.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-blue-600 hover:underline"
            >
              Visit Portfolio
            </a>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-start gap-4">
          <div className="rounded-xl bg-pink-50 p-3 text-pink-600">
            <Mail size={20} />
          </div>

          <div>
            <p className="text-sm text-slate-500">
              Email
            </p>

            <h3 className="font-semibold text-slate-900">
              chinenye@example.com
            </h3>
          </div>
        </div>

        {/* Joined */}
        <div className="flex items-start gap-4">
          <div className="rounded-xl bg-slate-100 p-3 text-slate-600">
            <Calendar size={20} />
          </div>

          <div>
            <p className="text-sm text-slate-500">
              Joined
            </p>

            <h3 className="font-semibold text-slate-900">
              July 2026
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}