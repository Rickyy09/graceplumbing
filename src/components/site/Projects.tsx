const projects = [
  {
    img: "/bathroom-renovation-completed-1.webp",
    title: "Bathroom Renovation",
    tag: "Renovation",
    alt: "Bathroom renovation completed by Grace Plumbing Solution Pty Ltd in Centurion",
  },
  {
    img: "/bathroom-renovation-tiling-work-1.webp",
    title: "Bathroom Tiling Work",
    tag: "Tiling",
    alt: "Bathroom tiling work by Grace Plumbing Solution Pty Ltd in Centurion",
  },
  {
    img: "/bathroom-renovation-progress-1.webp",
    title: "Bathroom Renovation Progress",
    tag: "In Progress",
    alt: "Bathroom renovation in progress by Grace Plumbing Solution Pty Ltd in Centurion",
  },
  {
    img: "/bathroom-renovation-completed-2.webp",
    title: "Completed Bathroom Installation",
    tag: "Completed",
    alt: "Completed bathroom installation by Grace Plumbing Solution Pty Ltd in Centurion",
  },
  {
    img: "/geyser-installation-roof-1.webp",
    title: "Geyser Installation",
    tag: "Geyser",
    alt: "Roof geyser installation by Grace Plumbing Solution Pty Ltd in Centurion",
  },
  {
    img: "/geyser-piping-repair-1.webp",
    title: "Geyser Piping Repair",
    tag: "Repair",
    alt: "Geyser piping repair by Grace Plumbing Solution Pty Ltd in Centurion",
  },
  {
    img: "/water-backup-tank-installation-1.webp",
    title: "Water Backup Tank Installation",
    tag: "Water Backup",
    alt: "Water backup tank installation by Grace Plumbing Solution Pty Ltd in Centurion",
  },
  {
    img: "/water-tank-pump-installation-1.webp",
    title: "Water Tank & Pump Installation",
    tag: "Pump",
    alt: "Water tank and pump installation by Grace Plumbing Solution Pty Ltd in Centurion",
  },
];

export function Projects() {
  return (
    <section id="projects" className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Recent Projects</span>
            <h2 className="mt-2 text-3xl font-extrabold text-foreground sm:text-4xl">Workmanship that speaks for itself</h2>
          </div>
          <a href="#contact" className="text-sm font-semibold text-primary hover:underline">Start your project →</a>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((p) => (
            <figure key={p.title} className="group relative overflow-hidden rounded-2xl shadow-card">
              <img
                src={p.img}
                alt={p.alt}
                loading="lazy"
                decoding="async"
                width={1024}
                height={1280}
                className="aspect-[4/5] w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/85 via-foreground/30 to-transparent" />
              <figcaption className="absolute inset-x-0 bottom-0 p-5 text-white">
                <div className="inline-block rounded-full bg-emergency px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider">{p.tag}</div>
                <div className="mt-2 text-base font-bold">{p.title}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
