import { MoreHorizontal } from "lucide-react";

import { contacts } from "@/data/contacts";

import ContactItem from "./ContactItem";

export default function Contacts() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      {/* Header */}
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-lg font-bold tracking-tight text-slate-900">
          Contacts
        </h2>

        <button
          className="
            rounded-full
            p-2
            text-slate-600
            transition
            hover:bg-slate-100
            hover:text-slate-900
          "
        >
          <MoreHorizontal size={20} />
        </button>
      </div>

      {/* Contact List */}
      <div className="space-y-1">
        {contacts.map((contact) => (
          <ContactItem key={contact.id} contact={contact} />
        ))}
      </div>
    </section>
  );
}
