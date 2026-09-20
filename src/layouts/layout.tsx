import Footer from "@/components/footer";
import Header from "@/components/header";
import { Outlet } from "react-router";
import { ThemeProvider } from "@/providers/theme-provider";

export default function Layout() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="flex min-h-screen flex-col bg-background text-foreground">
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
