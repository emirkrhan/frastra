// Content Box with top-left alignment
const leftTopBoxComponent = `export function ContentBox() {
  return (
    <div className="w-full bg-neutral-800 border border-white/10 rounded-lg p-6">
      <h3 className="text-lg font-semibold mb-2">Card Title</h3>
      <p className="text-white/70">
        This is a content box with text aligned to the top-left. Perfect for cards, panels, or any container with content.
      </p>
    </div>
  )
}`

const leftTopBoxUsage = `// Basic usage
<div className="bg-neutral-800 border border-white/10 rounded-lg p-6">
  <h3 className="text-lg font-semibold mb-2">Card Title</h3>
  <p className="text-white/70">Your content here</p>
</div>

// With custom content
<div className="bg-neutral-800 border border-white/10 rounded-lg p-4">
  <div className="flex items-center gap-3">
    <img src="/avatar.jpg" className="w-8 h-8 rounded-full" />
    <span>User Profile Card</span>
  </div>
</div>`

// Centered Box
const centeredBoxComponent = `export function CenteredBox() {
  return (
    <div className="w-full h-32 bg-neutral-800 border border-white/10 rounded-lg flex items-center justify-center">
      <span className="text-white">Centered Content</span>
    </div>
  )
}`

const centeredBoxUsage = `// Basic centered content
<div className="h-32 bg-neutral-800 border border-white/10 rounded-lg flex items-center justify-center">
  <span className="text-white">Centered Text</span>
</div>

// Centered icon with text
<div className="h-40 bg-neutral-800 border border-white/10 rounded-lg flex flex-col items-center justify-center gap-2">
  <Icon className="w-6 h-6" />
  <span className="text-sm text-white/70">Loading...</span>
</div>`

export const leftTopBoxTabs = [
  { label: "Component", code: leftTopBoxComponent },
  { label: "Usage", code: leftTopBoxUsage },
]

export const centeredBoxTabs = [
  { label: "Component", code: centeredBoxComponent },
  { label: "Usage", code: centeredBoxUsage },
] 