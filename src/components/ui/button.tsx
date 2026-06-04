import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue/40 disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0 active:scale-[0.98]",
  {
    variants: {
      variant: {
        default:
          "brand-gradient text-white shadow-lg shadow-brand-blue/20 hover:shadow-xl hover:shadow-brand-blue/30 hover:-translate-y-0.5",
        whatsapp:
          "cta-whatsapp relative overflow-hidden bg-[linear-gradient(135deg,#25d366_0%,#1ebe57_50%,#10b981_100%)] font-bold text-white shadow-lg shadow-whatsapp/40 ring-1 ring-inset ring-white/20 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-whatsapp/50 hover:brightness-110",
        outline:
          "border border-border bg-white text-foreground hover:border-brand-blue hover:text-brand-blue",
        ghost: "text-foreground hover:bg-muted",
        secondary:
          "bg-muted text-foreground hover:bg-border",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 px-4",
        lg: "h-13 px-8 text-base",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
