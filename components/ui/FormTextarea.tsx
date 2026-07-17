"use client";

import { cn } from "@/lib/utils/cn";
import type { TextareaHTMLAttributes } from "react";

interface FormTextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  required?: boolean;
}

export function FormTextarea({ label, required, className, ...props }: FormTextareaProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-medium text-foreground/80">
        {label}
        {required && <span className="ml-1 text-accent">*</span>}
      </label>
      <textarea
        {...props}
        required={required}
        rows={5}
        className={cn(
          "w-full resize-none rounded-lg border border-border bg-input-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors",
          className
        )}
      />
    </div>
  );
}
