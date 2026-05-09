import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", ...props }, ref) => (
    <button
      ref={ref}
      className={cn(
        "inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold transition",
        variant === "default" ? "bg-[#F5A623] text-[#0F1F3D]" : "border border-slate-300 bg-transparent text-[#0F1F3D]",
        className
      )}
      {...props}
    />
  )
);
Button.displayName = "Button";
