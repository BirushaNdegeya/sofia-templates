import { Link } from "react-router";
import { Icon } from "@/components/icon";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-outline-variant bg-surface-container-low">
      <div className="px-6 py-10 lg:px-8">
        <nav className="mb-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          <Link to="/templates" className="md-label-large text-on-surface-variant hover:text-primary">
            Templates
          </Link>
          <Link to="/about" className="md-label-large text-on-surface-variant hover:text-primary">
            How to use
          </Link>
          <a
            href="https://dev.to/sofia-tech"
            target="_blank"
            rel="noreferrer"
            className="md-label-large text-on-surface-variant hover:text-primary"
          >
            Blog
          </a>
          <a
            href="https://github.com/sofiatechnology/website-templates"
            target="_blank"
            rel="noreferrer"
            className="md-label-large text-on-surface-variant hover:text-primary"
          >
            GitHub
          </a>
        </nav>

        <div className="mb-8 flex items-center justify-center gap-2">
          <a
            href="https://github.com/sofiatechnology"
            aria-label="GitHub"
            target="_blank"
            rel="noreferrer"
            className="state-layer grid size-10 place-items-center rounded-full text-on-surface-variant"
          >
            <Icon name="code" />
          </a>
          <a
            href="https://dev.to/sofia-tech"
            aria-label="Dev.to"
            target="_blank"
            rel="noreferrer"
            className="state-layer grid size-10 place-items-center rounded-full text-on-surface-variant"
          >
            <Icon name="article" />
          </a>
          <a
            href="https://www.patreon.com/c/SOFIATech"
            aria-label="Patreon"
            target="_blank"
            rel="noreferrer"
            className="state-layer grid size-10 place-items-center rounded-full text-on-surface-variant"
          >
            <Icon name="favorite" />
          </a>
        </div>

        <p className="md-body-small text-center text-on-surface-variant">
          © {new Date().getFullYear()} Sofia Tech. Free templates you can preview, download, and use.
        </p>
      </div>
    </footer>
  );
}
