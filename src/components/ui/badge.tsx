import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium",
  {
    variants: {
      variant: {
        blue: "bg-brand-blue/10 text-brand-blue-dark",
        green: "bg-brand-green/10 text-brand-green-dark",
        neutral: "bg-muted text-muted-foreground",
        gradient: "brand-gradient text-white",
      },
    },
    defaultVariants: { variant: "blue" },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}
