import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/cn";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  className,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  className?: string;
}) {
  return (
    <header className={cn("relative overflow-hidden border-b border-border bg-muted", className)}>
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 aviation-grid opacity-[0.12]" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(56%_52%_at_12%_8%,rgba(86,170,255,0.22)_0%,transparent_72%),radial-gradient(42%_42%_at_88%_18%,rgba(21,92,198,0.18)_0%,transparent_72%)]"
      />
      <div
        aria-hidden="true"
        className="aviation-sweep pointer-events-none absolute -left-[16%] top-[62%] h-[1px] w-[58%] bg-[linear-gradient(90deg,transparent_0%,rgba(70,154,249,0.24)_42%,transparent_100%)]"
      />
      <div className="container py-16 pt-28 sm:py-20 sm:pt-32 lg:py-24 lg:pt-36">
        <div className="max-w-3xl">
          <Badge variant="subtle" className="uppercase tracking-[0.16em]">
            {eyebrow}
          </Badge>
          <h1 className="mt-5 text-balance text-3xl font-semibold tracking-tight text-[#0F172A] sm:text-4xl">
            {title}
          </h1>
          <p className="mt-5 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            {subtitle}
          </p>
        </div>
      </div>
    </header>
  );
}
