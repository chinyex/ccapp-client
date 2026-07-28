import Image from "next/image";
import { cn } from "@/lib/utils";

type AvatarProps = {
  name: string;
  src?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
};

export default function Avatar({
  name,
  src,
  size = "md",
  className,
}: AvatarProps) {
  const initials = name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  const sizes = {
    sm: "h-10 w-10 text-sm",
    md: "h-12 w-12 text-base",
    lg: "h-16 w-16 text-lg",
  };

  const dimensions = {
    sm: 40,
    md: 48,
    lg: 64,
  };

  if (src) {
    return (
      <Image
        src={src}
        alt={name}
        width={dimensions[size]}
        height={dimensions[size]}
        className={cn(
          "rounded-full object-cover",
          sizes[size],
          className
        )}
      />
    );
  }

  return (
    <div
      className={cn(
        "flex items-center justify-center rounded-full bg-blue-600 font-semibold text-white",
        sizes[size],
        className
      )}
    >
      {initials}
    </div>
  );
}