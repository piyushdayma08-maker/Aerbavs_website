import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/cn";

export function Logo({
  className,
  variant = "light",
}: {
  className?: string;
  variant?: "light" | "dark";
}) {
  return (
    <Link href="/" className={cn("group inline-flex items-center", className)} aria-label="AERBAVS MRO Parts & Leasing FZCO — Home">
      <Image
        src="/logo.png"
        alt="AERBAVS MRO Parts & Leasing FZCO"
        width={300}
        height={295}
        className={cn(
          "h-14 w-auto transition-opacity group-hover:opacity-90",
          variant === "dark" && "brightness-0 invert"
        )}
        priority
      />
    </Link>
  );
}
