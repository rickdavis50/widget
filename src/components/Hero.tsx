export default function Hero() {
  return (
    <section className="flex flex-col gap-6 md:flex-row md:items-center md:gap-10">
      <div className="flex-1">
        <p className="text-[clamp(0.75rem,1vw,0.9rem)] uppercase tracking-[0.4em] text-sub">
          In demand, by invitation
        </p>
        <h1 className="mt-4 font-display text-[clamp(2.1rem,4.6vw,3.8rem)] leading-[1.05]">
          Precision made. Quietly reserved.
        </h1>
        <p className="mt-4 max-w-xl text-[clamp(0.95rem,1.4vw,1.2rem)] text-sub">
          A private manufacturing partner for teams who cannot miss.
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-4">
          <a
            className="inline-flex items-center justify-center border border-ink/80 px-5 py-2 text-[clamp(0.85rem,1vw,0.95rem)] uppercase tracking-[0.3em] transition-colors hover:bg-ink hover:text-bg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/70 focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
            href="mailto:hello@widgetmakers.com?subject=Widget%20Makers%20%E2%80%94%20Capacity%20Request"
          >
            Request Capacity
          </a>
          <span className="text-[clamp(0.85rem,1vw,0.95rem)] text-sub">
            Los Angeles, CA
          </span>
        </div>
      </div>
      <div className="relative flex-1">
        <div className="relative h-[clamp(220px,42vh,360px)] w-full overflow-hidden border border-line p-4">
          <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_20%_20%,#1a1a1a_0%,#000_55%)]" />
          <div className="absolute inset-0 opacity-60 bg-[linear-gradient(130deg,rgba(255,255,255,0.06)_0%,rgba(255,255,255,0)_55%)]" />
          <div
            className="absolute inset-0 opacity-25 mix-blend-soft-light bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxMjAnIGhlaWdodD0nMTIwJyB2aWV3Qm94PScwIDAgMTIwIDEyMCc+PGZpbHRlciBpZD0nbic+PGZlVHVyYnVsZW5jZSB0eXBlPSdmcmFjdGFsTm9pc2UnIGJhc2VGcmVxdWVuY3k9JzAuOCcgbnVtT2N0YXZlcz0nMicgc3RpdGNoVGlsZXM9J3N0aXRjaCcvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPScxMjAnIGhlaWdodD0nMTIwJyBmaWx0ZXI9J3VybCgjbiknIG9wYWNpdHk9JzAuNCcvPjwvc3ZnPg==')]"
            aria-hidden="true"
          />
          <div className="absolute inset-4 border border-line/80" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
