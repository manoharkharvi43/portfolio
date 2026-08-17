import { ArrowUpRight, Mail } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { experience, profile, projects, skills, stats } from "@/lib/data";

function Github(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.55v-2.1c-3.2.7-3.88-1.4-3.88-1.4-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.02 11.02 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.76.12 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.4-5.26 5.69.41.36.78 1.06.78 2.14v3.17c0 .3.2.66.8.55A11.5 11.5 0 0 0 12 .5Z" />
    </svg>
  );
}

function Linkedin(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05a3.74 3.74 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.55V9h3.57v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
    </svg>
  );
}

/** Two-line stacked all-caps heading — top line solid, bottom line dimmed. */
function Heading({ top, bottom }: { top: string; bottom: string }) {
  return (
    <h2 className="display-md">
      {top}
      <br />
      <span className="text-muted-foreground/45">{bottom}</span>
    </h2>
  );
}

function Section({
  top,
  bottom,
  children,
}: {
  top: string;
  bottom: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t border-border/70 py-14 sm:py-20">
      <Heading top={top} bottom={bottom} />
      <div className="mt-10">{children}</div>
    </section>
  );
}

const marqueeItems = [
  "Next.js",
  "Node.js",
  "TypeScript",
  "Fastify",
  "Kafka",
  "MongoDB",
  "Redis",
  "AWS",
  "React Native",
  "LLMs",
];

