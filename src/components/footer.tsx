import { Github } from "lucide-react";
import { Link } from "react-router";
import devto from "../assets/icons/dev-to-seeklogo.png";
import patreon from "../assets/icons/patreon.png";

export default function Footer() {
  return (
    <footer className="mt-8 border-t border-border">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <nav className="mb-8 flex flex-col items-center justify-center gap-4 md:flex-row md:gap-8">
          <Link to="/templates" className="hover:text-primary">
            Templates
          </Link>
          <Link to="/about" className="hover:text-primary">
            How to use
          </Link>
          <a href="https://dev.to/sofia-tech" target="_blank" rel="noreferrer" className="hover:text-primary">
            Blog
          </a>
          <a
            href="https://github.com/sofiatechnology/website-templates"
            target="_blank"
            rel="noreferrer"
            className="hover:text-primary"
          >
            GitHub
          </a>
        </nav>

        <div className="mb-8 flex items-center justify-center gap-6">
          <a
            href="https://github.com/sofiatechnology"
            aria-label="GitHub"
            target="_blank"
            rel="noreferrer"
            className="hover:text-primary"
          >
            <Github />
          </a>
          <a href="https://dev.to/sofia-tech" aria-label="Dev.to" target="_blank" rel="noreferrer">
            <img src={devto} alt="" className="h-6 w-auto" width={32} height={32} />
          </a>
          <a href="https://www.patreon.com/c/SOFIATech" aria-label="Patreon" target="_blank" rel="noreferrer">
            <img src={patreon} alt="" width={32} height={32} />
          </a>
        </div>

        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Sofia Tech. Free templates you can preview, download, and use.
        </p>
      </div>
    </footer>
  );
}
