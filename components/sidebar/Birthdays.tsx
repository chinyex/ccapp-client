import { Cake, Gift } from "lucide-react";

export default function Birthdays() {
  return (
    <section
      className="
        rounded-3xl
        border
        border-slate-200
        bg-white
        p-5
        shadow-sm
        transition-all
        duration-300
        hover:shadow-lg
      "
    >
      {/* Header */}
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-lg font-bold text-slate-900">
          Birthdays
        </h2>

        <Cake className="h-5 w-5 text-pink-500" />
      </div>

      {/* Content */}
      <div className="flex items-start gap-4">
        <div
          className="
            flex
            h-14
            w-14
            shrink-0
            items-center
            justify-center
            rounded-2xl
            bg-pink-100
          "
        >
          <Gift className="h-7 w-7 text-pink-600" />
        </div>

        <div className="flex-1">
          <p className="text-sm leading-7 text-slate-700">
            <span className="font-semibold text-slate-900">
              Sarah Johnson
            </span>{" "}
            and{" "}
            <span className="font-semibold text-slate-900">
              2 others
            </span>{" "}
            are celebrating their birthdays today.
          </p>

          <button
            className="
              mt-4
              w-full
              rounded-2xl
              bg-blue-600
              py-3
              text-sm
              font-semibold
              text-white
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:bg-blue-700
              hover:shadow-lg
            "
          >
            🎉 Send Birthday Wishes
          </button>
        </div>
      </div>
    </section>
  );
}