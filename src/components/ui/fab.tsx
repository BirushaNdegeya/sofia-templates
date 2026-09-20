import { Link } from "react-router";
import { cn } from "@/lib/utils";
import { Icon } from "@/components/icon";

type FabProps = {
  icon: string;
  label?: string;
  to?: string;
  href?: string;
  onClick?: () => void;
  className?: string;
};

export function Fab({ icon, label, to, href, onClick, className }: FabProps) {
  const classes = cn(
    "state-layer fixed z-40 inline-flex items-center justify-center gap-2 rounded-full bg-primary-container text-on-primary-container",
    label ? "h-14 px-5" : "size-14",
    "right-4 bottom-20 nav:right-6 nav:bottom-6",
    className
  );

  const content = (
    <>
      <Icon name={icon} />
      {label ? <span className="md-label-large">{label}</span> : null}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} target="_blank" rel="noreferrer">
        {content}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={classes}>
      {content}
    </button>
  );
}
