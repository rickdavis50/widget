import logoApex from "../assets/logo_apex.svg";
import logoAstro from "../assets/logo_astro.svg";
import logoArc from "../assets/logo_arc.svg";
import logoCastelion from "../assets/logo_castelion.svg";
import photoApex320 from "../assets/photo_apex-320.avif";
import photoApex480 from "../assets/photo_apex-480.avif";
import photoApex640 from "../assets/photo_apex-640.avif";
import photoAstro320 from "../assets/photo_astro-320.avif";
import photoAstro480 from "../assets/photo_astro-480.avif";
import photoAstro640 from "../assets/photo_astro-640.avif";
import photoArc320 from "../assets/photo_arc-320.avif";
import photoArc480 from "../assets/photo_arc-480.avif";
import photoArc640 from "../assets/photo_arc-640.avif";
import photoCastelion320 from "../assets/photo_castelion-320.avif";
import photoCastelion480 from "../assets/photo_castelion-480.avif";
import photoCastelion640 from "../assets/photo_castelion-640.avif";

export default function Hero() {
  const imageSizes =
    "(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 25vw";
  const customerCards = [
    {
      name: "Apex",
      image: photoApex480,
      srcSet: `${photoApex320} 320w, ${photoApex480} 480w, ${photoApex640} 640w`,
      logo: (
        <img
          src={logoApex}
          alt="Apex"
          className="h-6 w-auto"
          width={96}
          height={24}
          style={{ filter: "brightness(0)" }}
        />
      ),
    },
    {
      name: "Astro",
      image: photoAstro480,
      srcSet: `${photoAstro320} 320w, ${photoAstro480} 480w, ${photoAstro640} 640w`,
      logo: (
        <img
          src={logoAstro}
          alt="Astro"
          className="h-6 w-auto"
          width={96}
          height={24}
          style={{ filter: "brightness(0)" }}
        />
      ),
    },
    {
      name: "Arc",
      image: photoArc480,
      srcSet: `${photoArc320} 320w, ${photoArc480} 480w, ${photoArc640} 640w`,
      logo: (
        <img
          src={logoArc}
          alt="Arc"
          className="h-6 w-auto"
          width={96}
          height={24}
          style={{ filter: "brightness(0)" }}
        />
      ),
    },
    {
      name: "Castelion",
      image: photoCastelion480,
      srcSet: `${photoCastelion320} 320w, ${photoCastelion480} 480w, ${photoCastelion640} 640w`,
      logo: (
        <img
          src={logoCastelion}
          alt="Castelion"
          className="h-6 w-auto"
          width={96}
          height={24}
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
        <div className="mt-4">
          <a
            className="text-[clamp(0.75rem,1vw,0.9rem)] text-ink underline transition-colors hover:text-ink"
            href="mailto:build@widgetmakers.com"
          >
            build@widgetmakers.com
          </a>
        </div>
        <p className="mt-3 text-[clamp(0.75rem,1vw,0.9rem)] font-medium uppercase tracking-[0.28em] text-ink md:hidden">
          Built in LA near LAX
        </p>
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
                  width={480}
                  height={600}
                  srcSet={card.srcSet}
                  sizes={imageSizes}
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
