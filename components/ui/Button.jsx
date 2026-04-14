import React from "react";

const base =
  "inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-emerald-400/30";

const variants = {
  primary:
    "bg-emerald-400/15 text-emerald-200 hover:bg-emerald-400/20 border border-emerald-300/20 shadow-[0_0_0_1px_rgba(34,197,94,0.10)_inset]",
  ghost:
    "bg-transparent text-emerald-200/90 hover:bg-emerald-400/10 border border-emerald-300/20",
};

export default function Button({
  as: Comp = "a",
  variant = "primary",
  className = "",
  children,
  ...props
}) {
  const v = variants[variant] ?? variants.primary;
  return (
    <Comp className={`${base} ${v} ${className}`} {...props}>
      {children}
    </Comp>
  );
}

