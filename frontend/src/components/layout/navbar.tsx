import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "../../components/mode-toggle"
export default function Navbar() {
  return (
    <header className="border-b ">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        {/* Logo */}
        <Link to="/" className="text-xl font-semibold text-amber-700">
          MyApp
        </Link>

        {/* Nav Links */}
        <nav className="hidden md:flex gap-6 text-red-700">
          <Link to="/" className="hover:text-primary transition">Home</Link>
          <Link to="/login" className="hover:text-primary transition">Login</Link>
          <Link to="/signup" className="hover:text-primary transition">Signup</Link>
          <ModeToggle />
        </nav>

        {/* CTA Button */}
        <Link to="/login" className="md:hidden">
          <Button size="sm">Login</Button>
        </Link>
      </div>
    </header>
  );
}
