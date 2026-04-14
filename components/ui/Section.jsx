import React from "react";
import Container from "./Container";

export default function Section({
  id,
  eyebrow,
  title,
  subtitle,
  className = "",
  children,
}) {
  return (
    <section id={id} className={`py-14 sm:py-20 ${className}`}>
      <Container>
        {(eyebrow || title || subtitle) && (
          <header className="mb-10 max-w-2xl">
            {eyebrow && (
              <p className="text-xs font-semibold tracking-[0.22em] text-emerald-200/70 terminal-glow">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-emerald-50 terminal-glow sm:text-3xl">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mt-3 text-base leading-relaxed text-emerald-200/70">
                {subtitle}
              </p>
            )}
          </header>
        )}
        {children}
      </Container>
    </section>
  );
}

