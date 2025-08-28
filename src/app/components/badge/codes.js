export const badgeComponentTabs = [
  {
    label: 'Badge.js',
    language: 'jsx',
    code: `"use client"\nimport React from 'react'\n\nexport default function Badge({ children, variant = 'primary', icon, className = '', ...rest }) {\n  const baseClasses = 'inline-flex items-center rounded-md px-2.5 py-0.5 text-xs font-semibold transition-colors'\n  const variantClasses = {\n    primary: 'border border-transparent bg-tertiary text-paragraph',\n    secondary: 'border border-transparent bg-secondary text-paragraph',\n    destructive: 'bg-danger/20 text-danger',\n    outline: 'border border-border text-paragraph',\n    success: 'bg-success/20 text-success'\n  }\n\n  const hasIcon = Boolean(icon)\n  const gapClasses = hasIcon ? ' gap-1.5' : ''\n  const resolvedVariant = variantClasses[variant] || variantClasses.primary\n\n  return (\n    <div className={baseClasses + gapClasses + ' ' + resolvedVariant + ' ' + className} {...rest}>\n      {icon}\n      {children && <span>{children}</span>}\n    </div>\n  )\n}`
  }
]

export const defaultBadgeTabs = [
  {
    label: 'Component',
    code: `import Badge from '@/components/badge/Badge'

<Badge variant="primary">Badge</Badge>`
  }
]

export const secondaryBadgeTabs = [
  {
    label: 'Component',
    code: `import Badge from '@/components/badge/Badge'

<Badge variant="secondary">Badge</Badge>`
  }
]

export const destructiveBadgeTabs = [
  {
    label: 'Component',
    code: `import Badge from '@/components/badge/Badge'

<Badge variant="destructive">Badge</Badge>`
  }
]

export const outlineBadgeTabs = [
  {
    label: 'Component',
    code: `import Badge from '@/components/badge/Badge'

<Badge variant="outline">Badge</Badge>`
  }
]

export const iconBadgeTabs = [
  {
    label: 'Component',
    code: `import Badge from '@/components/badge/Badge'
import { CheckCircleIcon } from '@heroicons/react/24/solid'

<Badge variant="success" icon={<CheckCircleIcon className="size-3.5" />}>Verified</Badge>`
  }
]

// notification örneği kaldırıldı