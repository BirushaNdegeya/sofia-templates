import { Link } from "react-router";
import { Button } from "../ui/button";
import { Icon } from "@/components/icon";

export default function About() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 nav:px-6 nav:py-16 wide:px-10">
      <h1 className="md-headline-large text-on-surface">Take a template and use it</h1>
      <p className="md-body-large mt-4 text-on-surface-variant">
        Sofia Templates is a small library of free HTML and CSS layouts. Preview them in the
        browser, download a ZIP, and drop the files into your own project.
      </p>

      <section className="mt-10">
        <h2 className="md-headline-small text-on-surface">What you get</h2>
        <p className="md-body-large mt-3 text-on-surface-variant">
          Each template is a standalone folder: markup, styles, and assets. There is no React
          build inside the templates themselves, so you can open them locally or copy pieces
          into another stack.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="md-headline-small text-on-surface">Using a downloaded template</h2>
        <ol className="md-body-large mt-3 list-decimal space-y-2 pl-5 text-on-surface-variant">
          <li>Choose a template and click Download ZIP.</li>
          <li>Extract the archive on your computer.</li>
          <li>
            Open <code className="text-on-surface">index.html</code> to confirm it looks right.
          </li>
          <li>Replace placeholder text, colors, and images.</li>
          <li>Upload the folder to any static host when you are ready to publish.</li>
        </ol>
      </section>

      <section className="mt-10">
        <h2 className="md-headline-small text-on-surface">Contributing</h2>
        <p className="md-body-large mt-3 text-on-surface-variant">
          New templates belong in <code className="text-on-surface">public/templates</code>. Add
          the files, then register the template in the gallery data so other people can preview
          and download it.
        </p>
      </section>

      <Button className="mt-10" asChild>
        <Link to="/templates">
          <Icon name="grid_view" />
          Browse templates
        </Link>
      </Button>
    </div>
  );
}
