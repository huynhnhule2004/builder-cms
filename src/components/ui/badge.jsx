import * as React from "react";
import { cn } from "@/lib/utils";

function Badge({ className, variant = "default", ...props }) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors",
        variant === "default" && "bg-gray-900 text-white",
        variant === "secondary" && "bg-gray-100 text-gray-900 border border-gray-200",
        className
      )}
      {...props}
    />
  );
}

export { Badge };
