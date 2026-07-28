import Image from "next/image";

import { Contact } from "@/types/contact";

type ContactItemProps = {
  contact: Contact;
};

export default function ContactItem({
  contact,
}: ContactItemProps) {
  return (
    <button
      className="
        flex
        w-full
        items-center
        gap-3
        rounded-2xl
        p-2
        transition
        hover:bg-slate-100
      "
    >
      {/* Avatar */}
      <div className="relative h-12 w-12 shrink-0">
        <Image
          src={contact.avatar}
          alt={contact.name}
          fill
          sizes="48px"
          className="rounded-full object-cover"
        />

        {contact.online && (
          <span
            className="
              absolute
              bottom-0
              right-0
              h-3.5
              w-3.5
              rounded-full
              border-2
              border-white
              bg-emerald-500
            "
          />
        )}
      </div>

      {/* Name */}
      <div className="min-w-0 flex-1 text-left">
        <p className="truncate text-[15px] font-semibold text-slate-900">
          {contact.name}
        </p>
      </div>
    </button>
  );
}