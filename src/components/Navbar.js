"use client";

import Link from "next/link";
import { useState, useEffect, useRef, createElement } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Monitor, Contrast } from "lucide-react";

function useOnClickOutside(ref, handler) {
  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
}

const GitHubIcon = (props) => (
  <svg aria-hidden="true" viewBox="0 0 16 16" {...props}>
    <path
      fill="currentColor"
      d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z"
    />
  </svg>
);

const ThemeMenuItem = ({ icon: Icon, label, onClick }) => (
  <button
    onClick={onClick}
    className="flex items-center gap-2 w-full px-2 py-1.5 text-sm text-neutral-300 hover:bg-neutral-700/50 rounded"
  >
    <Icon className="size-4" />
    <span>{label}</span>
  </button>
);

const themeOptions = {
  light: { label: "Light", icon: Sun },
  dark: { label: "Dark", icon: Moon },
  system: { label: "System", icon: Monitor },
};

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  useOnClickOutside(menuRef, () => setIsMenuOpen(false));

  const setTheme = (newTheme) => {
    // In a real app, you would also apply the theme to the document
    console.log(`Setting theme to ${newTheme}`);
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full h-16 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/10 z-50 flex items-center px-6">
      <div className="flex w-full items-center justify-between">
        {/* Left Section: Logo and Nav Links */}
        <div className="flex items-center gap-6 flex-1">
          <Link href="/" className="flex items-center gap-2">
            <svg
              className="h-6 w-6 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5-10-5-10 5z" />
            </svg>
            <span className="font-bold text-white">frastra</span>
          </Link>
          <nav className="hidden md:flex items-center gap-4">
            <Link
              href="/docs"
              className="text-sm text-white/70 hover:text-white transition"
            >
              Docs
            </Link>
            <Link
              href="/components"
              className="text-sm text-white/70 hover:text-white transition"
            >
              Components
            </Link>
          </nav>
        </div>

        {/* Center Section: Search */}
        <div className="hidden lg:flex flex-1 justify-center px-8">
          <div className="relative w-full max-w-md">
            <input
              type="text"
              placeholder="Search documentation..."
              className="w-full bg-neutral-800 border border-neutral-700 rounded-md py-1.5 px-3 pl-10 text-sm text-white placeholder-neutral-400 focus:outline-none focus:border-neutral-500 focus:ring-0"
            />
            <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-gray-400" />
            <div className="absolute right-2 top-1/2 -translate-y-1/2 text-xs text-gray-500 bg-[#0a0a0a] p-1 rounded-sm border border-white/10">
              Ctrl K
            </div>
          </div>
        </div>

        {/* Right Section: GitHub, Theme */}
        <div className="flex items-center gap-2 flex-1 justify-end">
          <a
            href="https://github.com/emirkrhan/frastra"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full text-white hover:bg-neutral-800 transition-colors"
          >
            <span className="sr-only">GitHub</span>
            <GitHubIcon className="size-5" />
          </a>
        </div>
      </div>
    </header>
  );
}
