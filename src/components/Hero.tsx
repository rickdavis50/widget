export default function Hero() {
  const customerCards = [
    {
      name: "Apex",
      image: "/src/assets/photo_apex.png",
      logo: (
        <img
          src="/src/assets/logo_apex.svg"
          alt="Apex"
          className="h-6 w-auto"
          style={{ filter: "brightness(0)" }}
        />
      ),
    },
    {
      name: "Astro",
      image: "/src/assets/photo_astro.png",
      logo: (
        <img
          src="/src/assets/logo_astro.svg"
          alt="Astro"
          className="h-6 w-auto"
          style={{ filter: "brightness(0)" }}
        />
      ),
    },
    {
      name: "Arc",
      image: "/src/assets/photo_arc.png",
      logo: (
        <img
          src="/src/assets/logo_arc.svg"
          alt="Arc"
          className="h-6 w-auto"
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
          className="h-6 w-auto"
          style={{ filter: "brightness(0)" }}
        />
      ),
    },
  ];

  return (
    <section className="flex flex-col gap-12">
      <div className="max-w-4xl">
        <p className="text-[clamp(0.8rem,1vw,0.95rem)] font-medium tracking-[0.18em] text-sub">
          Advanced Manufacturing
        </p>
        <h1 className="mt-2 font-sans text-[clamp(2.2rem,5.3vw,4.8rem)] font-bold leading-[1] tracking-[-0.02em] text-ink">
          Build Faster in America.
        </h1>
        <div className="mt-4 max-w-2xl space-y-4 text-[clamp(0.95rem,1.4vw,1.15rem)] leading-[1.6] text-sub">
          <p>
            Our partners make satellites, rockets, missiles, electric boats,
            drone swarms, rovers, hyper cars, and even burrito robots.
          </p>
          <p>Pushing the boundaries of the physical world? Build with us.</p>
        </div>
      </div>

      <section aria-label="Customer Images" className="w-full">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {customerCards.map((card) => (
            <div
              key={card.name}
              className="relative aspect-[4/5] overflow-hidden rounded-[10px] border border-line bg-black/10"
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
