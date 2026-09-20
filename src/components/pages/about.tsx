import { Link } from "react-router";
import { Button } from "../ui/button";

export default function About() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 lg:px-8">
      <h1 className="text-4xl font-bold tracking-tight">Take a template and use it</h1>
      <p className="mt-4 text-lg text-muted-foreground">
        Sofia Templates is a small library of free HTML and CSS layouts. Preview them in the
        browser, download a ZIP, and drop the files into your own project.
      </p>

      <section className="mt-10 space-y-4">
        <h2 className="text-2xl font-semibold">What you get</h2>
        <p className="text-muted-foreground">
          Each template is a standalone folder: markup, styles, and assets. There is no React
          build inside the templates themselves, so you can open them locally or copy pieces
          into another stack.
        </p>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="text-2xl font-semibold">Using a downloaded template</h2>
        <ol className="list-decimal space-y-2 pl-5 text-muted-foreground">
          <li>Choose a template and click Download ZIP.</li>
          <li>Extract the archive on your computer.</li>
          <li>Open <code className="text-foreground">index.html</code> to confirm it looks right.</li>
          <li>Replace placeholder text, colors, and images.</li>
          <li>Upload the folder to any static host when you are ready to publish.</li>
        </ol>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="text-2xl font-semibold">Contributing</h2>
        <p className="text-muted-foreground">
          New templates belong in <code className="text-foreground">public/templates</code>. Add
          the files, then register the template in the gallery data so other people can preview
          and download it.
        </p>
      </section>

      <Button className="mt-10" asChild>
        <Link to="/templates">Browse templates</Link>
      </Button>
    </div>
  );
}
