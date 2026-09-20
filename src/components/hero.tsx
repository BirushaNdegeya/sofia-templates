import { Link } from "react-router";
import { Icon } from "@/components/icon";
import { Button } from "./ui/button";

const highlights = [
  {
    icon: "visibility",
    title: "Live preview",
    body: "See the design before you take it.",
  },
  {
    icon: "download",
    title: "Download ZIP",
    body: "Get HTML, CSS, and assets together.",
  },
  {
    icon: "folder_open",
    title: "Use anywhere",
    body: "No build step. Edit and host it.",
  },
];

export default function Hero() {
  return (
    <section className="px-4 py-12 nav:px-6 nav:py-16 wide:px-10 wide:py-20">
      <div className="mx-auto max-w-3xl text-center">
        <p className="md-label-large mb-3 text-primary">Sofia Templates</p>
        <h1 className="md-display-medium text-on-surface">
          Preview, download, and use free website templates
        </h1>
        <p className="md-body-large mx-auto mt-6 max-w-2xl text-on-surface-variant">
          Browse live HTML and CSS templates, copy the code, or download a ZIP with
          everything you need. Open the files, customize them, and put them on any site.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Button size="lg" variant="filled" asChild>
            <Link to="/templates">
              <Icon name="grid_view" />
              Browse templates
            </Link>
          </Button>
          <Button variant="outlined" size="lg" asChild>
            <Link to="/about">
              <Icon name="menu_book" />
              How to use them
            </Link>
          </Button>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-0 text-left sm:grid-cols-3 sm:divide-x sm:divide-outline-variant">
          {highlights.map((item) => (
            <div key={item.title} className="px-0 py-5 sm:px-6 sm:py-0">
              <Icon name={item.icon} className="text-primary" />
              <p className="md-title-medium mt-3 text-on-surface">{item.title}</p>
              <p className="md-body-medium mt-1 text-on-surface-variant">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
