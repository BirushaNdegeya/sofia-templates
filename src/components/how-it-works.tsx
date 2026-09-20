import { Icon } from "@/components/icon";

const steps = [
  {
    icon: "search",
    title: "Find a template",
    body: "Search by name or filter by cards, forms, pricing, and more.",
  },
  {
    icon: "download",
    title: "Download or copy",
    body: "Take a ZIP of the full folder, or copy the HTML and start from there.",
  },
  {
    icon: "edit",
    title: "Customize and ship",
    body: "Change the text, colors, and images, then open index.html or deploy the folder.",
  },
];

export default function HowItWorks() {
  return (
    <section className="px-4 py-12 nav:px-6 nav:py-16 wide:px-10">
      <h2 className="md-headline-medium text-center text-on-surface">How it works</h2>
      <p className="md-body-large mx-auto mt-3 max-w-2xl text-center text-on-surface-variant">
        These templates are plain HTML and CSS. You can use them without a framework.
      </p>
      <ol className="mx-auto mt-10 max-w-3xl divide-y divide-outline-variant">
        {steps.map((step, index) => (
          <li key={step.title} className="flex gap-4 py-6">
            <span className="grid size-10 shrink-0 place-items-center rounded-full bg-primary-container md-label-large text-on-primary-container">
              {index + 1}
            </span>
            <div>
              <div className="flex items-center gap-2">
                <Icon name={step.icon} className="text-primary" />
                <h3 className="md-title-large text-on-surface">{step.title}</h3>
              </div>
              <p className="md-body-medium mt-2 text-on-surface-variant">{step.body}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
