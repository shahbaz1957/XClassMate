// src/components/navbar/Navbar.tsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { ModeToggle } from "../theme/mode-toggle";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="
        flex items-center justify-between px-6 py-3 md:py-4 shadow max-w-5xl rounded-full mx-auto w-full 
        bg-white dark:bg-[#242420] 
        text-gray-900 dark:text-gray-100
        transition-colors mt-3
      "
    >
      <Link to="/" className="flex items-center ">
        {/* Light mode logo */}
        <img
          src="/logo.png"
          alt="Logo Light"
          className="h-[35px] w-auto object-contain rounded-full dark:hidden"
        />

        {/* Dark mode logo */}
        <img
          src="/logo.png"
          alt="Logo Dark"
          className="h-[35px] w-auto object-contain rounded-full hidden dark:block"
        />

        {/* Brand Name */}
        <span className="text-xl font-semibold text-cyan-500 dark:text-green-500">
          XClassmate
        </span>
      </Link>

      <nav
        className={`
          max-md:absolute max-md:top-0 max-md:left-0
          max-md:overflow-hidden flex items-center justify-center 
          transition-[width] bg-white/50 backdrop-blur 
          dark:bg-gray-900/50 flex-col md:flex-row gap-8 text-sm font-normal
          ${open ? "max-md:w-full h-full" : "max-md:w-0 h-full"}
        `}
      >
        <Link to="#" className="hover:text-cyan-600">
          Products
        </Link>
        <Link to="#" className="hover:text-cyan-600">
          Customer Stories
        </Link>
        <Link to="#" className="hover:text-cyan-600">
          Pricing
        </Link>
        <Link to="#" className="hover:text-cyan-600">
          Docs
        </Link>

        <button className="md:hidden" onClick={() => setOpen(false)}>
          ✖
        </button>
      </nav>

      <div className="flex items-center gap-4">
        <ModeToggle />

        <Link
          to="/signup"
          className="hidden md:flex bg-cyan-600 text-white px-5 py-2 rounded-full text-sm"
        >
          Sign up
        </Link>

        <button className="md:hidden" onClick={() => setOpen(true)}>
          ☰
        </button>
      </div>
    </header>
  );
}
