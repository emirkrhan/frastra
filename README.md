# Frastra UI

A modern, copy-paste React component library built with Next.js 15 and Tailwind CSS 4. No package installations. No hidden abstractions. Just clean, customizable code that you own completely.

> **This is not a component library. It's how you build your component library.**

## ✨ Features

- 🎨 **Copy & Paste**: No package installations. Copy components directly into your project
- 🔄 **WYSIWYG**: What you see in the preview is exactly what you get in your code
- 🎯 **Full Control**: Own the source code completely. Modify, extend, or rebuild as needed
- ⚡ **Modern Stack**: Built with Next.js 15, React 19, and Tailwind CSS 4
- 📱 **Responsive**: Mobile-first design with responsive components out of the box
- 🌙 **Dark Mode**: Built-in dark mode support with CSS custom properties
- ♿ **Accessible**: ARIA compliant components with keyboard navigation
- 🚀 **Zero Dependencies**: Self-contained components with minimal external dependencies

## 🏗️ Philosophy

Traditional component libraries require you to install packages, import components, and work within their constraints. When customization is needed, you end up wrapping components, overriding styles, or mixing incompatible APIs.

Frastra takes a different approach: **give you the actual component code**. No black boxes, no mysterious dependencies, just transparent React components that become yours the moment you paste them.

## 🚀 Quick Start

1. **Browse Components**: Visit the documentation site to explore available components
2. **Copy Code**: Click on any component and copy the complete source code  
3. **Paste & Own**: Paste into your project and customize as needed
4. **Build**: Use as-is or extend with your own design system

```bash
# Run the documentation site locally
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to browse components.

## 📦 Available Components

### Form Components
- **Button** - Primary, Secondary, Outline, Danger variants
- **Input** - Default, Error states, TextArea
- **Checkbox** - Default, Labeled, Disabled, Indeterminate
- **Radio Group** - Grouped radio button selections
- **Select** - Default, Multi-select, Searchable variants
- **Switch** - Toggle switches with labels
- **Textarea** - Auto-resize, Counter, Labeled variants

### Layout Components
- **Box** - Flexible container component
- **Flex** - Flexbox layout utilities
- **Grid** - CSS Grid layout helpers
- **AspectRatio** - Maintain aspect ratios

### Navigation Components
- **Navbar** - Navigation bars and headers
- **Breadcrumb** - Breadcrumb navigation
- **Tabs** - Default, Icon, Vertical variants
- **Pagination** - Full pagination controls

### Feedback Components
- **Alert** - Default and Destructive alerts
- **Toast** - Toast notifications with provider
- **Modal** - Dialog and modal components
- **Spinner** - Loading indicators (Bars, Dots, Pulse variants)
- **Skeleton** - Loading placeholders for cards, lists

### Data Display
- **Avatar** - User avatars with fallbacks
- **Badge** - Status badges and notification dots
- **Card** - Project, User, Notification, Simple variants  
- **List** - Simple, Avatar, Action, Selectable lists
- **Table** - Simple, Status, Action, Selectable tables

### Utility Components
- **Accordion** - Collapsible content sections
- **Dropdown Menu** - Context menus and dropdowns
- **Tooltip** - Hover information displays
- **Footer** - Page footers

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **React**: Version 19 with latest features
- **Styling**: Tailwind CSS 4 with utility classes
- **Icons**: Heroicons React
- **Animations**: Tailwind CSS Animate
- **Variants**: Class Variance Authority (CVA)
- **Utilities**: clsx, tailwind-merge

## 📁 Project Structure

```
frastra/
├── src/
│   ├── app/                    # Documentation site (Next.js App Router)
│   │   ├── components/         # Component documentation pages
│   │   ├── get-started/        # Getting started guides
│   │   └── layout/             # Layout component docs
│   │
│   └── components/             # Actual UI Components Library
│       ├── button/             # Button variants
│       ├── input/              # Input components
│       ├── card/               # Card variants
│       └── ...                 # Other component categories
│
├── public/                     # Static assets
└── package.json                # Project dependencies
```

## 🎯 Core Principles

### 1. What You See Is What You Get (WYSIWYG)
Every component preview shows exactly what you'll get when you copy the code. No hidden state, missing props, or surprise dependencies.

### 2. Copy & Paste Workflow
Browse → Copy → Paste → Own. No CLI tools, no package management, no version conflicts.

### 3. Full Source Code Control
The moment you paste a component, it becomes yours. Modify styling, add features, or rebuild completely.

### 4. Zero External Dependencies
Components are self-contained with minimal dependencies, reducing bundle size and complexity.

## 🎨 Customization

Since you own the component source code, customization is straightforward:

```jsx
// Original button
<PrimaryButton>Click me</PrimaryButton>

// Customize with your own styles
<PrimaryButton className="bg-blue-600 hover:bg-blue-700">
  Custom Button
</PrimaryButton>

// Or modify the source code directly
export default function PrimaryButton({ children, variant = 'default', ...props }) {
  const variants = {
    default: 'bg-white text-black hover:bg-gray-200',
    custom: 'bg-blue-600 text-white hover:bg-blue-700'
  }
  
  return (
    <button className={variants[variant]} {...props}>
      {children}
    </button>
  )
}
```

## 🌙 Dark Mode

Built-in dark mode support using CSS custom properties:

```css
:root {
  --background: #ffffff;
  --foreground: #171717;
}

[data-theme="dark"] {
  --background: #0a0a0a;
  --foreground: #ededed;
}
```

## 📱 Responsive Design

All components are mobile-first and responsive by default using Tailwind's responsive utilities:

```jsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {/* Responsive grid layout */}
</div>
```

## 🤝 Contributing

This is an open-source project. Contributions are welcome!

1. Fork the repository
2. Create a feature branch
3. Add your component following the existing patterns
4. Ensure WYSIWYG principle compliance
5. Submit a pull request

## 📄 License

MIT License - feel free to use this project for personal or commercial purposes.

## 🔗 Links

- **Documentation**: [Live Demo Site](http://localhost:3000)
- **Repository**: [GitHub](https://github.com/your-username/frastra)
- **Issues**: [Report Issues](https://github.com/your-username/frastra/issues)

---

**Built with ❤️ for the React community**