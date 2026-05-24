import { cn } from "@/lib/cn";

export function Section({
  id,
  className,
  children,
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className={cn("relative overflow-hidden py-16 sm:py-20 lg:py-24", className)}
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 aviation-grid opacity-[0.08]" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_40%_at_8%_0%,rgba(59,144,246,0.1)_0%,transparent_74%),radial-gradient(56%_38%_at_94%_8%,rgba(16,66,158,0.08)_0%,transparent_74%)]"
      />
      <div
        aria-hidden="true"
        className="aviation-sweep pointer-events-none absolute -left-[18%] top-[22%] h-[1px] w-[58%] bg-[linear-gradient(90deg,transparent_0%,rgba(66,159,255,0.2)_45%,transparent_100%)]"
      />
      <div
        aria-hidden="true"
        className="aviation-sweep pointer-events-none absolute -right-[16%] bottom-[20%] h-[1px] w-[52%] bg-[linear-gradient(90deg,transparent_0%,rgba(35,99,209,0.16)_45%,transparent_100%)] [animation-delay:1.7s]"
      />
      {children}
    </section>
  );
}
