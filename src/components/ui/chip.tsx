import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Icon } from "@/components/icon";

type ChipProps = {
  selected?: boolean;
  onClick?: () => void;
  children: ReactNode;
  className?: string;
};

export function Chip({ selected, onClick, children, className }: ChipProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      className={cn(
        "state-layer md-label-large inline-flex h-8 items-center gap-2 rounded-full border px-4",
        selected
          ? "border-transparent bg-secondary-container text-on-secondary-container"
          : "border-outline-variant bg-transparent text-on-surface-variant",
        className
      )}
    >
      {selected ? <Icon name="check" className="text-[18px]" /> : null}
      {children}
    </button>
  );
}
