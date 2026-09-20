import * as React from "react";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "md-body-large flex h-14 w-full min-w-0 rounded-extra-small border-0 border-b-2 border-outline bg-surface-container-highest px-4 pt-4 pb-2 text-on-surface outline-none placeholder:text-on-surface-variant",
        "focus-visible:border-primary",
        "disabled:pointer-events-none disabled:opacity-38",
        "aria-invalid:border-error",
        className
      )}
      {...props}
    />
  );
}

export { Input };
