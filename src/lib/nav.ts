export type Destination = {
  to: string;
  label: string;
  icon: string;
  end?: boolean;
};

export const destinations: Destination[] = [
  { to: "/", label: "Home", icon: "home", end: true },
  { to: "/templates", label: "Templates", icon: "grid_view" },
  { to: "/about", label: "How to use", icon: "menu_book" },
];
