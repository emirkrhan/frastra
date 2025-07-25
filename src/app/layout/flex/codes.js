// Basic Flex Component
const basicFlexComponent = `export function BasicFlex() {
  return (
    <div className="flex gap-4 p-6 bg-neutral-800 border border-white/10 rounded-lg">
      <div className="bg-neutral-700 px-4 py-3 rounded-md text-white text-sm font-medium">Item 1</div>
      <div className="bg-neutral-700 px-4 py-3 rounded-md text-white text-sm font-medium">Item 2</div>
      <div className="bg-neutral-700 px-4 py-3 rounded-md text-white text-sm font-medium">Item 3</div>
    </div>
  )
}`

const basicFlexUsage = `// Basic horizontal layout
<div className="flex gap-4">
  <button>Button 1</button>
  <button>Button 2</button>
  <button>Button 3</button>
</div>

// Navigation menu
<div className="flex gap-8">
  <a href="/">Home</a>
  <a href="/about">About</a>
  <a href="/contact">Contact</a>
</div>

// Vertical layout
<div className="flex flex-col gap-4">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>`

// Flex-1 (Grow) Component
const flexGrowComponent = `export function FlexGrow() {
  return (
    <div className="flex gap-4 p-6 bg-neutral-800 border border-white/10 rounded-lg">
      <div className="bg-neutral-700 px-4 py-3 rounded-md text-white text-sm font-medium">Fixed</div>
      <div className="flex-1 bg-blue-600 px-4 py-3 rounded-md text-white text-sm font-medium text-center">flex-1 (grows)</div>
      <div className="bg-neutral-700 px-4 py-3 rounded-md text-white text-sm font-medium">Fixed</div>
    </div>
  )
}`

const flexGrowUsage = `// Main content with sidebar
<div className="flex gap-4">
  <aside className="w-64">Sidebar</aside>
  <main className="flex-1">Main content grows to fill space</main>
</div>

// Split layout
<div className="flex gap-4">
  <div className="flex-1 bg-gray-100 p-4">Left panel</div>
  <div className="flex-1 bg-gray-200 p-4">Right panel</div>
</div>

// Input with button
<div className="flex gap-2">
  <input className="flex-1 px-3 py-2 border rounded" placeholder="Enter text..." />
  <button className="px-4 py-2 bg-blue-500 text-white rounded">Submit</button>
</div>`

// Flex Wrap Component
const flexWrapComponent = `export function FlexWrap() {
  return (
    <div className="flex flex-wrap gap-2 p-6 bg-neutral-800 border border-white/10 rounded-lg">
      <div className="bg-blue-600 px-3 py-2 rounded text-white text-sm">React</div>
      <div className="bg-green-600 px-3 py-2 rounded text-white text-sm">Node.js</div>
      <div className="bg-purple-600 px-3 py-2 rounded text-white text-sm">GraphQL</div>
      <div className="bg-red-600 px-3 py-2 rounded text-white text-sm">TypeScript</div>
      <div className="bg-yellow-600 px-3 py-2 rounded text-white text-sm">JavaScript</div>
      <div className="bg-indigo-600 px-3 py-2 rounded text-white text-sm">Tailwind</div>
    </div>
  )
}`

const flexWrapUsage = `// Badge/tag list that wraps
<div className="flex flex-wrap gap-2">
  <span className="bg-blue-500 px-2 py-1 rounded text-white">React</span>
  <span className="bg-green-500 px-2 py-1 rounded text-white">Node.js</span>
  <span className="bg-purple-500 px-2 py-1 rounded text-white">GraphQL</span>
</div>

// Button group that wraps on small screens
<div className="flex flex-wrap gap-2">
  <button className="px-4 py-2 bg-blue-500 text-white rounded">Primary</button>
  <button className="px-4 py-2 border border-gray-300 rounded">Secondary</button>
  <button className="px-4 py-2 border border-gray-300 rounded">Tertiary</button>
</div>

// Card grid that wraps
<div className="flex flex-wrap gap-4">
  <div className="flex-1 min-w-64 p-4 border rounded">Card 1</div>
  <div className="flex-1 min-w-64 p-4 border rounded">Card 2</div>
  <div className="flex-1 min-w-64 p-4 border rounded">Card 3</div>
</div>`

// Centered Flex Component
const centeredFlexComponent = `export function CenteredFlex() {
  return (
    <div className="flex items-center justify-center h-40 p-6 bg-neutral-800 border border-white/10 rounded-lg">
      <div className="text-center">
        <div className="w-12 h-12 bg-blue-500 rounded-full mb-3 mx-auto"></div>
        <span className="text-white font-medium">Perfectly Centered</span>
      </div>
    </div>
  )
}`

const centeredFlexUsage = `// Loading state
<div className="flex items-center justify-center h-64">
  <div className="text-center">
    <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-2"></div>
    <p>Loading...</p>
  </div>
</div>

// Empty state
<div className="flex flex-col items-center justify-center h-48 text-gray-500">
  <div className="w-16 h-16 bg-gray-200 rounded-full mb-4"></div>
  <h3 className="text-lg font-medium">No items found</h3>
  <p className="text-sm">Try adjusting your search</p>
</div>

// Modal content centering
<div className="flex items-center justify-center min-h-screen bg-black bg-opacity-50">
  <div className="bg-white p-6 rounded-lg shadow-lg">
    <h2 className="text-xl font-bold mb-4">Modal Title</h2>
    <p>Modal content here</p>
  </div>
</div>`

// Between Flex Component
const betweenFlexComponent = `export function BetweenFlex() {
  return (
    <div className="flex items-center justify-between w-full p-6 bg-neutral-800 border border-white/10 rounded-lg">
      <div className="bg-neutral-700 px-4 py-2 rounded-md">
        <span className="text-white font-medium">Left Item</span>
      </div>
      <div className="bg-neutral-700 px-4 py-2 rounded-md">
        <span className="text-white font-medium">Right Item</span>
      </div>
    </div>
  )
}`

const betweenFlexUsage = `// Header layout
<div className="flex items-center justify-between w-full">
  <h1 className="text-xl font-bold">Page Title</h1>
  <button className="bg-blue-500 text-white px-4 py-2 rounded">Action</button>
</div>

// Navigation
<div className="flex items-center justify-between w-full p-4">
  <div className="font-bold">Brand</div>
  <nav className="flex gap-4">
    <a href="/">Home</a>
    <a href="/about">About</a>
  </nav>
</div>

// Card with actions
<div className="flex items-center justify-between w-full p-4 border rounded-lg">
  <div>
    <h3 className="font-semibold">Product Name</h3>
    <p className="text-gray-600">$99.99</p>
  </div>
  <button className="text-blue-500 hover:text-blue-700">Add to Cart</button>
</div>`

export const basicFlexTabs = [
  { label: "Component", code: basicFlexComponent },
  { label: "Usage", code: basicFlexUsage },
]

export const flexGrowTabs = [
  { label: "Component", code: flexGrowComponent },
  { label: "Usage", code: flexGrowUsage },
]

export const flexWrapTabs = [
  { label: "Component", code: flexWrapComponent },
  { label: "Usage", code: flexWrapUsage },
]

export const centeredFlexTabs = [
  { label: "Component", code: centeredFlexComponent },
  { label: "Usage", code: centeredFlexUsage },
]

export const betweenFlexTabs = [
  { label: "Component", code: betweenFlexComponent },
  { label: "Usage", code: betweenFlexUsage },
] 