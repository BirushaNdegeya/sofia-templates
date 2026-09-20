import { useMemo } from "react";
import { useSearchParams } from "react-router";
import { getTemplateCategories, templates } from "@/assets/data";
import { TemplateCard } from "../cards/template-card";
import { Chip } from "../ui/chip";

export default function Templates() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("q") ?? "";
  const category = searchParams.get("category") ?? "all";
  const categories = getTemplateCategories();

  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return templates.filter((template) => {
      const matchesCategory = category === "all" || template.category.includes(category);
      const matchesQuery =
        needle.length === 0 ||
        template.title.toLowerCase().includes(needle) ||
        template.description.toLowerCase().includes(needle) ||
        template.category.some((item) => item.toLowerCase().includes(needle));
      return matchesCategory && matchesQuery;
    });
  }, [category, query]);

  const updateParams = (next: { q?: string; category?: string }) => {
    const params = new URLSearchParams(searchParams);
    const nextQuery = next.q ?? query;
    const nextCategory = next.category ?? category;

    if (nextQuery) {
      params.set("q", nextQuery);
    } else {
      params.delete("q");
    }

    if (nextCategory && nextCategory !== "all") {
      params.set("category", nextCategory);
    } else {
      params.delete("category");
    }

    setSearchParams(params);
  };

  return (
    <div className="px-4 py-8 nav:px-6 nav:py-10 wide:px-10">
      <div className="max-w-2xl">
        <h1 className="md-headline-large text-on-surface">Templates</h1>
        <p className="md-body-large mt-2 text-on-surface-variant">
          Preview a design, then download the full folder or copy the HTML to use it in your project.
        </p>
      </div>

      <div className="mt-8 flex flex-wrap gap-2">
        {categories.map((item) => (
          <Chip
            key={item}
            selected={category === item}
            onClick={() => updateParams({ category: item })}
          >
            {item === "all" ? "All" : item.charAt(0).toUpperCase() + item.slice(1)}
          </Chip>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="md-body-large mt-12 text-on-surface-variant">
          No templates match that search. Try a different keyword or category.
        </p>
      ) : (
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {filtered.map((template) => (
            <TemplateCard key={template.slug} template={template} />
          ))}
        </div>
      )}
    </div>
  );
}
