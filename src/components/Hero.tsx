export default function Hero() {
  const customerCards = [
    {
      name: "Apex",
      image: "/src/assets/photo_apex.png",
      logo: (
        <img
          src="/src/assets/logo_apex.svg"
          alt="Apex"
          className="h-11 w-auto"
          style={{ filter: "brightness(0)" }}
        />
      ),
    },
    {
      name: "Astro",
      image: "/src/assets/photo_astro.png",
      logo: (
        <svg
          aria-label="Astro"
          height="44"
          viewBox="0 0 180 52"
          className="h-11 w-auto"
          role="img"
        >
          <text
            x="0"
            y="38"
            fill="#000000"
            fontFamily="Inter, sans-serif"
            fontSize="36"
            fontWeight="700"
            letterSpacing="4"
          >
            ASTRO
          </text>
        </svg>
      ),
    },
    {
      name: "Arc",
      image: "/src/assets/photo_arc.png",
      logo: (
        <img
          src="/src/assets/logo_arc.svg"
          alt="Arc"
          className="h-11 w-auto"
          style={{ filter: "brightness(0)" }}
        />
      ),
    },
    {
      name: "Castelion",
      image: "/src/assets/photo_castelion.png",
      logo: (
        <img
          src="/src/assets/logo_castelion.svg"
          alt="Castelion"
          className="h-11 w-auto"
          style={{ filter: "brightness(0)" }}
        />
      ),
    },
  ];

  return (
    <section className="flex flex-col gap-16">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:gap-10">
        <div className="flex-1">
          <p className="text-[clamp(0.8rem,1vw,0.95rem)] font-medium tracking-[0.18em] text-sub">
            Advanced Manufacturing
          </p>
          <h1 className="mt-2 font-sans text-[clamp(2.6rem,6.6vw,5.5rem)] font-bold leading-[0.95] tracking-[-0.02em] text-ink">
            <span className="block">Build Faster</span>
            <span className="block">in America.</span>
          </h1>
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
      </div>

      <section aria-label="Customer Images" className="w-full">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {customerCards.map((card) => (
            <div
              key={card.name}
              className="relative aspect-[4/5] overflow-hidden rounded-[20px] border border-line bg-black/10"
            >
              <div className="absolute left-4 top-4 z-10">
                <div className="relative">
                  <span
                    className="absolute -inset-3 rounded-[14px] bg-white/12 blur-md"
                    aria-hidden="true"
                  />
                  <span className="relative block">{card.logo}</span>
                </div>
              </div>
              <img
                src={card.image}
                alt={card.name}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}