function Marquee({ reverse }: { reverse?: boolean }) {
  const row = [...marqueeItems, ...marqueeItems];
  return (
    <div
      className="marquee-track"
      style={
        {
          "--marquee-duration": reverse ? "44s" : "38s",
          "--marquee-direction": reverse ? "reverse" : "normal",
          animationDelay: reverse ? "-14s" : "0s",
        } as React.CSSProperties
      }
    >
      {row.map((item, i) => (
        <span
          key={`${item}-${i}`}
          className="flex items-center gap-3 font-display text-2xl font-semibold uppercase tracking-tight text-muted-foreground/35 sm:text-3xl"
        >
          {item}
          <span className="size-1.5 rounded-full bg-brand/70" />
        </span>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* Backdrop */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10 grid-backdrop"
      />
      <div
        aria-hidden
        className="pointer-events-none fixed inset-x-0 top-0 -z-10 h-[34rem] bg-[radial-gradient(ellipse_55%_45%_at_50%_-8%,color-mix(in_oklch,var(--brand)_22%,transparent),transparent)]"
      />

      <main className="mx-auto w-full max-w-4xl px-6 pb-28 sm:px-8">
        <header className="rise flex items-center justify-between py-8">
          <span className="label flex items-center gap-2">
            <span className="relative flex size-1.5">
              <span className="absolute inset-0 animate-ping rounded-full bg-lime/70" />
              <span className="relative size-1.5 rounded-full bg-lime" />
            </span>
            Open to work · {profile.location}
          </span>
          <ThemeToggle />
        </header>

        {/* Hero */}
        <div className="pt-6 pb-16 sm:pt-10 sm:pb-20">
          <h1 className="rise display-xl" style={{ animationDelay: "40ms" }}>
            Manohar
            <br />
            <span className="text-muted-foreground/45">Kharvi</span>
          </h1>
          <div
            className="rise mt-6 flex items-center gap-3"
            style={{ animationDelay: "100ms" }}
          >
            <span className="h-px w-8 bg-brand" />
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-brand sm:text-sm">
              Full Stack Engineer
            </p>
          </div>
          <p
            className="rise mt-6 max-w-xl leading-relaxed text-muted-foreground"
            style={{ animationDelay: "140ms" }}
          >
            {profile.blurb}
          </p>

          <div
            className="rise mt-9 flex flex-wrap items-center gap-2"
            style={{ animationDelay: "200ms" }}
          >
            <a
              href={`mailto:${profile.email}`}
              className={`${buttonVariants({ variant: "ghost", size: "lg" })} rounded-full bg-brand px-4 text-brand-foreground transition-transform hover:-translate-y-0.5 hover:bg-brand/85`}
            >
              <Mail className="size-4" />
              Get in touch
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className={`${buttonVariants({ variant: "outline", size: "lg" })} rounded-full px-4 transition-transform hover:-translate-y-0.5`}
            >
              <Github className="size-3.5" />
              GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className={`${buttonVariants({ variant: "outline", size: "lg" })} rounded-full px-4 transition-transform hover:-translate-y-0.5`}
            >
              <Linkedin className="size-3.5" />
              LinkedIn
            </a>
          </div>

          {/* Stats */}
          <dl
            className="rise mt-14 grid grid-cols-3 gap-6 border-t border-border/70 pt-8"
            style={{ animationDelay: "260ms" }}
          >
            {stats.map((s) => (
              <div key={s.label}>
                <dd className="font-display text-3xl font-bold tracking-tight sm:text-5xl">
                  <span className="text-brand">+</span>
                  {s.value}
                </dd>
                <dt className="label mt-2 whitespace-pre-line leading-relaxed">
                  {s.label}
                </dt>
              </div>
            ))}
          </dl>
        </div>

        {/* Marquee band */}
        <div className="marquee-mask flex flex-col gap-2 overflow-hidden border-y border-border/70 py-7">
          <div className="flex gap-3">
            <Marquee />
            <Marquee />
          </div>
          <div className="flex gap-3">
            <Marquee reverse />
            <Marquee reverse />
          </div>
        </div>

        {/* Projects */}
        <Section top="Recent" bottom="Projects">
          <div className="grid gap-3 sm:grid-cols-2">
            {projects.map((p, i) => {
              const tint =
                i === 0 ? "brand" : i === 1 ? "lime" : i === 2 ? "brand" : "lime";
              const Inner = (
                <>
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    style={{
                      backgroundImage: `radial-gradient(ellipse 80% 70% at 50% 0%, color-mix(in oklch, var(--${tint}) 14%, transparent), transparent)`,
                    }}
                  />
                  <div className="relative flex items-start justify-between gap-3">
                    <span
                      className="font-mono text-[0.7rem]"
                      style={{ color: `var(--${tint})` }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {p.href && (
                      <span className="flex size-8 items-center justify-center rounded-full border border-border/80 text-muted-foreground transition-all duration-300 group-hover:border-transparent group-hover:bg-foreground group-hover:text-background">
                        <ArrowUpRight className="size-4" />
                      </span>
                    )}
                  </div>
                  <h3 className="relative mt-6 font-display text-xl font-semibold uppercase tracking-tight">
                    {p.name}
                  </h3>
                  {p.note && (
                    <span
                      className="relative mt-1.5 block font-mono text-[0.7rem]"
                      style={{ color: `var(--${tint})` }}
                    >
                      {p.note}
                    </span>
                  )}
                  <p className="relative mt-3 text-sm leading-relaxed text-muted-foreground">
                    {p.tagline}
                  </p>
                  <div className="relative mt-5 flex flex-wrap gap-1.5">
                    {p.stack.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-border/70 px-2 py-0.5 font-mono text-[0.65rem] text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </>
              );

              const base =
                "group relative flex flex-col overflow-hidden rounded-2xl border border-border/70 bg-card/40 p-5 transition-colors duration-300 hover:border-border";

              return p.href ? (
                <a
                  key={p.name}
                  href={p.href}
                  target="_blank"
                  rel="noreferrer"
                  className={base}
                >
                  {Inner}
                </a>
              ) : (
                <div key={p.name} className={base}>
                  {Inner}
                </div>
              );
            })}
          </div>
        </Section>

        {/* Experience */}
        <Section top={`${profile.years} of`} bottom="Experience">
          <ol className="space-y-3">
            {experience.map((job) => (
              <li
                key={`${job.company}-${job.period}`}
                className="group relative overflow-hidden rounded-2xl border border-border/70 bg-card/40 p-5 transition-colors duration-300 hover:border-border hover:bg-card/70"
              >
                <span className="absolute inset-y-0 left-0 w-px origin-top scale-y-0 bg-brand transition-transform duration-300 ease-out group-hover:scale-y-100" />
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="font-display text-base font-semibold uppercase tracking-tight">
                    {job.title}
                    <span className="text-muted-foreground">
                      {" · "}
                      {job.company}
                    </span>
                  </h3>
                  <span className="font-mono text-xs text-muted-foreground transition-colors group-hover:text-brand">
                    {job.period}
                  </span>
                </div>
                <ul className="mt-3 space-y-1.5">
                  {job.points.map((p) => (
                    <li
                      key={p}
                      className="relative pl-4 text-sm leading-relaxed text-muted-foreground before:absolute before:left-0 before:top-[0.7em] before:size-1 before:rounded-full before:bg-border before:transition-colors group-hover:before:bg-brand"
                    >
                      {p}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </Section>

        {/* Skills */}
        <Section top="Everyday" bottom="Toolkit">
          <div className="grid gap-3 sm:grid-cols-2">
            {skills.map((s, i) => (
              <div
                key={s.group}
                className="group rounded-2xl border border-border/70 bg-card/40 p-5 transition-colors duration-300 hover:border-border hover:bg-card/70"
              >
                <h3 className="label flex items-center gap-2">
                  <span
                    className="size-1.5 rounded-full"
                    style={{ background: i % 2 ? "var(--lime)" : "var(--brand)" }}
                  />
                  {s.group}
                </h3>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {s.items.map((item) => (
                    <Badge
                      key={item}
                      variant="secondary"
                      className="cursor-default rounded-full font-normal transition-colors hover:bg-foreground hover:text-background"
                    >
                      {item}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Contact */}
        <section className="border-t border-border/70 pt-14 sm:pt-20">
          <Heading top="Let's work" bottom="Together" />
          <p className="mt-6 max-w-md leading-relaxed text-muted-foreground">
            Building something that needs to scale? Send a note — I reply fast.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${profile.email}`}
              className={`${buttonVariants({ variant: "ghost", size: "lg" })} rounded-full bg-brand px-4 text-brand-foreground transition-transform hover:-translate-y-0.5 hover:bg-brand/85`}
            >
              <Mail className="size-4" />
              {profile.email}
            </a>
            <span className="font-mono text-xs text-muted-foreground">
              {profile.phone}
            </span>
          </div>
          <p className="label mt-16 border-t border-border/70 pt-6">
            © {new Date().getFullYear()} {profile.name}
          </p>
        </section>
      </main>
    </>
  );
}
