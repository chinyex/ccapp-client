import { Gift } from "lucide-react";

export default function Birthdays() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <h2 className="mb-4 text-lg font-bold tracking-tight text-slate-900">
        Birthdays
      </h2>

      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-pink-100">
          <Gift className="h-6 w-6 text-pink-600" />
        </div>

        <div>
          <p className="text-sm leading-6 text-slate-800">
            <span className="font-semibold">
              Sarah Johnson
            </span>{" "}
            and{" "}
            <span className="font-semibold">
              2 others
            </span>{" "}
            have birthdays today.
          </p>

          <button
            className="
              mt-3
              rounded-xl
              bg-blue-600
              px-4
              py-2
              text-sm
              font-semibold
              text-white
              transition
              hover:bg-blue-700
            "
          >
            Send Wishes
          </button>
        </div>
      </div>
    </section>
  );
}