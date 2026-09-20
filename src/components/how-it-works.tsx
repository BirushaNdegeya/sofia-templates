import { Download, Pencil, Search } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Find a template",
    body: "Search by name or filter by cards, forms, pricing, and more.",
  },
  {
    icon: Download,
    title: "Download or copy",
    body: "Take a ZIP of the full folder, or copy the HTML and start from there.",
  },
  {
    icon: Pencil,
    title: "Customize and ship",
    body: "Change the text, colors, and images, then open index.html or deploy the folder.",
  },
];

export default function HowItWorks() {
  return (
    <section className="border-t border-border py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold tracking-tight">How it works</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-muted-foreground">
          These templates are plain HTML and CSS. You can use them without a framework.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {steps.map((step, index) => (
            <div key={step.title} className="rounded-xl border border-border bg-card p-6">
              <div className="mb-4 flex items-center gap-3">
                <span className="grid size-9 place-items-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                  {index + 1}
                </span>
                <step.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
