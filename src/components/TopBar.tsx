export default function TopBar() {
  return (
    <header className="flex items-center justify-between gap-6">
      <div className="flex items-center gap-3 text-[clamp(0.85rem,1.4vw,1.05rem)] font-display uppercase tracking-[0.28em]">
        <span className="inline-flex h-2 w-2 rounded-full border border-ink/70" aria-hidden="true" />
        <span>Widget Makers</span>
      </div>
      <a
        className="text-[clamp(0.8rem,1.1vw,0.95rem)] text-sub transition-colors hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/70 focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
        href="mailto:build@widgetmakers.com"
      >
        build@widgetmakers.com
      </a>
    </header>
  );
}
