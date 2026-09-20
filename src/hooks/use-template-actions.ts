import { useState } from "react";
import { copyTemplateHtml, downloadTemplate } from "@/lib/download-template";

export function useTemplateActions(template: ITemplate) {
  const [isDownloading, setIsDownloading] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  const download = async () => {
    setIsDownloading(true);
    setStatus(null);
    try {
      await downloadTemplate(template);
      setStatus("Download started");
    } catch {
      setStatus("Download failed. Try again.");
    } finally {
      setIsDownloading(false);
    }
  };

  const copy = async () => {
    try {
      await copyTemplateHtml(template);
      setIsCopied(true);
      setStatus("HTML copied");
      window.setTimeout(() => setIsCopied(false), 2500);
    } catch {
      setStatus("Could not copy HTML.");
    }
  };

  const openPreview = () => {
    window.open(template.link, "_blank", "noopener,noreferrer");
  };

  const openSource = () => {
    window.open(template.github, "_blank", "noopener,noreferrer");
  };

  return {
    isDownloading,
    isCopied,
    status,
    download,
    copy,
    openPreview,
    openSource,
  };
}
