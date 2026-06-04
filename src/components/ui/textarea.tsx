import * as React from "react";

import { cn } from "@/lib/utils";

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

/** Textarea estilizado y reutilizable (shadcn-like). */
const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, rows = 4, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        rows={rows}
        className={cn(
          // base: borde redondeado, padding cómodo y altura mínima
          "min-h-[7rem] w-full resize-y rounded-xl border border-border bg-white px-4 py-3 text-sm text-foreground",
          "placeholder:text-muted-foreground",
          // foco: anillo azul de marca
          "transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue/40 focus-visible:border-brand-blue",
          // deshabilitado
          "disabled:cursor-not-allowed disabled:opacity-50",
          className,
        )}
        {...props}
      />
    );
  },
);
Textarea.displayName = "Textarea";

export { Textarea };
