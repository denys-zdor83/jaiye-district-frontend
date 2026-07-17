import { cn } from "@/lib/utils/cn";
import type { ButtonHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "outline" | "ghost" | "danger";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
}

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-primary text-primary-foreground hover:bg-orange-600 active:bg-orange-700 shadow-md hover:shadow-lg",
  secondary:
    "bg-secondary text-secondary-foreground hover:bg-amber-100 active:bg-amber-200",
  outline:
    "border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground active:bg-orange-600",
  ghost: "text-primary hover:bg-primary/10 active:bg-primary/20",
  danger:
    "bg-accent text-accent-foreground hover:bg-red-700 active:bg-red-800",
};

const sizeClasses: Record<Size, string> = {
  sm: "px-4 py-2 text-sm rounded-md",
  md: "px-6 py-3 text-base rounded-lg",
  lg: "px-8 py-4 text-lg rounded-xl",
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      disabled={disabled}
      className={cn(
        "inline-flex cursor-pointer items-center justify-center gap-2 font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
    >
      {children}
    </button>
  );
}
