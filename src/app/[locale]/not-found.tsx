import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[70vh] max-w-page flex-col items-start justify-center px-6 md:px-10 lg:px-12">
      <p className="section-index mb-4">404</p>
      <h1 className="font-display text-5xl font-semibold tracking-tightest text-ink md:text-7xl">
        Pagina non trovata.
      </h1>
      <Link
        href="/it"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper"
      >
        ← Torna alla home
      </Link>
    </div>
  );
}
