import logoWidget from "./assets/logo_widget.svg";
import logoFlag from "./assets/icon_flag.svg";
import logoApex from "./assets/logo_apex.svg";
import logoArc from "./assets/logo_arc.svg";
import logoCastelion from "./assets/logo_castelion.svg";
import logoReliable from "./assets/logo_reliable.svg";
import logoChipotle from "./assets/logo_chipolte.svg";

const logos = [
  { name: "Apex", src: logoApex },
  { name: "Arc", src: logoArc },
  { name: "Castelion", src: logoCastelion },
  { name: "Reliable Robotics", src: logoReliable },
  { name: "Chipotle", src: logoChipotle },
];

export default function App() {
  return (
    <div className="wm-bg">
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-8 py-8 text-ink md:px-14 md:py-10">
        <header className="flex items-center justify-between">
          <div className="flex items-center gap-3 text-[clamp(0.7rem,1vw,0.85rem)] font-medium uppercase tracking-[0.32em]">
            <img src={logoWidget} alt="Widget Makers" className="h-5 w-auto" />
          </div>
          <a
            className="text-[clamp(0.75rem,1vw,0.9rem)] text-ink transition-colors hover:text-ink"
            href="mailto:hello@widgetmakers.com"
          >
            hello@widgetmakers.com
          </a>
        </header>

        <main className="mt-20 flex flex-1 flex-col justify-between">
          <section className="max-w-3xl translate-y-6">
            <h1 className="font-serif text-[clamp(2.4rem,4.5vw,3.75rem)] leading-[1.05] text-[rgba(245,245,245,0.82)] [text-shadow:0_1px_24px_rgba(0,0,0,0.55)]">
              Advanced Manufacturing
            </h1>
            <div className="mt-6 max-w-2xl space-y-6 text-[clamp(0.95rem,1.4vw,1.15rem)] leading-[1.6] text-sub">
              <p>
                Our clients make satellites, rockets, missiles, electric boats,
                drone swarms, rovers, hyper cars, and even burrito robots.
              </p>
              <p>Pushing the boundaries of the physical world? Build with us.</p>
            </div>
          </section>

          <section className="mt-14 flex flex-col gap-2">
            <div className="flex items-center gap-3 text-[clamp(0.85rem,1.2vw,1rem)] font-medium uppercase tracking-[0.28em] text-ink">
              <img src={logoFlag} alt="" className="h-6 w-6" aria-hidden="true" />
              <span>American Made in Los Angeles</span>
            </div>
            <div className="text-[clamp(0.65rem,0.95vw,0.8rem)] uppercase tracking-[0.35em] text-sub">
              AS9100 / ISO9001 / IPC J-STD-001 CERTIFIED
            </div>
          </section>

          <section className="mt-16">
            <div className="text-[clamp(0.85rem,1.2vw,1rem)] font-medium uppercase tracking-[0.28em] text-ink">
              CLIENTS
            </div>
            <div className="mt-6 flex flex-wrap items-center justify-between gap-6">
              {logos.map((logo) => (
                <img
                  key={logo.name}
                  src={logo.src}
                  alt={logo.name}
                  className="h-6 w-auto opacity-80"
                />
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
