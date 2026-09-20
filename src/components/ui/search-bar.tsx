import { type FormEvent, type InputHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";
import { Icon } from "@/components/icon";

type SearchBarProps = InputHTMLAttributes<HTMLInputElement> & {
  onSubmitSearch?: (event: FormEvent<HTMLFormElement>) => void;
  showShortcut?: boolean;
};

export const SearchBar = forwardRef<HTMLInputElement, SearchBarProps>(
  function SearchBar(
    { className, onSubmitSearch, showShortcut = true, ...props },
    ref
  ) {
    return (
      <form
        onSubmit={onSubmitSearch}
        className={cn(
          "flex h-12 w-full items-center gap-3 rounded-full bg-surface-container-highest px-4 text-on-surface",
          className
        )}
        role="search"
      >
        <Icon name="search" className="text-on-surface-variant" />
        <input
          ref={ref}
          type="search"
          className="md-body-large min-w-0 flex-1 bg-transparent text-on-surface outline-none placeholder:text-on-surface-variant"
          {...props}
        />
        {showShortcut ? (
          <kbd className="md-label-small hidden rounded-small bg-surface-container-low px-2 py-1 text-on-surface-variant wide:inline">
            Ctrl+K
          </kbd>
        ) : null}
        <button type="submit" className="sr-only">
          Search
        </button>
      </form>
    );
  }
);
