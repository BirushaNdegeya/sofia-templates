import { NavLink } from "react-router";
import { Icon } from "@/components/icon";
import { destinations } from "@/lib/nav";
import { cn } from "@/lib/utils";

export default function NavRail() {
  return (
    <nav
      aria-label="Primary"
      className="sticky top-16 hidden h-[calc(100vh-4rem)] w-20 shrink-0 flex-col items-center gap-1 bg-surface-container py-3 nav:flex wide:w-64 wide:items-stretch wide:rounded-none wide:px-3"
    >
      {destinations.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          end={item.end}
          className={({ isActive }) =>
            cn(
              "state-layer group flex flex-col items-center rounded-full px-0 py-1 text-on-surface-variant wide:flex-row wide:gap-3 wide:px-4 wide:py-0",
              isActive && "text-on-secondary-container"
            )
          }
        >
          {({ isActive }) => (
            <>
              <span
                className={cn(
                  "state-layer grid h-8 w-14 place-items-center rounded-full wide:h-14 wide:w-14",
                  isActive && "bg-secondary-container text-on-secondary-container"
                )}
              >
                <Icon name={item.icon} filled={isActive} />
              </span>
              <span className="md-label-medium mt-1 wide:mt-0 wide:text-sm wide:font-medium wide:tracking-[0.0063rem] wide:leading-5">
                {item.label}
              </span>
            </>
          )}
        </NavLink>
      ))}
    </nav>
  );
}
