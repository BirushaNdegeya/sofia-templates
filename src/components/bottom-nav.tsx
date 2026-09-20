import { NavLink } from "react-router";
import { Icon } from "@/components/icon";
import { destinations } from "@/lib/nav";
import { cn } from "@/lib/utils";

export default function BottomNav() {
  return (
    <nav
      aria-label="Primary"
      className="fixed inset-x-0 bottom-0 z-50 flex h-20 items-start justify-around bg-surface-container px-2 pt-3 nav:hidden"
    >
      {destinations.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          end={item.end}
          className="flex min-w-[64px] flex-col items-center text-on-surface-variant"
        >
          {({ isActive }) => (
            <>
              <span
                className={cn(
                  "grid h-8 w-16 place-items-center rounded-full",
                  isActive && "bg-secondary-container text-on-secondary-container"
                )}
              >
                <Icon name={item.icon} filled={isActive} />
              </span>
              <span className="md-label-medium mt-1">{item.label}</span>
            </>
          )}
        </NavLink>
      ))}
    </nav>
  );
}
