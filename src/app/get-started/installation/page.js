import PreviewAndCode from '@/components/PreviewAndCode'
import TableOfContents from '@/components/TableOfContents'
import ComponentFooter from '@/components/ComponentFooter'
import Footer from '@/components/Footer'
import { InlineCode } from '@/components/InlineCode'

const headings = [
  { id: 'next-js-setup', label: 'Next.js Setup' },
  { id: 'tailwind-css-setup', label: 'Tailwind CSS v4 Setup' },
  { id: 'dependencies', label: 'Install Dependencies' },
]

const nextjsCodeTabs = [
  {
    label: 'Terminal',
    language: 'bash',
    code: `npx create-next-app@latest my-frastra-app --typescript --eslint --app
cd my-frastra-app`
  }
]

const tailwindInstallCodeTabs = [
  {
    label: 'Terminal',
    language: 'bash',
    code: `npm install tailwindcss @tailwindcss/postcss postcss`
  }
]

const postcssConfigCodeTabs = [
  {
    label: 'postcss.config.mjs',
    language: 'javascript',
    code: `const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;`
  }
]

const cssImportCodeTabs = [
  {
    label: 'globals.css',
    language: 'css',
    code: `@import "tailwindcss";

:root {
  --background: #000000;
  --foreground: #ffffff;
}

html {
  scroll-behavior: smooth;
}

body {
  background: var(--background);
  color: var(--foreground);
  font-family: Arial, Helvetica, sans-serif;
}

.no-scrollbar {
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.no-scrollbar::-webkit-scrollbar {
  display: none;
}`
  }
]

const dependenciesCodeTabs = [
  {
    label: 'Terminal',
    language: 'bash',
    code: `npm install framer-motion @heroicons/react uuid`
  }
]

const testCodeTabs = [
  {
    label: 'page.js',
    language: 'jsx',
    code: `export default function Home() {
  return (
    <h1 className="text-3xl font-bold underline text-white">
      Hello Frastra!
    </h1>
  )
}`
  }
]

export default function InstallationPage() {
  return (
    <div className='flex gap-16'>
      <main className='flex-1 min-w-0 overflow-hidden'>
        <div className='space-y-4'>
          <h1 className='text-3xl font-bold'>Installation</h1>
          <p className='text-white/70'>
            Get started with Frastra using the latest <InlineCode>Tailwind CSS v4</InlineCode> and <InlineCode>Next.js 15</InlineCode>. Follow these steps to set up your development environment.
          </p>
        </div>

        <div className='space-y-12 mt-10'>
          <section id='next-js-setup' className='space-y-4 scroll-mt-24'>
            <h2 className='text-xl font-semibold'>Create Next.js Project</h2>
            <p className='text-white/70'>
              Create a new <InlineCode>Next.js 15</InlineCode> project with TypeScript and ESLint. Note that we don&apos;t include the <InlineCode>--tailwind</InlineCode> flag since we&apos;ll install the latest version manually.
            </p>
            <PreviewAndCode
              preview={false}
              codeTabs={nextjsCodeTabs}
            />
            <p className='text-sm text-white/60'>
              This creates a new Next.js project with TypeScript, ESLint, and the App Router structure.
            </p>
          </section>

          <section id='tailwind-css-setup' className='space-y-6 scroll-mt-24'>
            <h2 className='text-xl font-semibold'>Tailwind CSS v4 Setup</h2>
            
            <div className='space-y-4'>
              <h3 className='text-lg font-medium'>1. Install Tailwind CSS v4</h3>
              <p className='text-white/70'>
                Install the latest <InlineCode>Tailwind CSS v4</InlineCode> with the new PostCSS plugin architecture.
              </p>
              <PreviewAndCode
                preview={false}
                codeTabs={tailwindInstallCodeTabs}
              />
            </div>

            <div className='space-y-4'>
              <h3 className='text-lg font-medium'>2. Configure PostCSS</h3>
              <p className='text-white/70'>
                Create a <InlineCode>postcss.config.mjs</InlineCode> file and add the Tailwind PostCSS plugin. This replaces the old <InlineCode>tailwind.config.js</InlineCode> approach.
              </p>
              <PreviewAndCode
                preview={false}
                codeTabs={postcssConfigCodeTabs}
              />
            </div>

            <div className='space-y-4'>
              <h3 className='text-lg font-medium'>3. Import Tailwind CSS</h3>
              <p className='text-white/70'>
                Update your <InlineCode>globals.css</InlineCode> file with the new v4 import syntax and add Frastra&apos;s design system variables.
              </p>
              <PreviewAndCode
                preview={false}
                codeTabs={cssImportCodeTabs}
              />
              <p className='text-sm text-white/60'>
                The new <InlineCode>&quot;@import tailwindcss;&quot;</InlineCode> syntax replaces the old three-line directive approach.
              </p>
            </div>

            <div className='space-y-4'>
              <h3 className='text-lg font-medium'>4. Test Your Setup</h3>
              <p className='text-white/70'>
                Test your Tailwind setup by adding some utility classes to your main page.
              </p>
              <PreviewAndCode
                preview={false}
                codeTabs={testCodeTabs}
              />
              <p className='text-sm text-white/60'>
                Run <InlineCode>npm run dev</InlineCode> and you should see styled text with the new Tailwind v4 setup.
              </p>
            </div>
          </section>

          <section id='dependencies' className='space-y-4 scroll-mt-24'>
            <h2 className='text-xl font-semibold'>Install Frastra Dependencies</h2>
            <p className='text-white/70'>
              Install the essential packages needed for Frastra components. These provide icons, animations, and unique identifiers.
            </p>
            <PreviewAndCode
              preview={false}
              codeTabs={dependenciesCodeTabs}
            />
            <div className='space-y-2 text-sm text-white/60'>
              <p><InlineCode>framer-motion</InlineCode> - Smooth animations and transitions</p>
              <p><InlineCode>@heroicons/react</InlineCode> - Beautiful SVG icons</p>
              <p><InlineCode>uuid</InlineCode> - Unique identifiers for components</p>
            </div>
            
            <div className='border-l-2 border-white/50 pl-4 py-2 mt-6'>
              <p className='text-sm text-white/60'>
                Ready to use Frastra components! You now have a complete setup with Tailwind CSS v4 and all dependencies needed for Frastra components.
              </p>
            </div>
          </section>
        </div>
        
        <ComponentFooter currentComponent='installation' />
        <Footer />
      </main>
      <aside className='w-[280px] shrink-0'>
        <div className='sticky top-24 self-start max-h-[calc(100vh-6rem)] overflow-y-auto no-scrollbar'>
          <TableOfContents headings={headings} />
        </div>
      </aside>
    </div>
  )
} 