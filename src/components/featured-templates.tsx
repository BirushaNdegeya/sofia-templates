import { Link } from "react-router";
import { templates } from "@/assets/data";
import { TemplateCard } from "./cards/template-card";
import { Button } from "./ui/button";

export default function FeaturedTemplates() {
  const featured = templates.slice(0, 4);

  return (
    <section className="border-t border-border py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Featured templates</h2>
            <p className="mt-2 text-muted-foreground">
              Preview them here, then download a ZIP and start editing.
            </p>
          </div>
          <Button variant="outline" asChild>
            <Link to="/templates">View all templates</Link>
          </Button>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {featured.map((template) => (
            <TemplateCard key={template.slug} template={template} />
          ))}
        </div>
      </div>
    </section>
  );
}
