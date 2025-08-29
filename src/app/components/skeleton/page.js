"use client";

import PreviewAndCode from "@/components/PreviewAndCode";
import TableOfContents from "@/components/TableOfContents";
import ComponentFooter from "@/components/ComponentFooter";
import Footer from "@/components/Footer";
import { Skeleton } from "@/components/skeleton/Skeleton";
import {
  simpleSkeletonTabs,
  cardSkeletonTabs,
} from "./codes";

const headings = [
  { id: "simple", label: "Simple" },
  { id: "card", label: "Card" },
  { id: "list", label: "List" },
];

export default function SkeletonPage() {
  return (
    <div className="flex gap-16">
      <main className="flex-1 min-w-0 overflow-hidden">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">Skeleton</h1>
          <p className="text-white/70">
            Use to show a placeholder of the UI to the user while content is
            loading.
          </p>
        </div>

        <div className="space-y-8 mt-10">
          <section id="simple" className="space-y-4 scroll-mt-24">
            <h2 className="text-xl font-semibold">Usage</h2>
            <p className="text-white/70 text-sm">
              Basic skeleton loader for simple text content.
            </p>
            <PreviewAndCode codeTabs={simpleSkeletonTabs} preview={false}>
              <div className="w-full max-w-md">
                <Skeleton />
              </div>
            </PreviewAndCode>
          </section>

          <section id="simple" className="space-y-4 scroll-mt-24">
            <h2 className="text-xl font-semibold">Simple</h2>
            <p className="text-white/70 text-sm">
              Basic skeleton loader for simple text content.
            </p>
            <PreviewAndCode codeTabs={cardSkeletonTabs}>
              <Skeleton className="w-16 h-16 rounded-full" />
            </PreviewAndCode>
          </section>

        </div>

        <ComponentFooter currentComponent="skeleton" />
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
