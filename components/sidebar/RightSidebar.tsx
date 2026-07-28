import Birthdays from "./Birthdays";
import Contacts from "./Contacts";
import SponsoredCard from "./SponsoredCard";

export default function RightSidebar() {
  return (
    <aside className="w-80 space-y-6">
      <SponsoredCard />

      <Birthdays />

      <Contacts />
    </aside>
  );
}
