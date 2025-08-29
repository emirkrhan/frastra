"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export const menuItems = [
  {
    title: "Get Started",
    items: [
      {
        id: "introduction",
        label: "Introduction",
        path: "/get-started/introduction",
      },
      {
        id: "installation",
        label: "Installation",
        path: "/get-started/installation",
      },
      {
        id: "typography",
        label: "Typography",
        path: "/get-started/typography",
      },
    ],
  },
  {
    title: "Components",
    items: [
      {
        id: 1,
        label: "Accordion",
        path: "/components/accordion"
      },
      { id: 2, label: "Alert", path: "/components/alert" },
      { id: 3, label: "Avatar", path: "/components/avatar" },
      { id: 4, label: "Badge", path: "/components/badge" },
      {
        id: "breadcrumb",
        label: "Breadcrumb",
        path: "/components/breadcrumb",
      },
      { id: 5, label: "Button", path: "/components/button" },
      { id: 6, label: "Card", path: "/components/card" },
      { id: 7, label: "Checkbox", path: "/components/checkbox" },
      {
        id: 8,
        label: "Dropdown Menu",
        path: "/components/dropdown-menu",
      },
      {
        id: "footer",
        label: "Footer",
        path: "/components/footer",
      },
      { id: 9, label: "Input", path: "/components/input" },
      { id: 24, label: "List", path: "/components/list" },
      { id: 11, label: "Modal", path: "/components/modal" },
      { id: 12, label: "Navbar", path: "/components/navbar" },
      {
        id: 13,
        label: "Pagination",
        path: "/components/pagination",
      },
      {
        id: 14,
        label: "Radio Group",
        path: "/components/radio-group",
      },
      {
        id: "select",
        label: "Select",
        path: "/components/select",
      },
      {
        id: 16,
        label: "Skeleton",
        path: "/components/skeleton",
      },
      { id: 17, label: "Spiiner", path: "/components/spinner" },
      { id: 18, label: "Switch", path: "/components/switch" },
        { id: 25, label: "Table", path: "/components/table" },
      { id: 19, label: "Tabs", path: "/components/tabs" },
      { id: 20, label: "Textarea", path: "/components/textarea" },
      { id: 21, label: "Toast", path: "/components/toast" },
      { id: 22, label: "Tooltip", path: "/components/tooltip" },
    ],
  },
  {
    title: "Layout",
    items: [
      { id: "box", label: "Box", path: "/layout/box" },
      { id: "flex", label: "Flex", path: "/layout/flex" },
      { id: "grid", label: "Grid", path: "/layout/grid" },
      {
        id: "aspect-ratio",
        label: "Aspect Ratio",
        path: "/layout/aspect-ratio",
      },
    ],
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed top-16 left-0 h-[calc(100vh-4rem)] w-64 border-r border-neutral-800/50 overflow-y-auto no-scrollbar">
      <nav className="p-4">
        {menuItems.map((section) => (
          <div key={section.title} className="mb-6">
            <h2 className="px-2 mb-3 text-xs font-bold tracking-wider text-white uppercase">
              {section.title}
            </h2>
            <ul className="space-y-0.5">
              {section.items.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.path}
                    className={`flex items-center gap-1 rounded-md px-2 py-1.5 text-[12px] font-medium transition-colors duration-150 ${
                      pathname === item.path
                        ? "bg-neutral-800 text-white"
                        : "text-neutral-400 hover:bg-neutral-900 hover:text-white"
                    }`}
                  >
                    <span>{item.label}</span>
                    {item.badge && (
                      <span className="ml-2 rounded-full border border-green-600 bg-green-500/10 px-2 py-[1px] text-[8px] font-semibold text-green-600">
                        {item.badge}
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  );
}
