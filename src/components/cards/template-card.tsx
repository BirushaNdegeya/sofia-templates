import { useRef } from "react";
import { Link } from "react-router";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { Icon } from "@/components/icon";
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
    <article className="overflow-hidden rounded-extra-large bg-surface-container-low">
      <div className="flex items-start justify-between gap-3 p-5">
        <div className="min-w-0">
          <Link to={`/templates/${template.slug}`} className="md-title-medium text-on-surface hover:text-primary">
            {template.title}
          </Link>
          <p className="md-body-medium mt-1 line-clamp-2 text-on-surface-variant">
            {template.description}
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {template.category.map((category) => (
              <span
                key={category}
                className="md-label-small rounded-full bg-secondary-container px-3 py-1 text-on-secondary-container"
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
        className="h-[420px] w-full bg-surface-container-lowest"
        sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
        loading="lazy"
      />

      <div className="flex flex-wrap items-center gap-1 p-3">
        <Button size="sm" variant="filled" onClick={actions.download} disabled={actions.isDownloading}>
          {actions.isDownloading ? (
            <Icon name="progress_activity" className="animate-spin" />
          ) : (
            <Icon name="download" />
          )}
          Download
        </Button>
        <Button size="sm" variant="tonal" asChild>
          <Link to={`/templates/${template.slug}`}>Use template</Link>
        </Button>
        <Button
          size="icon"
          variant="text"
          onClick={actions.openPreview}
          title="Open live preview"
          aria-label="Open live preview"
        >
          <Icon name="open_in_new" />
        </Button>
        <Button
          size="icon"
          variant="text"
          onClick={handleFullscreen}
          title="Fullscreen preview"
          aria-label="Fullscreen preview"
        >
          <Icon name="fullscreen" />
        </Button>
        <Button
          size="icon"
          variant="text"
          onClick={actions.copy}
          title={actions.isCopied ? "HTML copied" : "Copy HTML"}
          aria-label={actions.isCopied ? "HTML copied" : "Copy HTML"}
        >
          <Icon name={actions.isCopied ? "check" : "content_copy"} />
        </Button>
        {actions.status ? (
          <span className="md-body-small text-on-surface-variant">{actions.status}</span>
        ) : null}
      </div>
    </article>
  );
}
