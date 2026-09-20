const author = {
  authorName: "Birusha Ndegeya",
  authorURLImage: "https://avatars.githubusercontent.com/u/142086785?v=4",
  authorGithub: "https://github.com/BirushaNdegeya",
};

export const templates: ITemplate[] = [
  {
    ...author,
    slug: "profile-card",
    title: "Profile Card",
    description:
      "A social profile card with avatar, stats, and a decorative background. Drop in your photo and numbers to use it on a personal site.",
    category: ["cards"],
    link: "/templates/profile-card/index.html",
    github:
      "https://github.com/sofiatechnology/website-templates/tree/main/public/templates/profile-card",
    files: [
      "index.html",
      "index.css",
      "README.md",
      "assets/bg-pattern-bottom.svg",
      "assets/bg-pattern-card.svg",
      "assets/bg-pattern-top.svg",
      "assets/favicon-32x32.png",
      "assets/image-victor.jpg",
      "assets/profile-card.png",
    ],
  },
  {
    ...author,
    slug: "community",
    title: "Community Pricing",
    description:
      "A two-tone pricing card for a community or course. Edit the price, benefits, and call to action to launch a signup page.",
    category: ["cards", "pricing"],
    link: "/templates/community/index.html",
    github:
      "https://github.com/sofiatechnology/website-templates/tree/main/public/templates/community",
    files: [
      "index.html",
      "README.md",
      "css/style.css",
      "assets/favicon-32x32.png",
      "assets/pricing-component.png",
    ],
  },
  {
    ...author,
    slug: "column-preview",
    title: "Column Preview",
    description:
      "A three-column preview card for product categories. Swap the copy and icons to present services, plans, or vehicle types.",
    category: ["cards"],
    link: "/templates/column-preview/index.html",
    github:
      "https://github.com/sofiatechnology/website-templates/tree/main/public/templates/column-preview",
    files: [
      "index.html",
      "README.md",
      "css/style.css",
      "css/style.css.map",
      "sass/_main.scss",
      "sass/style.scss",
      "sass/_variables.scss",
      "assets/column-preview-design.png",
      "assets/favicon-32x32.png",
      "assets/icon-luxury.svg",
      "assets/icon-sedans.svg",
      "assets/icon-suvs.svg",
    ],
  },
  {
    ...author,
    slug: "login-form",
    title: "Login Form",
    description:
      "A centered sign-in screen with email and password fields. Use it as a starting point for an authentication page.",
    category: ["forms"],
    link: "/templates/login-form/index.html",
    github:
      "https://github.com/sofiatechnology/website-templates/tree/main/public/templates/login-form",
    files: ["index.html", "css/style.css", "README.md"],
  },
  {
    ...author,
    slug: "contact-form",
    title: "Contact Form",
    description:
      "A contact card with name, email, and message fields. Connect the form to your own backend or form service.",
    category: ["forms"],
    link: "/templates/contact-form/index.html",
    github:
      "https://github.com/sofiatechnology/website-templates/tree/main/public/templates/contact-form",
    files: ["index.html", "css/style.css", "README.md"],
  },
  {
    ...author,
    slug: "product-card",
    title: "Product Card",
    description:
      "An ecommerce product card with price, rating, and add-to-cart action. Customize the item details for a store or catalog.",
    category: ["cards"],
    link: "/templates/product-card/index.html",
    github:
      "https://github.com/sofiatechnology/website-templates/tree/main/public/templates/product-card",
    files: ["index.html", "css/style.css", "README.md"],
  },
  {
    ...author,
    slug: "newsletter",
    title: "Newsletter Signup",
    description:
      "A compact newsletter capture card. Plug in your mailing list endpoint and start collecting emails.",
    category: ["forms"],
    link: "/templates/newsletter/index.html",
    github:
      "https://github.com/sofiatechnology/website-templates/tree/main/public/templates/newsletter",
    files: ["index.html", "css/style.css", "README.md"],
  },
];

export function getTemplateBySlug(slug: string) {
  return templates.find((template) => template.slug === slug);
}

export function getTemplateCategories() {
  const values = new Set<string>();
  templates.forEach((template) => {
    template.category.forEach((item) => values.add(item));
  });
  return ["all", ...Array.from(values).sort()];
}
