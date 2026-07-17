"use client";

import { cn } from "@/lib/utils/cn";
import type { InputHTMLAttributes } from "react";

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  required?: boolean;
}

export function FormInput({ label, required, className, ...props }: FormInputProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-medium text-foreground/80">
        {label}
        {required && <span className="ml-1 text-accent">*</span>}
      </label>
      <input
        {...props}
        required={required}
        className={cn(
          "w-full rounded-lg border border-border bg-input-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors",
          className
        )}
      />
    </div>
  );
}
