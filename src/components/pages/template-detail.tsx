import { useRef } from "react";
import { Link, useParams } from "react-router";
import { getTemplateBySlug } from "@/assets/data";
import { useTemplateActions } from "@/hooks/use-template-actions";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Icon } from "@/components/icon";
import { Fab } from "../ui/fab";

export default function TemplateDetail() {
  const { slug } = useParams();
  const template = slug ? getTemplateBySlug(slug) : undefined;

  if (!template) {
    return (
      <div className="mx-auto max-w-3xl px-6 py-20 text-center">
        <h1 className="md-headline-large text-on-surface">Template not found</h1>
        <p className="md-body-large mt-3 text-on-surface-variant">
          That template is not in the library. Browse the collection and pick another one.
        </p>
        <Button className="mt-6" asChild>
          <Link to="/templates">Back to templates</Link>
        </Button>
      </div>
    );
  }

  return <TemplateDetailContent template={template} />;
}

function TemplateDetailContent({ template }: { template: ITemplate }) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const actions = useTemplateActions(template);

  return (
    <div className="px-4 py-8 nav:px-6 nav:py-10 wide:px-10">
      <Link
        to="/templates"
        className="md-label-large inline-flex items-center gap-1 text-primary"
      >
        <Icon name="arrow_back" />
        All templates
      </Link>

      <div className="mt-6 grid gap-8 lg:grid-cols-[1.4fr_0.8fr]">
        <div className="overflow-hidden rounded-extra-large bg-surface-container-low">
          <iframe
            ref={iframeRef}
            src={template.link}
            title={`${template.title} preview`}
            className="h-[640px] w-full bg-surface-container-lowest"
            sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
          />
        </div>

        <aside className="space-y-6">
          <div>
            <div className="flex flex-wrap gap-2">
              {template.category.map((category) => (
                <span
                  key={category}
                  className="md-label-small rounded-full bg-secondary-container px-3 py-1 text-on-secondary-container"
                >
                  {category}
                </span>
              ))}
            </div>
            <h1 className="md-headline-medium mt-3 text-on-surface">{template.title}</h1>
            <p className="md-body-large mt-3 text-on-surface-variant">{template.description}</p>
          </div>

          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarImage src={template.authorURLImage} alt={template.authorName} />
              <AvatarFallback>{template.authorName.slice(0, 1)}</AvatarFallback>
            </Avatar>
            <div>
              <p className="md-title-small text-on-surface">{template.authorName}</p>
              <a
                href={template.authorGithub}
                target="_blank"
                rel="noreferrer"
                className="md-body-medium text-primary"
              >
                View author
              </a>
            </div>
          </div>

          <div className="grid gap-2">
            <Button onClick={actions.download} disabled={actions.isDownloading} className="hidden nav:inline-flex">
              {actions.isDownloading ? (
                <Icon name="progress_activity" className="animate-spin" />
              ) : (
                <Icon name="download" />
              )}
              Download ZIP
            </Button>
            <Button variant="outlined" onClick={actions.openPreview}>
              <Icon name="open_in_new" />
              Open live preview
            </Button>
            <Button variant="outlined" onClick={() => iframeRef.current?.requestFullscreen()}>
              <Icon name="fullscreen" />
              Fullscreen
            </Button>
            <Button variant="outlined" onClick={actions.copy}>
              <Icon name={actions.isCopied ? "check" : "content_copy"} />
              Copy HTML
            </Button>
            <Button variant="text" onClick={actions.openSource}>
              <Icon name="code" />
              View source
            </Button>
            {actions.status ? (
              <p className="md-body-small text-on-surface-variant">{actions.status}</p>
            ) : null}
          </div>

          <div className="rounded-extra-large bg-surface-container p-5">
            <h2 className="md-title-medium text-on-surface">How to use this template</h2>
            <ol className="md-body-medium mt-3 list-decimal space-y-2 pl-5 text-on-surface-variant">
              <li>Click Download ZIP to get the HTML, CSS, and assets.</li>
              <li>
                Unzip the folder and open <code className="text-on-surface">index.html</code> in your
                browser.
              </li>
              <li>Edit the copy, colors, and images to match your project.</li>
              <li>Host the folder on GitHub Pages, Netlify, Vercel, or any static server.</li>
            </ol>
          </div>
        </aside>
      </div>

      <Fab
        icon={actions.isDownloading ? "progress_activity" : "download"}
        label="Download ZIP"
        onClick={actions.download}
        className="nav:hidden"
      />
    </div>
  );
}
