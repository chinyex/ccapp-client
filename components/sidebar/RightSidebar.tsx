import Birthdays from "./Birthdays";
import Contacts from "./Contacts";
import SponsoredCard from "./SponsoredCard";

export default function RightSidebar() {
  return (
    <aside className="w-80">
      <div className="space-y-6">
        <SponsoredCard />

        <Birthdays />

        <Contacts />
      </div>
    </aside>
  );
}