import { useRef } from "react";
import { Link, useParams } from "react-router";
import { Check, Copy, Download, ExternalLink, Fullscreen, Github, LoaderCircle } from "lucide-react";
import { getTemplateBySlug } from "@/assets/data";
import { useTemplateActions } from "@/hooks/use-template-actions";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export default function TemplateDetail() {
  const { slug } = useParams();
  const template = slug ? getTemplateBySlug(slug) : undefined;

  if (!template) {
    return (
      <div className="mx-auto max-w-3xl px-6 py-20 text-center">
        <h1 className="text-3xl font-bold">Template not found</h1>
        <p className="mt-3 text-muted-foreground">
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
    <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
      <Link to="/templates" className="text-sm text-muted-foreground hover:text-foreground">
        ← All templates
      </Link>

      <div className="mt-6 grid gap-8 lg:grid-cols-[1.4fr_0.8fr]">
        <div>
          <div className="overflow-hidden rounded-xl border border-border">
            <iframe
              ref={iframeRef}
              src={template.link}
              title={`${template.title} preview`}
              className="h-[640px] w-full bg-white"
              sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
            />
          </div>
        </div>

        <aside className="space-y-6">
          <div>
            <div className="flex flex-wrap gap-1.5">
              {template.category.map((category) => (
                <span
                  key={category}
                  className="rounded-full bg-secondary px-2 py-0.5 text-xs text-secondary-foreground"
                >
                  {category}
                </span>
              ))}
            </div>
            <h1 className="mt-3 text-3xl font-bold tracking-tight">{template.title}</h1>
            <p className="mt-3 text-muted-foreground">{template.description}</p>
          </div>

          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarImage src={template.authorURLImage} alt={template.authorName} />
              <AvatarFallback>{template.authorName.slice(0, 1)}</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium">{template.authorName}</p>
              <a
                href={template.authorGithub}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-primary hover:underline"
              >
                View author
              </a>
            </div>
          </div>

          <div className="grid gap-2">
            <Button onClick={actions.download} disabled={actions.isDownloading}>
              {actions.isDownloading ? <LoaderCircle className="animate-spin" /> : <Download />}
              Download ZIP
            </Button>
            <Button variant="outline" onClick={actions.openPreview}>
              <ExternalLink />
              Open live preview
            </Button>
            <Button variant="outline" onClick={() => iframeRef.current?.requestFullscreen()}>
              <Fullscreen />
              Fullscreen
            </Button>
            <Button variant="outline" onClick={actions.copy}>
              {actions.isCopied ? <Check className="text-green-500" /> : <Copy />}
              Copy HTML
            </Button>
            <Button variant="outline" onClick={actions.openSource}>
              <Github />
              View source
            </Button>
            {actions.status ? (
              <p className="text-sm text-muted-foreground">{actions.status}</p>
            ) : null}
          </div>

          <div className="rounded-xl border border-border p-4">
            <h2 className="font-semibold">How to use this template</h2>
            <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm text-muted-foreground">
              <li>Click Download ZIP to get the HTML, CSS, and assets.</li>
              <li>
                Unzip the folder and open <code className="text-foreground">index.html</code> in your
                browser.
              </li>
              <li>Edit the copy, colors, and images to match your project.</li>
              <li>Host the folder on GitHub Pages, Netlify, Vercel, or any static server.</li>
            </ol>
          </div>
        </aside>
      </div>
    </div>
  );
}
