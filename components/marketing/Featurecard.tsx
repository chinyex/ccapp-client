import Card from "@/components/ui/Card";
import { LucideIcon } from "lucide-react";

type FeatureCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export default function FeatureCard({
  icon: Icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <Card className="group h-full p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 transition-colors duration-300 group-hover:bg-blue-600">
        <Icon className="h-7 w-7 text-blue-600 transition-colors duration-300 group-hover:text-white" />
      </div>

      <h3 className="mt-6 text-2xl font-bold text-slate-900">
        {title}
      </h3>

      <p className="mt-4 leading-7 text-slate-600">
        {description}
      </p>
    </Card>
  );
}