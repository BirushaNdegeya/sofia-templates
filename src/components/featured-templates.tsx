import { Link } from "react-router";
import { templates } from "@/assets/data";
import { TemplateCard } from "./cards/template-card";
import { Button } from "./ui/button";
import { Icon } from "@/components/icon";

export default function FeaturedTemplates() {
  const featured = templates.slice(0, 4);

  return (
    <section className="px-4 py-12 nav:px-6 nav:py-16 wide:px-10">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 className="md-headline-medium text-on-surface">Featured templates</h2>
          <p className="md-body-large mt-2 text-on-surface-variant">
            Preview them here, then download a ZIP and start editing.
          </p>
        </div>
        <Button variant="text" asChild>
          <Link to="/templates">
            View all templates
            <Icon name="arrow_forward" />
          </Link>
        </Button>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {featured.map((template) => (
          <TemplateCard key={template.slug} template={template} />
        ))}
      </div>
    </section>
  );
}
