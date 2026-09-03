import { MoreHorizontal } from "lucide-react";

import { contacts } from "@/data/contacts";

import ContactItem from "./ContactItem";

export default function Contacts() {
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
        <div>
          <h2 className="text-lg font-bold text-slate-900">
            Contacts
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            {contacts.length} friends online
          </p>
        </div>

        <button
          className="
            rounded-full
            p-2
            text-slate-500
            transition-all
            duration-300
            hover:bg-slate-100
            hover:text-slate-900
          "
        >
          <MoreHorizontal size={20} />
        </button>
      </div>

      {/* Contacts */}
      <div className="space-y-2">
        {contacts.map((contact) => (
          <ContactItem
            key={contact.id}
            contact={contact}
          />
        ))}
      </div>
    </section>
  );
}