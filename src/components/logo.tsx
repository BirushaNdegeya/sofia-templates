import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  showWordmark?: boolean;
};

export function Logo({ className, showWordmark = false }: LogoProps) {
  return (
    <span className={cn("inline-flex items-center gap-2", className)}>
      <img
        src="/logo.svg"
        alt=""
        width={40}
        height={40}
        className="size-10"
      />
      {showWordmark ? (
        <span className="md-title-large text-on-surface">Sofia Templates</span>
      ) : null}
    </span>
  );
}
