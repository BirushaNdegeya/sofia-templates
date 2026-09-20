import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "state-layer inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full md-label-large outline-none disabled:pointer-events-none disabled:opacity-38 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        filled: "bg-primary text-on-primary",
        tonal: "bg-secondary-container text-on-secondary-container",
        outlined:
          "border border-outline bg-transparent text-primary",
        text: "bg-transparent text-primary",
        fab: "bg-primary-container text-on-primary-container",
        default: "bg-primary text-on-primary",
        destructive: "bg-error text-on-error",
        outline: "border border-outline bg-transparent text-primary",
        secondary: "bg-secondary-container text-on-secondary-container",
        ghost: "bg-transparent text-on-surface-variant",
        link: "rounded-none bg-transparent text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 min-w-16 px-6",
        sm: "h-8 min-w-12 px-4",
        lg: "h-12 min-w-20 px-8",
        icon: "size-10 min-w-10 px-0",
        fab: "size-14 min-w-14 px-0",
        extended: "h-14 min-w-20 px-5",
      },
    },
    defaultVariants: {
      variant: "filled",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
