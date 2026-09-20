import JSZip from "jszip";

const HOW_TO_USE = `How to use this template

1. Unzip this folder.
2. Open index.html in your browser to preview the design.
3. Edit the HTML and CSS to match your brand, copy, and images.
4. Deploy the folder to any static host (GitHub Pages, Netlify, Vercel, or your own server).

No build step is required. These templates are plain HTML, CSS, and assets.
`;

export async function downloadTemplate(template: ITemplate) {
  const zip = new JSZip();
  const folder = zip.folder(template.slug);
  if (!folder) {
    throw new Error("Could not create template archive.");
  }

  folder.file("HOW-TO-USE.txt", HOW_TO_USE);

  const results = await Promise.allSettled(
    template.files.map(async (file) => {
      const response = await fetch(`/templates/${template.slug}/${file}`);
      if (!response.ok) {
        throw new Error(`Failed to fetch ${file}`);
      }
      const blob = await response.blob();
      folder.file(file, blob);
    })
  );

  const failed = results.filter((result) => result.status === "rejected");
  if (failed.length === template.files.length) {
    throw new Error("Could not download template files.");
  }

  const content = await zip.generateAsync({ type: "blob" });
  const url = URL.createObjectURL(content);
  const link = document.createElement("a");
  link.href = url;
  link.download = `${template.slug}.zip`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

export async function copyTemplateHtml(template: ITemplate) {
  const response = await fetch(template.link);
  if (!response.ok) {
    throw new Error("Could not load template HTML.");
  }
  const text = await response.text();
  await navigator.clipboard.writeText(text);
}
