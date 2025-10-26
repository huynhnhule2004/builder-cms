"use client";

import * as React from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

const Checkbox = React.forwardRef(({ className, checked, onCheckedChange, ...props }, ref) => {
  return (
    <button
      ref={ref}
      type="button"
      role="checkbox"
      aria-checked={checked}
      onClick={() => onCheckedChange?.(!checked)}
      className={cn(
        "h-5 w-5 rounded border-2 border-gray-300 flex items-center justify-center transition-colors",
        checked && "bg-purple-600 border-purple-600",
        className
      )}
      {...props}
    >
      {checked && <Check className="h-3.5 w-3.5 text-white" />}
    </button>
  );
});
Checkbox.displayName = "Checkbox";

export { Checkbox };
