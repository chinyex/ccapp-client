import Avatar from "@/components/ui/Avatar";
import Card from "@/components/ui/Card";
import Stat from "@/components/ui/Stat";
import { Heart, MessageCircle, Share2 } from "lucide-react";

export default function FeedCard() {
  return (
    <Card className="p-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Avatar
          name="Sarah Johnson"
          size="md"
        />

        <div>
          <h3 className="font-semibold text-slate-900">
            Sarah Johnson
          </h3>

          <p className="text-sm text-slate-500">
            Product Designer • 2 mins ago
          </p>
        </div>
      </div>

      {/* Content */}
      <p className="mt-6 leading-7 text-slate-700">
        ✨ Just joined CCApp! Looking forward to connecting with amazing people
        and sharing ideas with the community.
      </p>

      {/* Image Placeholder */}
      <div className="mt-6 h-52 rounded-2xl bg-gradient-to-br from-blue-200 via-cyan-100 to-indigo-100" />

      {/* Engagement */}
      <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
        <div className="flex items-center gap-2 text-slate-500">
          <Heart className="h-5 w-5" />
          <span>2.4K</span>
        </div>

        <div className="flex items-center gap-2 text-slate-500">
          <MessageCircle className="h-5 w-5" />
          <span>318</span>
        </div>

        <div className="flex items-center gap-2 text-slate-500">
          <Share2 className="h-5 w-5" />
          <span>89</span>
        </div>
      </div>

      {/* Statistics */}
      <div className="mt-8 grid grid-cols-3 gap-4 border-t border-slate-100 pt-6">
        <Stat value="15K+" label="Users" />
        <Stat value="120K+" label="Posts" />
        <Stat value="800+" label="Groups" />
      </div>
    </Card>
  );
}