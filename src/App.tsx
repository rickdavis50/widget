import logoWidget from "./assets/logo_widget.svg";
import logoFlag from "./assets/icon_flag.svg";
import logoApex from "./assets/logo_apex.svg";
import logoArc from "./assets/logo_arc.svg";
import logoCastelion from "./assets/logo_castelion.svg";
import logoHadrian from "./assets/logo_hadrian.svg";
import logoReliable from "./assets/logo_reliable.svg";
import logoChipotle from "./assets/logo_chipolte.svg";
import Hero from "./components/Hero";

const logos = [
  { name: "Apex", src: logoApex, href: "https://www.apexspace.com/" },
  { name: "Arc", src: logoArc, href: "https://arcboats.com/" },
  { name: "Castelion", src: logoCastelion, href: "https://www.castelion.com/" },
  {
    name: "Hadrian",
    src: logoHadrian,
    href: "https://techcrunch.com/2025/07/17/hadrian-raises-260m-to-build-out-automated-factories-for-space-and-defense-parts/",
  },
  { name: "Reliable Robotics", src: logoReliable, href: "https://reliable.co/" },
  {
    name: "Chipotle",
    src: logoChipotle,
    href: "https://newsroom.chipotle.com/2024-09-16-CHIPOTLE-DEBUTS-AUTOCADO-AND-THE-AUGMENTED-MAKELINE-BY-HYPHEN-IN-RESTAURANTS",
  },
];

export default function App() {
  return (
    <div className="wm-bg">
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-8 py-8 text-ink md:px-14 md:py-10">
        <header className="flex items-start justify-between gap-6">
          <div className="flex items-center gap-3 text-[clamp(0.7rem,1vw,0.85rem)] font-medium uppercase tracking-[0.32em]">
            <img
              src={logoWidget}
              alt="Widget Makers"
              className="h-10 w-auto brightness-0 invert"
            />
          </div>
          <section className="flex flex-col items-end gap-1 text-right">
            <div className="flex items-center justify-end gap-3 text-[clamp(0.85rem,1.2vw,1rem)] font-medium uppercase tracking-[0.28em] text-ink">
              <img src={logoFlag} alt="" className="h-6 w-6" aria-hidden="true" />
              <span>Built in Los Angeles near LAX</span>
            </div>
            <div className="text-[clamp(0.65rem,0.95vw,0.8rem)] uppercase tracking-[0.35em] text-sub">
              AS9100 / ISO9001 CERTIFIED
            </div>
          </section>
        </header>

        <main className="mt-14 flex flex-1 flex-col justify-between md:mt-20">
          <Hero />

          <section className="mt-16">
            <div className="text-[clamp(0.85rem,1.2vw,1rem)] font-medium uppercase tracking-[0.28em] text-ink">
              CLIENTS
            </div>
            <div className="mt-6 flex flex-wrap items-center justify-between gap-6">
              {logos.map((logo) => (
                <a
                  key={logo.name}
                  href={logo.href}
                  className="inline-flex"
                  aria-label={`${logo.name} website`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={logo.src}
                    alt={logo.name}
                    className="h-6 w-auto opacity-80 brightness-0 invert"
                    width={96}
                    height={24}
                  />
                </a>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
