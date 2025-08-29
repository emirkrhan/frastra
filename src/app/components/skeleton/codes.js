// Simple Skeleton Component
const simpleSkeletonComponentCode = `'use client'

import React from 'react'

export function Skeleton({ className = "w-full h-4 rounded-md" }) {
  return (
    <div className={\`animate-pulse bg-secondary \${className}\`}></div>
  )
}
`;

// Card Skeleton Component
const cardSkeletonComponentCode = `<Skeleton className="w-2/5 h-4 rounded-lg" />`;

// Export Tab Arrays
export const simpleSkeletonTabs = [
  { label: "Component", code: simpleSkeletonComponentCode },
];

export const cardSkeletonTabs = [
  { label: "Component", code: cardSkeletonComponentCode },
];
