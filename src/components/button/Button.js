"use client";

import React from "react";

export default function Button({
  children,
  variant = "primary",
  disabled = false,
  className = "",
  ...props
}) {
  const base =
    "inline-flex items-center justify-center rounded-md px-4 py-2 text-xs font-medium transition-colors focus:outline-none";
  const variantClasses = {
    primary: "bg-white text-black hover:bg-white/80",
    secondary: "bg-tertiary text-paragraph hover:bg-tertiary/80",
    outline:
      "bg-transparent border border-border text-paragraph hover:bg-white/5",
    danger: "bg-danger text-white hover:bg-danger/80",
  };

  const resolved = variantClasses[variant] || variantClasses.primary;
  const disabledClasses = disabled
    ? " opacity-50 cursor-not-allowed"
    : " cursor-pointer";

  return (
    <button
      disabled={disabled}
      className={`${base} ${resolved}${disabledClasses} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
