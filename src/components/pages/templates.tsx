import { useMemo } from "react";
import { useSearchParams } from "react-router";
import { getTemplateCategories, templates } from "@/assets/data";
import { TemplateCard } from "../cards/template-card";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

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
    <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
      <div className="max-w-2xl">
        <h1 className="text-3xl font-bold tracking-tight">Templates</h1>
        <p className="mt-2 text-muted-foreground">
          Preview a design, then download the full folder or copy the HTML to use it in your project.
        </p>
      </div>

      <div className="mt-8 flex flex-col gap-4">
        <Input
          value={query}
          onChange={(event) => updateParams({ q: event.target.value })}
          placeholder="Search by name, category, or use case..."
          aria-label="Search templates"
        />
        <div className="flex flex-wrap gap-2">
          {categories.map((item) => (
            <Button
              key={item}
              size="sm"
              variant={category === item ? "default" : "outline"}
              onClick={() => updateParams({ category: item })}
            >
              {item === "all" ? "All" : item.charAt(0).toUpperCase() + item.slice(1)}
            </Button>
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className="mt-12 text-muted-foreground">
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
