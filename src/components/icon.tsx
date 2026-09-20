import { cn } from "@/lib/utils";

type IconProps = {
  name: string;
  filled?: boolean;
  className?: string;
  label?: string;
};

export function Icon({ name, filled = false, className, label }: IconProps) {
  return (
    <span
      className={cn("material-symbols-outlined shrink-0", className)}
      data-filled={filled ? "true" : "false"}
      aria-hidden={label ? undefined : true}
      aria-label={label}
      role={label ? "img" : undefined}
    >
      {name}
    </span>
  );
}
