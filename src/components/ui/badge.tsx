import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-3 py-1 text-[11px] font-medium tracking-wide",
  {
    variants: {
      variant: {
        default: "border-border bg-white text-[#0F172A]",
        subtle: "border-border bg-muted text-slate-700",
        "on-dark": "border-white/15 bg-white/10 text-white/85",
        glow: "border-border bg-white text-[#0F172A]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
