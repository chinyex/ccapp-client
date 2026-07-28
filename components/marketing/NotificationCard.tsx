import Card from "@/components/ui/Card";
import { Heart } from "lucide-react";

type NotificationCardProps = {
  title: string;
  description: string;
};

export default function NotificationCard({
  title,
  description,
}: NotificationCardProps) {
  return (
    <Card className="flex items-center gap-3 p-4 shadow-xl">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100">
        <Heart className="h-5 w-5 text-red-500 fill-red-500" />
      </div>

      <div>
        <h4 className="font-semibold text-slate-900">
          {title}
        </h4>

        <p className="text-sm text-slate-500">
          {description}
        </p>
      </div>
    </Card>
  );
}