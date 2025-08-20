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

// Tüm aranabilir içerikler
const searchableItems = [
  // Get Started
  { id: "introduction", label: "Introduction", path: "/get-started/introduction", category: "Get Started" },
  { id: "installation", label: "Installation", path: "/get-started/installation", category: "Get Started" },
  { id: "typography", label: "Typography", path: "/get-started/typography", category: "Get Started" },
  
  // Components
  { id: "accordion", label: "Accordion", path: "/components/accordion", category: "Components" },
  { id: "alert", label: "Alert", path: "/components/alert", category: "Components" },
  { id: "avatar", label: "Avatar", path: "/components/avatar", category: "Components" },
  { id: "badge", label: "Badge", path: "/components/badge", category: "Components" },
  { id: "breadcrumb", label: "Breadcrumb", path: "/components/breadcrumb", category: "Components" },
  { id: "button", label: "Button", path: "/components/button", category: "Components" },
  { id: "card", label: "Card", path: "/components/card", category: "Components" },
  { id: "checkbox", label: "Checkbox", path: "/components/checkbox", category: "Components" },
  { id: "dropdown", label: "Dropdown Menu", path: "/components/dropdown-menu", category: "Components" },
  { id: "footer", label: "Footer", path: "/components/footer", category: "Components" },
  { id: "input", label: "Input", path: "/components/input", category: "Components" },
  { id: "list", label: "List", path: "/components/list", category: "Components" },
  { id: "modal", label: "Modal", path: "/components/modal", category: "Components" },
  { id: "navbar", label: "Navbar", path: "/components/navbar", category: "Components" },
  { id: "pagination", label: "Pagination", path: "/components/pagination", category: "Components" },
  { id: "radio", label: "Radio Group", path: "/components/radio-group", category: "Components" },
  { id: "select", label: "Select", path: "/components/select", category: "Components" },
  { id: "skeleton", label: "Skeleton", path: "/components/skeleton", category: "Components" },
  { id: "loader", label: "Loader", path: "/components/spinner", category: "Components" },
  { id: "switch", label: "Switch", path: "/components/switch", category: "Components" },
  { id: "table", label: "Table", path: "/components/table", category: "Components" },
  { id: "tabs", label: "Tabs", path: "/components/tabs", category: "Components" },
  { id: "textarea", label: "Textarea", path: "/components/textarea", category: "Components" },
  { id: "toast", label: "Toast", path: "/components/toast", category: "Components" },
  { id: "tooltip", label: "Tooltip", path: "/components/tooltip", category: "Components" },
  
  // Layout
  { id: "box", label: "Box", path: "/layout/box", category: "Layout" },
  { id: "flex", label: "Flex", path: "/layout/flex", category: "Layout" },
  { id: "grid", label: "Grid", path: "/layout/grid", category: "Layout" },
  { id: "aspect-ratio", label: "Aspect Ratio", path: "/layout/aspect-ratio", category: "Layout" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVersionDropdownOpen, setIsVersionDropdownOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const menuRef = useRef(null);
  const versionRef = useRef(null);
  const searchRef = useRef(null);
  useOnClickOutside(menuRef, () => setIsMenuOpen(false));
  useOnClickOutside(versionRef, () => setIsVersionDropdownOpen(false));
  useOnClickOutside(searchRef, () => setIsSearchOpen(false));

  const setTheme = (newTheme) => {
    // In a real app, you would also apply the theme to the document
    console.log(`Setting theme to ${newTheme}`);
    setIsMenuOpen(false);
  };

  // Arama fonksiyonu - boş query'de tüm itemları göster
  const filteredItems = searchQuery === "" 
    ? searchableItems 
    : searchableItems.filter(item =>
        item.label.toLowerCase().includes(searchQuery.toLowerCase())
      );

  // Klavye kısayolları
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
      if (e.key === 'Escape') {
        setIsSearchOpen(false);
        setSearchQuery("");
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
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
            <img 
              src="/logo.png" 
              alt="Frastra Logo" 
              className="h-5.5 w-auto"
            />
          </Link>
          <nav className="hidden md:flex items-center gap-4">
            <Link
              href="/get-started/introduction"
              className="text-sm text-white/70 hover:text-white transition"
            >
              Docs
            </Link>
            <Link
              href="/components/accordion"
              className="text-sm text-white/70 hover:text-white transition"
            >
              Components
            </Link>
            <div className="relative" ref={versionRef}>
              <button
                onClick={() => setIsVersionDropdownOpen(!isVersionDropdownOpen)}
                className="inline-flex items-center rounded-full cursor-pointer bg-neutral-800 px-2.5 py-1 text-xs font-semibold text-white/80 hover:text-white hover:border-white/20 transition-colors"
              >
                v1.1.0
              </button>
              
              <div
                className={`transition-all duration-200 ease-out origin-top absolute left-0 mt-1.5 w-32 rounded-xl shadow-lg bg-neutral-800 ring-1 ring-white/5 focus:outline-none z-50 p-1 ${
                  isVersionDropdownOpen
                    ? 'opacity-100 scale-100'
                    : 'opacity-0 scale-95 pointer-events-none'
                }`}
              >
                <button className="group flex w-full items-center rounded-md px-2 py-1.5 text-sm text-white/80 hover:bg-white/5 hover:text-white transition-colors">
                  <div className="mr-2 size-2 bg-green-400 rounded-full animate-pulse"></div>
                  v1.1.0
                </button>
              </div>
            </div>
          </nav>
        </div>

        {/* Center Section: Search */}
        <div className="hidden lg:flex flex-1 justify-center px-8">
          <div className="relative w-full max-w-md">
            <button
              onClick={() => setIsSearchOpen(true)}
              className="w-full bg-neutral-800 border border-neutral-700 rounded-md py-1.5 px-3 pl-10 text-sm text-neutral-400 hover:border-neutral-500 transition-colors text-left"
            >
              Search documentation...
            </button>
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

    {/* Search Modal */}
    <AnimatePresence>
      {isSearchOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50"
          onClick={() => setIsSearchOpen(false)}
        >
          <motion.div 
            ref={searchRef}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="relative w-full max-w-lg mx-4 bg-neutral-900 border border-white/10 text-white rounded-xl shadow-xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
          {/* Search Input */}
          <div className="flex items-center px-4 py-3 border-b border-white/10">
            <MagnifyingGlassIcon className="size-4 text-white/60 mr-3" />
            <input
              type="text"
              placeholder="Search documentation..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 bg-transparent text-white placeholder-white/60 outline-none text-sm"
              autoFocus
            />
            <div className="text-xs text-white/40 bg-white/5 px-1.5 py-0.5 rounded border border-white/10">
              ESC
            </div>
          </div>

          {/* Search Results */}
          <div className="h-80 overflow-y-auto">
            {filteredItems.length > 0 ? (
              <div className="p-1">
                {["Get Started", "Components", "Layout"].map(category => {
                  const categoryItems = filteredItems.filter(item => item.category === category);
                  if (categoryItems.length === 0) return null;
                  
                  return (
                    <div key={category} className="mb-2">
                      <div className="px-3 py-2 text-xs text-white/40 uppercase tracking-wider font-medium">
                        {category}
                      </div>
                      {categoryItems.map(item => (
                        <Link
                          key={item.id}
                          href={item.path}
                          onClick={() => {
                            setIsSearchOpen(false);
                            setSearchQuery("");
                          }}
                          className="flex items-center px-3 py-2 text-sm text-white/80 hover:bg-white/5 hover:text-white transition-colors rounded-md mx-1 group"
                        >
                          <div className="flex items-center gap-3 flex-1">
                            <div className="w-6 h-6 rounded-md bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                              <div className="w-2 h-2 rounded-full bg-white/40 group-hover:bg-white/60"></div>
                            </div>
                            <div className="flex-1">
                              <div className="font-medium">{item.label}</div>
                              <div className="text-xs text-white/40 group-hover:text-white/50">{item.path}</div>
                            </div>
                          </div>
                          <svg className="w-4 h-4 text-white/30 group-hover:text-white/50 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      ))}
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="p-4 text-center text-white/60">
                <div className="text-sm">No results found</div>
              </div>
            )}
          </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
    </>
  );
}
