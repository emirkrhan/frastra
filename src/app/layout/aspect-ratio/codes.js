// Square Aspect Ratio Component
const squareAspectComponent = `export function SquareAspect() {
  return (
    <div className="aspect-square w-full max-w-64 bg-neutral-800 border border-white/10 rounded-lg flex items-center justify-center">
      <span className="text-white text-sm">1:1 Square</span>
    </div>
  )
}`

const squareAspectUsage = `// Square container
<div className="aspect-square w-32">
  <img src="/image.jpg" className="w-full h-full object-cover" />
</div>

// Profile picture container
<div className="aspect-square w-20 rounded-full overflow-hidden">
  <img src="/avatar.jpg" className="w-full h-full object-cover" />
</div>

// Responsive square card
<div className="aspect-square w-full max-w-64 bg-neutral-800 rounded-lg p-4">
  <div className="flex flex-col justify-between h-full">
    <h3>Title</h3>
    <p>Content</p>
  </div>
</div>`

// Video Aspect Ratio Component
const videoAspectComponent = `export function VideoAspect() {
  return (
    <div className="aspect-video w-full bg-neutral-800 border border-white/10 rounded-lg flex items-center justify-center">
      <span className="text-white text-sm">16:9 Video</span>
    </div>
  )
}`

const videoAspectUsage = `// Video container
<div className="aspect-video w-full">
  <video className="w-full h-full object-cover" controls>
    <source src="/video.mp4" type="video/mp4" />
  </video>
</div>

// YouTube embed
<div className="aspect-video w-full">
  <iframe 
    src="https://youtube.com/embed/..."
    className="w-full h-full"
    frameBorder="0"
  />
</div>

// Hero banner
<div className="aspect-video w-full bg-gradient-to-r from-blue-500 to-purple-600">
  <div className="flex items-center justify-center text-white">
    <h1 className="text-4xl font-bold">Hero Content</h1>
  </div>
</div>`

// Custom Aspect Ratio Component
const customAspectComponent = `export function CustomAspect() {
  return (
    <div className="aspect-[4/3] w-full max-w-80 bg-neutral-800 border border-white/10 rounded-lg flex items-center justify-center">
      <span className="text-white text-sm">4:3 Custom</span>
    </div>
  )
}`

const customAspectUsage = `// Custom 4:3 ratio
<div className="aspect-[4/3] w-full">
  <img src="/photo.jpg" className="w-full h-full object-cover" />
</div>

// Golden ratio
<div className="aspect-[1.618/1] w-full max-w-64">
  <div className="bg-gradient-to-br from-yellow-400 to-orange-500 w-full h-full" />
</div>

// Portrait 3:4
<div className="aspect-[3/4] w-full max-w-48">
  <img src="/portrait.jpg" className="w-full h-full object-cover" />
</div>`

export const squareAspectTabs = [
  { label: "Component", code: squareAspectComponent },
  { label: "Usage", code: squareAspectUsage },
]

export const videoAspectTabs = [
  { label: "Component", code: videoAspectComponent },
  { label: "Usage", code: videoAspectUsage },
]

export const customAspectTabs = [
  { label: "Component", code: customAspectComponent },
  { label: "Usage", code: customAspectUsage },
] 