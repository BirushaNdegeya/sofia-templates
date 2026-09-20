import Footer from "@/components/footer";
import Header from "@/components/header";
import NavRail from "@/components/nav-rail";
import BottomNav from "@/components/bottom-nav";
import { Outlet } from "react-router";
import { ThemeProvider } from "@/providers/theme-provider";

export default function Layout() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <div className="flex min-h-screen flex-col bg-surface text-on-surface">
        <Header />
        <div className="flex flex-1">
          <NavRail />
          <div className="flex min-w-0 flex-1 flex-col bg-surface">
            <main className="flex-1 pb-24 nav:pb-0">
              <Outlet />
            </main>
            <Footer />
          </div>
        </div>
        <BottomNav />
      </div>
    </ThemeProvider>
  );
}
