// Basic Grid Component
const basicGridComponent = `export function BasicGrid() {
  return (
    <div className="grid grid-cols-2 gap-4 p-4 bg-neutral-800 border border-white/10 rounded-lg">
      <div className="bg-neutral-700 p-3 rounded-md text-white text-sm text-center">Grid Item 1</div>
      <div className="bg-neutral-700 p-3 rounded-md text-white text-sm text-center">Grid Item 2</div>
      <div className="bg-neutral-700 p-3 rounded-md text-white text-sm text-center">Grid Item 3</div>
      <div className="bg-neutral-700 p-3 rounded-md text-white text-sm text-center">Grid Item 4</div>
    </div>
  )
}`

const basicGridUsage = `// 2-column layout
<div className="grid grid-cols-2 gap-4">
  <div>Card 1</div>
  <div>Card 2</div>
</div>

// Equal height cards
<div className="grid grid-cols-2 gap-6">
  <div className="bg-white p-6 rounded-lg shadow">
    <h3>Feature 1</h3>
    <p>Description here</p>
  </div>
  <div className="bg-white p-6 rounded-lg shadow">
    <h3>Feature 2</h3>
    <p>Longer description that makes this card taller</p>
  </div>
</div>`

// Three Column Grid Component
const threeColGridComponent = `export function ThreeColumnGrid() {
  return (
    <div className="grid grid-cols-3 gap-4 p-4 bg-neutral-800 border border-white/10 rounded-lg">
      <div className="bg-neutral-700 p-3 rounded-md text-white text-sm text-center">Item 1</div>
      <div className="bg-neutral-700 p-3 rounded-md text-white text-sm text-center">Item 2</div>
      <div className="bg-neutral-700 p-3 rounded-md text-white text-sm text-center">Item 3</div>
    </div>
  )
}`

const threeColGridUsage = `// Product grid
<div className="grid grid-cols-3 gap-6">
  <ProductCard />
  <ProductCard />
  <ProductCard />
</div>

// Feature showcase
<div className="grid grid-cols-3 gap-8">
  <div className="text-center">
    <Icon className="w-12 h-12 mx-auto mb-4" />
    <h3>Fast</h3>
    <p>Lightning fast performance</p>
  </div>
  <div className="text-center">
    <Icon className="w-12 h-12 mx-auto mb-4" />
    <h3>Secure</h3>
    <p>Bank-level security</p>
  </div>
  <div className="text-center">
    <Icon className="w-12 h-12 mx-auto mb-4" />
    <h3>Reliable</h3>
    <p>99.9% uptime guarantee</p>
  </div>
</div>`

// Responsive Grid Component
const responsiveGridComponent = `export function ResponsiveGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4 bg-neutral-800 border border-white/10 rounded-lg">
      <div className="bg-neutral-700 p-3 rounded-md text-white text-sm text-center">Item 1</div>
      <div className="bg-neutral-700 p-3 rounded-md text-white text-sm text-center">Item 2</div>
      <div className="bg-neutral-700 p-3 rounded-md text-white text-sm text-center">Item 3</div>
      <div className="bg-neutral-700 p-3 rounded-md text-white text-sm text-center">Item 4</div>
    </div>
  )
}`

const responsiveGridUsage = `// Standard responsive grid with Tailwind breakpoints
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
  <Card />
  <Card />
  <Card />
  <Card />
</div>

// CSS Grid auto-fit (truly container responsive)
<div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6">
  <div className="bg-white p-6 rounded-lg shadow">Product 1</div>
  <div className="bg-white p-6 rounded-lg shadow">Product 2</div>
  <div className="bg-white p-6 rounded-lg shadow">Product 3</div>
</div>

// Different breakpoint combinations
<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
  <article className="bg-white p-6 rounded-lg shadow">
    <h2>Blog Post Title</h2>
    <p>Post excerpt...</p>
  </article>
</div>`

export const basicGridTabs = [
  { label: "Component", code: basicGridComponent },
  { label: "Usage", code: basicGridUsage },
]

export const threeColGridTabs = [
  { label: "Component", code: threeColGridComponent },
  { label: "Usage", code: threeColGridUsage },
]

export const responsiveGridTabs = [
  { label: "Component", code: responsiveGridComponent },
  { label: "Usage", code: responsiveGridUsage },
] 