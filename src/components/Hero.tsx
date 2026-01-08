import logoApex from "../assets/logo_apex.svg";
import logoAstro from "../assets/logo_astro.svg";
import logoArc from "../assets/logo_arc.svg";
import logoCastelion from "../assets/logo_castelion.svg";
import photoApex from "../assets/photo_apex.avif";
import photoAstro from "../assets/photo_astro.avif";
import photoArc from "../assets/photo_arc.avif";
import photoCastelion from "../assets/photo_castelion.avif";

export default function Hero() {
  const customerCards = [
    {
      name: "Apex",
      image: photoApex,
      logo: (
        <img
          src={logoApex}
          alt="Apex"
          className="h-6 w-auto"
          style={{ filter: "brightness(0)" }}
        />
      ),
    },
    {
      name: "Astro",
      image: photoAstro,
      logo: (
        <img
          src={logoAstro}
          alt="Astro"
          className="h-6 w-auto"
          style={{ filter: "brightness(0)" }}
        />
      ),
    },
    {
      name: "Arc",
      image: photoArc,
      logo: (
        <img
          src={logoArc}
          alt="Arc"
          className="h-6 w-auto"
          style={{ filter: "brightness(0)" }}
        />
      ),
    },
    {
      name: "Castelion",
      image: photoCastelion,
      logo: (
        <img
          src={logoCastelion}
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
        <p className="text-[clamp(0.8rem,1vw,0.95rem)] font-medium uppercase tracking-[0.18em] text-sub">
          ADVANCED MANUFACTURING
        </p>
        <h1 className="mt-2 font-sans text-[clamp(2.2rem,5.3vw,4.8rem)] font-bold leading-[1] tracking-[-0.02em] text-ink">
          Build Faster in America.
        </h1>
        <div className="mt-4 max-w-2xl text-[clamp(0.95rem,1.4vw,1.15rem)] leading-[1.6] text-sub">
          <p>
            Our partners make satellites, rockets, missiles, electric boats,
            drone swarms, rovers, hyper cars, and even burrito robots. Build
            with us to push the boundaries of the physical world faster.
          </p>
        </div>
      </div>

      <section aria-label="Customer Images" className="w-full">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {customerCards.map((card) => {
            const isLcp = card.name === "Apex";

            return (
              <div
                key={card.name}
                className="relative aspect-[4/5] overflow-hidden rounded-[10px] bg-black/10"
              >
                <img
                  src={card.image}
                  alt={card.name}
                  className="h-full w-full object-cover"
                  loading={isLcp ? "eager" : "lazy"}
                  decoding="async"
                  width={800}
                  height={1000}
                  {...(isLcp ? { fetchPriority: "high" } : {})}
                />
                <div className="absolute left-4 top-4 z-10">
                  <div className="relative">
                    <span
                      className="absolute -inset-3 rounded-[14px] bg-white/12 blur-md"
                      aria-hidden="true"
                    />
                    <span className="relative block">{card.logo}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </section>
  );
}
