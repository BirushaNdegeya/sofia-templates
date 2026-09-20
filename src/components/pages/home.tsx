import Hero from "@/components/hero";
import HowItWorks from "@/components/how-it-works";
import FeaturedTemplates from "@/components/featured-templates";
import { Fab } from "@/components/ui/fab";

export default function Home() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <FeaturedTemplates />
      <Fab to="/templates" icon="grid_view" label="Browse" className="nav:hidden" />
    </>
  );
}
