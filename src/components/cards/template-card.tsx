import { useRef } from "react";
import { Link } from "react-router";
import { Check, Copy, Download, ExternalLink, Fullscreen, LoaderCircle } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { useTemplateActions } from "@/hooks/use-template-actions";

export function TemplateCard({ template }: { template: ITemplate }) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const actions = useTemplateActions(template);

  const handleFullscreen = () => {
    iframeRef.current?.requestFullscreen().catch(() => {
      actions.openPreview();
    });
  };

  return (
    <article className="overflow-hidden rounded-xl border border-border bg-card">
      <div className="flex items-start justify-between gap-3 border-b border-border p-4">
        <div className="min-w-0">
          <Link to={`/templates/${template.slug}`} className="font-semibold hover:text-primary">
            {template.title}
          </Link>
          <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">
            {template.description}
          </p>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {template.category.map((category) => (
              <span
                key={category}
                className="rounded-full bg-secondary px-2 py-0.5 text-xs text-secondary-foreground"
              >
                {category}
              </span>
            ))}
          </div>
        </div>
        <a href={template.authorGithub} target="_blank" rel="noreferrer" title={template.authorName}>
          <Avatar>
            <AvatarImage src={template.authorURLImage} alt={template.authorName} />
            <AvatarFallback>{template.authorName.slice(0, 1)}</AvatarFallback>
          </Avatar>
        </a>
      </div>

      <iframe
        ref={iframeRef}
        src={template.link}
        title={`${template.title} preview`}
        className="h-[420px] w-full bg-white"
        sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
        loading="lazy"
      />

      <div className="flex flex-wrap items-center gap-2 border-t border-border p-3">
        <Button size="sm" onClick={actions.download} disabled={actions.isDownloading}>
          {actions.isDownloading ? <LoaderCircle className="animate-spin" /> : <Download />}
          Download
        </Button>
        <Button size="sm" variant="outline" asChild>
          <Link to={`/templates/${template.slug}`}>Use template</Link>
        </Button>
        <Button size="sm" variant="outline" onClick={actions.openPreview} title="Open live preview">
          <ExternalLink />
        </Button>
        <Button size="sm" variant="outline" onClick={handleFullscreen} title="Fullscreen preview">
          <Fullscreen />
        </Button>
        <Button
          size="sm"
          variant="outline"
          onClick={actions.copy}
          title={actions.isCopied ? "HTML copied" : "Copy HTML"}
        >
          {actions.isCopied ? <Check className="text-green-500" /> : <Copy />}
        </Button>
        {actions.status ? (
          <span className="text-xs text-muted-foreground">{actions.status}</span>
        ) : null}
      </div>
    </article>
  );
}
