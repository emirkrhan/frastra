# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Common Commands

- **Development**: `npm run dev` - Starts the Next.js development server on http://localhost:3000
- **Build**: `npm run build` - Creates an optimized production build
- **Start**: `npm start` - Starts the production server (after build)
- **Lint**: `npm run lint` - Runs ESLint to check code quality

## Project Architecture

This is Frastra UI, a copy-paste component library built on Next.js 15 with a documentation site. It follows a "copy-paste" philosophy rather than NPM package installation.

### Core Structure

- `src/components/` - Reusable UI components (the actual library)
- `src/app/` - Next.js App Router documentation site with live previews
- Each component has both implementation (`src/components/`) and documentation (`src/app/components/`)

### Technology Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS 4 with utility classes
- **React**: Version 19
- **Component Variants**: `class-variance-authority` for component variations
- **Utilities**: `clsx` and `tailwind-merge` for conditional classes
- **Icons**: `@heroicons/react`
- **Code Highlighting**: `prism-react-renderer` for documentation

### Key Components Architecture

1. **PreviewAndCode Component**: Shows live preview + copyable code
2. **Layout Pattern**: Each doc page uses consistent structure with main content + TableOfContents sidebar
3. **Component Organization**: Each component has multiple variants (e.g., PrimaryButton, OutlineButton)

### Critical WYSIWYG Principle

**Most Important Rule**: Preview and copyable code must produce identical results. Users should see exactly what they get when copying code.

- State initial values must match between preview and code
- All props, data structures, and imports must be synchronized
- CSS classes and styling must produce identical visual output

### Page Layout Standard

Documentation pages follow this structure:
- Header with title and description
- Content sections with `id` attributes for navigation
- `PreviewAndCode` components for interactive examples
- `ComponentFooter` for page navigation
- `TableOfContents` in right sidebar

### Theming

- CSS custom properties for colors (`--background`, `--foreground`)
- Light/dark mode support
- Custom animations defined in `tailwind.config.mjs`
- Consistent spacing and typography using Tailwind utilities

### Development Guidelines

- Follow existing component patterns and file structure
- Maintain WYSIWYG principle in all documentation
- Use Tailwind utilities consistently
- Keep components dependency-free and self-contained
- Follow the existing naming conventions and code style