import TableOfContents from '@/components/TableOfContents'
import ComponentFooter from '@/components/ComponentFooter'
import Footer from '@/components/Footer'
import { InlineCode } from '@/components/InlineCode'

const headings = [
  { id: 'philosophy', label: 'Philosophy' },
  { id: 'copy-paste', label: 'Copy & Paste' },
  { id: 'wysiwyg', label: 'What You See Is What You Get' },
  { id: 'full-control', label: 'Full Control' },
  { id: 'why-frastra', label: 'Why Frastra?' },
]

export default function IntroductionPage() {
  return (
    <div className='flex gap-16'>
      <main className='flex-1 min-w-0 overflow-hidden'>
        <div className='space-y-4'>
          <h1 className='text-3xl font-bold'>Introduction</h1>
          <p className='text-white/70'>
            Frastra is a collection of copy-paste React components built with Next.js and Tailwind CSS. 
            No package installations. No hidden abstractions. Just clean, customizable code.
          </p>
          
          <div className='border-l-2 border-white/50 pl-4 py-2'>
            <p className='text-sm text-white/60'>
              This is not a component library. It&apos;s how you build your component library.
            </p>
          </div>
        </div>

        <div className='space-y-8 mt-10'>
          <section id='philosophy' className='space-y-4 scroll-mt-24'>
            <h2 className='text-xl font-semibold'>Philosophy</h2>
            <p className='text-white/70'>
              You know how most component libraries work: you install a package from npm, import the components, and use them in your app.
            </p>
            <p className='text-white/70'>
              This approach works well until you need to customize a component to fit your design system or require one that isn&apos;t included in the library. Often, you end up <InlineCode>wrapping library components</InlineCode>, <InlineCode>writing workarounds to override styles</InlineCode>, or <InlineCode>mixing components from different libraries</InlineCode> with incompatible APIs.
            </p>
            <p className='text-white/70'>
              Frastra solves this by giving you the actual component code. No black boxes. No mysterious dependencies. Just transparent, modifiable React components.
            </p>
          </section>

          <section id='copy-paste' className='space-y-4 scroll-mt-24'>
            <h2 className='text-xl font-semibold'>Copy & Paste</h2>
            <p className='text-white/70'>
              Frastra components are designed to be copied and pasted directly into your project. No CLI tools, no package installations, no version conflicts.
            </p>
            <div className='space-y-3'>
              <p className='text-white/70'>
                <InlineCode>Simple Process</InlineCode>: Browse the component you need, copy the code, paste it into your project. That&apos;s it.
              </p>
              <p className='text-white/70'>
                <InlineCode>Zero Dependencies</InlineCode>: Each component is self-contained with minimal external dependencies.
              </p>
              <p className='text-white/70'>
                <InlineCode>Instant Ownership</InlineCode>: The moment you paste the code, it becomes yours to modify and extend.
              </p>
            </div>
          </section>

          <section id='wysiwyg' className='space-y-4 scroll-mt-24'>
            <h2 className='text-xl font-semibold'>What You See Is What You Get</h2>
            <p className='text-white/70'>
              Every component preview shows exactly what you&apos;ll get when you copy the code. No hidden state, no missing props, no surprise dependencies.
            </p>
            <div className='space-y-3'>
              <p className='text-white/70'>
                <InlineCode>Identical Code</InlineCode>: The preview and the copyable code are identical - same data, same props, same styling.
              </p>
              <p className='text-white/70'>
                <InlineCode>Complete Examples</InlineCode>: Each component includes realistic data and usage examples.
              </p>
              <p className='text-white/70'>
                <InlineCode>No Surprises</InlineCode>: What you see in the browser is exactly what you&apos;ll get in your project.
              </p>
            </div>
          </section>
          
          <section id='full-control' className='space-y-4 scroll-mt-24'>
            <h2 className='text-xl font-semibold'>Full Control</h2>
            <p className='text-white/70'>
              Unlike traditional component libraries where you&apos;re constrained by the library&apos;s API, Frastra gives you complete control over every aspect of your components.
            </p>
            <div className='space-y-3'>
              <p className='text-white/70'>
                <InlineCode>Source Code Access</InlineCode>: You own the component code completely. Modify, extend, or rebuild as needed.
              </p>
              <p className='text-white/70'>
                <InlineCode>No Version Lock</InlineCode>: Never worry about breaking changes or deprecated APIs from external libraries.
              </p>
              <p className='text-white/70'>
                <InlineCode>Custom Design Systems</InlineCode>: Easily adapt components to match your brand and design requirements.
              </p>
            </div>
          </section>

          <section id='why-frastra' className='space-y-4 scroll-mt-24'>
            <h2 className='text-xl font-semibold'>Why Frastra?</h2>
            <p className='text-white/70'>
              Built for modern React development with the latest technologies and best practices.
            </p>
            <div className='space-y-6 mt-6'>
              <div className='space-y-2'>
                <h3 className='font-medium text-white'>Modern Stack</h3>
                <ul className='space-y-1 text-sm text-white/70'>
                  <li>• Next.js 15 with App Router</li>
                  <li>• React 19 with latest features</li>
                  <li>• Tailwind CSS 4 ready</li>
                  <li>• TypeScript optional</li>
                </ul>
              </div>
              <div className='space-y-2'>
                <h3 className='font-medium text-white'>Developer Experience</h3>
                <ul className='space-y-1 text-sm text-white/70'>
                  <li>• No build tools required</li>
                  <li>• Instant copy-paste workflow</li>
                  <li>• Comprehensive examples</li>
                  <li>• Mobile-first design</li>
                </ul>
              </div>
              <div className='space-y-2'>
                <h3 className='font-medium text-white'>Production Ready</h3>
                <ul className='space-y-1 text-sm text-white/70'>
                  <li>• Accessibility built-in</li>
                  <li>• Performance optimized</li>
                  <li>• Dark mode support</li>
                  <li>• Responsive by default</li>
                </ul>
              </div>
            </div>
            <div className='border-l-2 border-white/50 pl-4 py-2 mt-6'>
              <p className='text-sm text-white/60'>
                Ready to start? Head over to the components section and start building your UI with beautiful, customizable components.
              </p>
            </div>
          </section>
        </div>
        <ComponentFooter currentComponent='introduction' />
        <Footer />
      </main>
      <aside className='w-[280px] shrink-0'>
        <div className='sticky top-24 self-start max-h-[calc(100vh-6rem)] overflow-y-auto no-scrollbar'>
          <TableOfContents headings={headings} />
        </div>
      </aside>
    </div>
  );
} 