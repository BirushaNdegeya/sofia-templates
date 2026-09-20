import { useEffect, useRef, useState, type FormEvent } from "react";
import { Github, Menu, X } from "lucide-react";
import { Link, useLocation, useNavigate, useSearchParams } from "react-router";
import { ModeToggle } from "./mode-toggle";
import { Input } from "./ui/input";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
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

  const submitSearch = (event: FormEvent) => {
    event.preventDefault();
    const nextQuery = query.trim();
    navigate(nextQuery ? `/templates?q=${encodeURIComponent(nextQuery)}` : "/templates");
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 text-foreground backdrop-blur">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            <Link to="/" className="text-xl font-semibold text-primary">
              Sofia Templates
            </Link>
            <div className="hidden items-center gap-6 md:flex">
              <Link to="/templates" className="text-muted-foreground hover:text-foreground">
                Templates
              </Link>
              <Link to="/about" className="text-muted-foreground hover:text-foreground">
                How to use
              </Link>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <form onSubmit={submitSearch} className="relative hidden sm:block">
              <Input
                ref={searchRef}
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search templates"
                className="w-[180px] pr-14 lg:w-[240px]"
                aria-label="Search templates"
              />
              <span className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-xs text-muted-foreground">
                Ctrl+K
              </span>
              <button type="submit" className="sr-only">
                Search
              </button>
            </form>
            <ModeToggle />
            <a
              href="https://github.com/sofiatechnology/website-templates"
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground hover:text-foreground"
              aria-label="GitHub repository"
            >
              <Github className="h-5 w-5" />
            </a>
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-muted-foreground hover:bg-accent hover:text-foreground md:hidden"
              onClick={() => setIsOpen((open) => !open)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {isOpen ? (
          <div className="space-y-3 border-t border-border py-4 md:hidden">
            <form onSubmit={submitSearch}>
              <Input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search templates"
                aria-label="Search templates"
              />
            </form>
            <Link to="/templates" className="block py-2" onClick={() => setIsOpen(false)}>
              Templates
            </Link>
            <Link to="/about" className="block py-2" onClick={() => setIsOpen(false)}>
              How to use
            </Link>
          </div>
        ) : null}
      </nav>
    </header>
  );
}

export default Header;
