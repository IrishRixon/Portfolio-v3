import { SOCIAL_LINKS, STATS } from "@/data/hero";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="hero" className="relative flex min-h-screen items-center overflow-hidden pt-20">
      {/* Subtle grid background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_60%_40%,color-mix(in_srgb,var(--primary)_6%,transparent)_0%,transparent_60%),radial-gradient(circle_at_20%_80%,color-mix(in_srgb,var(--accent)_5%,transparent)_0%,transparent_50%)]"
      />

      <div className="mx-auto grid w-full max-w-[1200px] grid-cols-1 items-center gap-16 px-6 lg:grid-cols-[1fr_auto]">
        <div>
          {/* Status pill */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[color-mix(in_srgb,var(--primary)_30%,var(--border))] bg-[color-mix(in_srgb,var(--primary)_8%,var(--card))] px-3.5 py-[5px]">
            <span className="inline-block size-[7px] rounded-full bg-[#22c55e]" />
            <span className="font-mono text-xs font-medium text-muted-foreground">
              Open to new opportunities
            </span>
          </div>

          {/* Name */}
          <h1 className="mb-4 font-display text-[clamp(42px,6vw,68px)] font-extrabold leading-[1.08] tracking-[-0.03em] text-foreground">
            Irish Rixon Dela Peña
          </h1>

          {/* Title */}
          <div className="mb-6 flex items-center gap-3">
            <span className="font-display text-[clamp(18px,2.5vw,24px)] font-semibold tracking-[-0.01em] text-primary">
              Junior Software Developer
            </span>
          </div>

          {/* Bio */}
          <p className="mb-10 max-w-[540px] font-sans text-[clamp(15px,1.5vw,17px)] leading-[1.75] text-muted-foreground">
            I build thoughtful frontend experiences with React and TypeScript at{" "}
            <strong className="font-semibold text-foreground">Meridian Digital</strong>.
            Seven months in, I&apos;ve shipped production features, improved performance, and learned how real
            teams ship real software.
          </p>

          {/* CTAs */}
          <div className="mb-12 flex flex-wrap gap-3">
            <Link
              href="#projects"
              className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-6 py-[11px] font-sans text-sm font-semibold text-primary-foreground no-underline transition-all duration-200 hover:-translate-y-px hover:opacity-90"
            >
              View Projects →
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-card px-6 py-[11px] font-sans text-sm font-semibold text-foreground no-underline transition-all duration-200 hover:-translate-y-px hover:border-muted-foreground"
            >
              Get in Touch
            </Link>
          </div>


          {/* Social links */}
          <div className="flex items-center gap-5">
            {SOCIAL_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                aria-label={link.label}
                className="flex items-center gap-[5px] font-sans text-[13px] text-muted-foreground no-underline transition-colors duration-200 hover:text-foreground"
              >
                <Image src={link.icon} alt={link.label} width={20} height={20} /> <span>{link.label}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Hero visual card */}
        <div className="w-full max-w-[300px] shrink-0 justify-self-center lg:justify-self-auto">
          <div className="rounded-2xl border border-border bg-card p-7 shadow-[0_8px_40px_rgba(0,0,0,0.08)]">
            {/* Code-like block */}
            <div className="font-mono text-[12.5px] leading-[1.9] text-muted-foreground">
              <div><span className="text-accent">const</span> <span className="text-primary">developer</span> = {"{"}</div>
              <div className="pl-4">name: <span className="text-[#22c55e]">&quot;Irish Rixon&quot;</span>,</div>
              <div className="pl-4">gender: <span className="text-[#22c55e]">&quot;Male&quot;</span>,</div>
              <div className="pl-4">role: <span className="text-[#22c55e]">&quot;Frontend Dev&quot;</span>,</div>
              <div className="pl-4">exp: <span className="text-[#f97316]">7</span>, <span className="text-[11px] text-muted-foreground">// months</span></div>
              <div className="pl-4">stack: [</div>
              <div className="pl-8"><span className="text-[#22c55e]">&quot;Next.js&quot;</span>, <span className="text-[#22c55e]">&quot;TS&quot;</span>,</div>
              <div className="pl-8"><span className="text-[#22c55e]">&quot;Node.js&quot;</span></div>
              <div className="pl-4">],</div>
              <div className="pl-4">available: <span className="text-[#22c55e]">true</span>,</div>
              <div>{"}"}</div>
            </div>

            <div className="mt-5 border-t border-border pt-5">
              {STATS.map((stat) => (
                <div key={stat.label} className="mb-2.5 flex items-center justify-between last:mb-0">
                  <span className="font-sans text-xs text-muted-foreground">{stat.label}</span>
                  <span className="font-display text-sm font-bold text-foreground">{stat.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 opacity-40">
        <span className="font-mono text-[11px] tracking-[0.1em] text-muted-foreground">SCROLL</span>
        <div className="h-8 w-px animate-pulse bg-muted-foreground" />
      </div>
    </section>
  );
}

