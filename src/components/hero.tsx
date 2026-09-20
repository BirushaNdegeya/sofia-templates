import { Link } from "react-router";
import { Download, Eye, FolderOpen } from "lucide-react";
import { Button } from "./ui/button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:py-28 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-primary">
            Sofia Templates
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
            Preview, download, and use free website templates
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Browse live HTML and CSS templates, copy the code, or download a ZIP with
            everything you need. Open the files, customize them, and put them on any site.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button size="lg" asChild>
              <Link to="/templates">
                <FolderOpen />
                Browse templates
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/about">
                <Eye />
                How to use them
              </Link>
            </Button>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-4 text-left sm:grid-cols-3">
            <div className="rounded-xl border border-border bg-card p-4">
              <Eye className="mb-2 h-5 w-5 text-primary" />
              <p className="font-medium">Live preview</p>
              <p className="mt-1 text-sm text-muted-foreground">See the design before you take it.</p>
            </div>
            <div className="rounded-xl border border-border bg-card p-4">
              <Download className="mb-2 h-5 w-5 text-primary" />
              <p className="font-medium">Download ZIP</p>
              <p className="mt-1 text-sm text-muted-foreground">Get HTML, CSS, and assets together.</p>
            </div>
            <div className="rounded-xl border border-border bg-card p-4">
              <FolderOpen className="mb-2 h-5 w-5 text-primary" />
              <p className="font-medium">Use anywhere</p>
              <p className="mt-1 text-sm text-muted-foreground">No build step. Edit and host it.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
