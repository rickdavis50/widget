import Divider from "./Divider";

const capabilities = [
  "Precision Machining",
  "Rapid Prototyping",
  "Production Ramp Support",
];

export default function MobileSecondSection() {
  return (
    <section className="mt-6 md:hidden">
      <Divider />
      <div className="mt-5 flex flex-col gap-5">
        <div>
          <p className="text-[clamp(0.7rem,0.9vw,0.85rem)] uppercase tracking-[0.35em] text-sub">
            Capabilities
          </p>
          <ul className="mt-4 space-y-2 text-[clamp(0.9rem,1.1vw,1rem)] text-ink">
            {capabilities.map((capability) => (
              <li key={capability} className="border-b border-line pb-2 last:border-b-0">
                {capability}
              </li>
            ))}
          </ul>
        </div>
        <a
          className="inline-flex items-center justify-center border border-ink/80 px-5 py-2 text-[clamp(0.85rem,1vw,0.95rem)] uppercase tracking-[0.3em] transition-colors hover:bg-ink hover:text-bg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/70 focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
          href="mailto:build@widgetmakers.com?subject=Widget%20Makers%20%E2%80%94%20Capacity%20Request"
        >
          Request Capacity
        </a>
      </div>
    </section>
  );
}
