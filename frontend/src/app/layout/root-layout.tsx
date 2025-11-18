import { ThemeProvider } from "../providers/theme-provider"
import { Outlet } from "react-router-dom";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

export default function RootLayout() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 ">
        <Outlet />
      </main>

      <Footer />
    </div>
      </ThemeProvider>
  );
}
