import { cn } from "@/lib/cn";
import { Badge } from "@/components/ui/badge";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}) {
  const isCenter = align === "center";
  return (
    <div
      className={cn(
        "mx-auto max-w-3xl",
        isCenter ? "text-center" : "text-left",
        className
      )}
    >
      {eyebrow ? (
        <div className={cn("mb-4 flex", isCenter ? "justify-center" : "justify-start")}>
          <Badge variant="subtle" className="uppercase tracking-[0.16em]">
            {eyebrow}
          </Badge>
        </div>
      ) : null}
      <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
        {title}
      </h2>
      <div
        className={cn(
          "mt-4 h-[2px] w-16 rounded-full bg-gradient-to-r from-[#6EC5FF] to-[#1F73DD]",
          isCenter ? "mx-auto" : "mx-0"
        )}
      />
      {description ? (
        <p className="mt-4 text-pretty text-[15px] leading-relaxed text-muted-foreground sm:text-base">
          {description}
        </p>
      ) : null}
    </div>
  );
}
