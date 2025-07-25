"use client";

import PreviewAndCode from "@/components/PreviewAndCode";
import TableOfContents from "@/components/TableOfContents";
import {
  basicFlexTabs,
  flexGrowTabs,
  flexWrapTabs,
  centeredFlexTabs,
  betweenFlexTabs,
} from "./codes";
import ComponentFooter from "@/components/ComponentFooter";
import Footer from "@/components/Footer";

const headings = [
  { id: "basic-flex", label: "Basic Flex" },
  { id: "flex-grow", label: "Flex Grow (flex-1)" },
  { id: "flex-wrap", label: "Flex Wrap" },
  { id: "centered-flex", label: "Centered Content" },
  { id: "between-flex", label: "Space Between" },
];

export default function FlexPage() {
  return (
    <div className="flex gap-16">
      <main className="flex-1 min-w-0 overflow-hidden">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">Flex</h1>
          <p className="text-white/70">
            A flexible layout component for arranging elements using CSS
            Flexbox. Perfect for responsive layouts, alignment, and space
            distribution.
          </p>
        </div>

        <div className="space-y-12 mt-10">
          <section id="basic-flex" className="space-y-4 scroll-mt-24">
            <h2 className="text-xl font-semibold">Basic Flex</h2>
            <p className="text-sm text-white/60">
              A simple flex container with gap spacing between items. Perfect
              for buttons, navigation, and horizontal layouts.
            </p>
            <PreviewAndCode codeTabs={basicFlexTabs}>
              <div className="flex gap-4 p-6 bg-neutral-800 border border-white/10 rounded-lg">
                <div className="bg-neutral-700 px-4 py-3 rounded-md text-white text-sm font-medium">
                  Item 1
                </div>
                <div className="bg-neutral-700 px-4 py-3 rounded-md text-white text-sm font-medium">
                  Item 2
                </div>
                <div className="bg-neutral-700 px-4 py-3 rounded-md text-white text-sm font-medium">
                  Item 3
                </div>
              </div>
            </PreviewAndCode>
          </section>

          <section id="flex-grow" className="space-y-4 scroll-mt-24">
            <h2 className="text-xl font-semibold">Flex Grow (flex-1)</h2>
            <p className="text-sm text-white/60">
              Use flex-1 to make an element grow and fill available space.
              Essential for layouts with sidebars and flexible content areas.
            </p>
            <PreviewAndCode codeTabs={flexGrowTabs}>
              <div className="flex gap-4 p-6 bg-neutral-800 border border-white/10 rounded-lg">
                <div className="bg-neutral-700 px-4 py-3 rounded-md text-white text-sm font-medium">
                  Fixed
                </div>
                <div className="flex-1 bg-blue-600 px-4 py-3 rounded-md text-white text-sm font-medium text-center">
                  flex-1 (grows)
                </div>
                <div className="bg-neutral-700 px-4 py-3 rounded-md text-white text-sm font-medium">
                  Fixed
                </div>
              </div>
            </PreviewAndCode>
          </section>

          <section id="flex-wrap" className="space-y-4 scroll-mt-24">
            <h2 className="text-xl font-semibold">Flex Wrap</h2>
            <p className="text-sm text-white/60">
              Allow flex items to wrap to new lines when they don&apos;t fit.
              Perfect for tag lists, button groups, and responsive card layouts.
            </p>
            <PreviewAndCode codeTabs={flexWrapTabs}>
              <div className="flex flex-wrap gap-2 p-6 bg-neutral-800 border border-white/10 rounded-lg">
                <div className="bg-blue-600 px-3 py-2 rounded text-white text-sm">
                  React
                </div>
                <div className="bg-green-600 px-3 py-2 rounded text-white text-sm">
                  Node.js
                </div>
                <div className="bg-purple-600 px-3 py-2 rounded text-white text-sm">
                  GraphQL
                </div>
                <div className="bg-red-600 px-3 py-2 rounded text-white text-sm">
                  TypeScript
                </div>
                <div className="bg-yellow-600 px-3 py-2 rounded text-white text-sm">
                  JavaScript
                </div>
                <div className="bg-indigo-600 px-3 py-2 rounded text-white text-sm">
                  Tailwind
                </div>
              </div>
            </PreviewAndCode>
          </section>

          <section id="centered-flex" className="space-y-4 scroll-mt-24">
            <h2 className="text-xl font-semibold">Centered Content</h2>
            <p className="text-sm text-white/60">
              Use flexbox to perfectly center content both horizontally and
              vertically. Ideal for loading states, empty states, and hero
              sections.
            </p>
            <PreviewAndCode codeTabs={centeredFlexTabs}>
              <div className="flex items-center justify-center h-40 p-6 bg-neutral-800 border border-white/10 rounded-lg">
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-500 rounded-full mb-3 mx-auto"></div>
                  <span className="text-white font-medium">
                    Perfectly Centered
                  </span>
                </div>
              </div>
            </PreviewAndCode>
          </section>

          <section id="between-flex" className="space-y-4 scroll-mt-24">
            <h2 className="text-xl font-semibold">Space Between</h2>
            <p className="text-sm text-white/60">
              Distribute space between elements, perfect for headers, footers,
              and navigation layouts.
            </p>
            <PreviewAndCode codeTabs={betweenFlexTabs}>
              <div className="flex items-center justify-between w-full p-6 bg-neutral-800 border border-white/10 rounded-lg">
                <div className="bg-neutral-700 px-4 py-2 rounded-md">
                  <span className="text-white font-medium">Left Item</span>
                </div>
                <div className="bg-neutral-700 px-4 py-2 rounded-md">
                  <span className="text-white font-medium">Right Item</span>
                </div>
              </div>
            </PreviewAndCode>
          </section>
        </div>
        <ComponentFooter currentComponent="flex" />
        <Footer />
      </main>
      <aside className="w-[280px] shrink-0">
        <div className="sticky top-24 self-start max-h-[calc(100vh-6rem)] overflow-y-auto no-scrollbar">
          <TableOfContents headings={headings} />
        </div>
      </aside>
    </div>
  );
}
