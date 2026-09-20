import { useEffect, useState } from "react";
import { Icon } from "@/components/icon";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/providers/theme-provider";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();
  const [systemDark, setSystemDark] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const sync = () => setSystemDark(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  const isDark = theme === "dark" || (theme === "system" && systemDark);

  return (
    <Button
      variant="text"
      size="icon"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
    >
      <Icon name={isDark ? "light_mode" : "dark_mode"} />
    </Button>
  );
}
