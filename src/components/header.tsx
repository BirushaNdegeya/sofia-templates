import { useEffect, useRef, useState, type FormEvent } from "react";
import { Link, useLocation, useNavigate, useSearchParams } from "react-router";
import { Icon } from "@/components/icon";
import { ModeToggle } from "./mode-toggle";
import { SearchBar } from "./ui/search-bar";
import { Button } from "./ui/button";

function Header() {
  const [query, setQuery] = useState("");
  const searchRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    if (location.pathname === "/templates") {
      setQuery(searchParams.get("q") ?? "");
    }
  }, [location.pathname, searchParams]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        searchRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const goToResults = (nextQuery: string) => {
    const params = new URLSearchParams(location.pathname === "/templates" ? searchParams : undefined);
    if (nextQuery) {
      params.set("q", nextQuery);
    } else {
      params.delete("q");
    }
    const suffix = params.toString();
    navigate(suffix ? `/templates?${suffix}` : "/templates");
  };

  const submitSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    goToResults(query.trim());
  };

  return (
    <header className="sticky top-0 z-50 bg-surface-container">
      <div className="flex h-16 items-center gap-2 px-2 nav:h-16 nav:gap-4 nav:px-4 wide:px-6">
        <Link
          to="/"
          className="flex shrink-0 items-center gap-2 px-2 text-on-surface"
          aria-label="Sofia Templates home"
        >
          <span className="grid size-10 place-items-center rounded-full bg-primary-container text-on-primary-container">
            <Icon name="web" filled />
          </span>
          <span className="md-title-large hidden nav:inline">Sofia Templates</span>
        </Link>

        <div className="mx-auto min-w-0 flex-1 max-w-3xl">
          <SearchBar
            ref={searchRef}
            value={query}
            onChange={(event) => {
              const value = event.target.value;
              setQuery(value);
              if (location.pathname === "/templates") {
                goToResults(value.trim());
              }
            }}
            onSubmitSearch={submitSearch}
            placeholder="Search templates"
            aria-label="Search templates"
          />
        </div>

        <div className="flex shrink-0 items-center">
          <ModeToggle />
          <Button variant="text" size="icon" asChild>
            <a
              href="https://github.com/sofiatechnology/website-templates"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub repository"
            >
              <Icon name="code" />
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}

export default Header;
