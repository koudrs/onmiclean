import * as React from "react";

import { cn } from "@/lib/utils";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

/** Input estilizado y reutilizable (shadcn-like). */
const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", ...props }, ref) => {
    return (
      <input
        ref={ref}
        type={type}
        className={cn(
          // base: altura, borde redondeado, fondo y texto
          "h-11 w-full rounded-xl border border-border bg-white px-4 text-sm text-foreground",
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
Input.displayName = "Input";

export { Input };
