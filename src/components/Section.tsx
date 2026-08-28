import type { ReactNode } from "react";

export function Section({
  id,
  index,
  title,
  subtitle,
  children,
  className = "",
}: {
  id?: string;
  index?: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`scroll-mt-24 border-t border-line ${className}`}>
      <div className="mx-auto max-w-page px-6 py-20 md:px-10 md:py-28 lg:px-12">
        {(index || title) && (
          <header className="mb-12 md:mb-16">
            {index && <p className="section-index mb-4">{index}</p>}
            {title && (
              <h2 className="font-display text-3xl font-semibold tracking-tightest text-ink md:text-4xl lg:text-5xl">
                {title}
              </h2>
            )}
            {subtitle && <p className="mt-4 max-w-2xl text-base text-muted md:text-lg">{subtitle}</p>}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}
