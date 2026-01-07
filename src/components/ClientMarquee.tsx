const clients = [
  "Apex",
  "Castelion",
  "Reliable Robotics",
  "Arc Boats",
  "Throng",
];

export default function ClientMarquee() {
  return (
    <section className="flex flex-col gap-4">
      <div className="text-[clamp(0.7rem,0.9vw,0.85rem)] uppercase tracking-[0.35em] text-sub">
        Selected Clients
      </div>
      <div className="grid grid-cols-2 gap-3 border-y border-line py-4 text-center md:grid-cols-5 md:gap-0 md:divide-x md:divide-line">
        {clients.map((client) => (
          <div key={client} className="px-2">
            <span className="text-[clamp(0.8rem,1.1vw,1rem)] uppercase tracking-[0.28em] text-sub">
              {client}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
