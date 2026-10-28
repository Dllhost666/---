export function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return <div className="mb-10 max-w-2xl">
    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">{eyebrow}</p>
    <h2 className="text-3xl font-semibold leading-tight tracking-[-0.045em] sm:text-4xl">{title}</h2>
    {description && <p className="mt-4 max-w-xl text-base leading-7 text-zinc-600">{description}</p>}
  </div>;
}
