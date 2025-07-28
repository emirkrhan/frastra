export const metadata = {
  title: "Frastra - Modern Copy-Paste Next.js Components",
  description: "Build your component library with modern, copy-paste Next.js components. Beautiful, accessible UI components built with React and Tailwind CSS.",
  openGraph: {
    title: "Frastra - Modern Copy-Paste Next.js Components",
    description: "Build your component library with modern, copy-paste Next.js components. Beautiful, accessible UI components built with React and Tailwind CSS.",
  },
  twitter: {
    title: "Frastra - Modern Copy-Paste Next.js Components",
    description: "Build your component library with modern, copy-paste Next.js components. Beautiful, accessible UI components built with React and Tailwind CSS.",
  },
};

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="text-center space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
          Build your component library
        </h1>
        <p className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
          A modern, copy-paste Next.js components. This is not a component library. It&apos;s how you build your component library.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
          <a 
            href="/get-started/introduction"
            className="px-6 py-3 bg-white text-black rounded-lg font-medium hover:bg-white/90 transition-colors"
          >
            Get Started
          </a>
          <a 
            href="/components"
            className="px-6 py-3 bg-white/5 text-white border border-white/10 rounded-lg font-medium hover:bg-white/10 transition-colors"
          >
            Browse Components
          </a>
        </div>
      </div>
      
      <div className="mt-16 grid md:grid-cols-3 gap-8">
        <div className="p-6 rounded-xl border border-white/10 bg-white/5">
          <h3 className="text-lg font-semibold mb-2">Copy & Paste</h3>
          <p className="text-white/70 text-sm">
            No installation required. Just copy the component code and paste it into your project.
          </p>
        </div>
        <div className="p-6 rounded-xl border border-white/10 bg-white/5">
          <h3 className="text-lg font-semibold mb-2">Modern Stack</h3>
          <p className="text-white/70 text-sm">
            Built with Next.js 15, React 19, and Tailwind CSS for the best developer experience.
          </p>
        </div>
        <div className="p-6 rounded-xl border border-white/10 bg-white/5">
          <h3 className="text-lg font-semibold mb-2">Customizable</h3>
          <p className="text-white/70 text-sm">
            Full control over your components. Modify, extend, and adapt them to your needs.
          </p>
        </div>
      </div>
    </div>
  );
}
