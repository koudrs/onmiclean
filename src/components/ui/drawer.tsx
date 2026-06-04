"use client";

import * as React from "react";
import { Drawer as DrawerPrimitive } from "vaul";

import { cn } from "@/lib/utils";

// Wrapper sobre vaul para el Drawer mobile (se desliza desde abajo).
const Drawer = DrawerPrimitive.Root;
const DrawerTrigger = DrawerPrimitive.Trigger;
const DrawerClose = DrawerPrimitive.Close;
const DrawerTitle = DrawerPrimitive.Title;
const DrawerDescription = DrawerPrimitive.Description;

const DrawerContent = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DrawerPrimitive.Portal>
    <DrawerPrimitive.Overlay className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm" />
    <DrawerPrimitive.Content
      ref={ref}
      className={cn(
        "fixed inset-x-0 bottom-0 z-50 mt-24 flex max-h-[92vh] flex-col rounded-t-3xl bg-white focus:outline-none",
        className,
      )}
      {...props}
    >
      {/* Asa de arrastre */}
      <div className="mx-auto mt-3 h-1.5 w-12 shrink-0 rounded-full bg-border" />
      <div className="overflow-y-auto overscroll-contain">{children}</div>
    </DrawerPrimitive.Content>
  </DrawerPrimitive.Portal>
));
DrawerContent.displayName = "DrawerContent";

export {
  Drawer,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerTitle,
  DrawerDescription,
};
