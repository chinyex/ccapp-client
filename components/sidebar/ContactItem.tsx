import Image from "next/image";

import type { Contact } from "@/types/contact";

type ContactItemProps = {
  contact: Contact;
};

export default function ContactItem({
  contact,
}: ContactItemProps) {
  return (
    <button
      className="
        group
        flex
        w-full
        items-center
        gap-4
        rounded-2xl
        p-3
        text-left
        transition-all
        duration-300
        hover:bg-slate-50
        hover:shadow-sm
      "
    >
      {/* Avatar */}
      <div className="relative shrink-0">
        <Image
          src={contact.avatar}
          alt={contact.name}
          width={52}
          height={52}
          className="
            rounded-full
            object-cover
            ring-2
            ring-transparent
            transition-all
            duration-300
            group-hover:ring-blue-500
          "
        />

        {contact.online && (
          <>
            {/* Online indicator */}
            <span
              className="
                absolute
                bottom-0
                right-0
                h-4
                w-4
                rounded-full
                border-2
                border-white
                bg-emerald-500
              "
            />

            {/* Pulse animation */}
            <span
              className="
                absolute
                bottom-0
                right-0
                h-4
                w-4
                animate-ping
                rounded-full
                bg-emerald-400
                opacity-40
              "
            />
          </>
        )}
      </div>

      {/* User Info */}
      <div className="min-w-0 flex-1">
        <p
          className="
            truncate
            text-[15px]
            font-semibold
            text-slate-900
            transition-colors
            duration-300
            group-hover:text-blue-600
          "
        >
          {contact.name}
        </p>

        <p className="mt-1 text-xs text-slate-500">
          {contact.online ? "Active now" : "Offline"}
        </p>
      </div>
    </button>
  );
}