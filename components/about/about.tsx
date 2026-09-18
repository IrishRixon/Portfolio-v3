"use client";

import { Badge } from "@/components/ui/badge";
import AnimatedSection from "@/components/AnimatedSection";
import { aboutBody1, aboutBody2, HIGHLIGHTS, TECH_BADGES } from "@/data/about";

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <AnimatedSection>
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="mb-4 font-mono text-xs font-semibold tracking-[0.2em] text-primary uppercase">
              About Me
            </p>
            <h2 className="mb-6 font-display text-[clamp(28px,4vw,40px)] leading-[1.15] font-extrabold tracking-[-0.02em] text-foreground">
              Building things
              <br />
              that actually ship.
            </h2>
            <p className="mb-5 max-w-[520px] text-[15.5px] leading-[1.8] text-muted-foreground">
              {aboutBody1}
            </p>
            <p className="mb-8 max-w-[520px] text-[15.5px] leading-[1.8] text-muted-foreground">
              {aboutBody2}
            </p>
            <div className="flex flex-wrap gap-2">
              {TECH_BADGES.map((t) => (
                <Badge key={t} variant="secondary">
                  {t}
                </Badge>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            {HIGHLIGHTS.map((item) => (
              <div
                key={item.title}
                className="flex gap-4 rounded-xl border border-border bg-card p-5 transition-all duration-200 hover:border-primary/40 hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)]"
              >
                <span className="mt-0.5 shrink-0 text-primary">
                  <item.icon className="size-5" aria-hidden />
                </span>
                <div>
                  <div className="mb-1 font-display text-sm font-bold text-foreground">{item.title}</div>
                  <div className="font-sans text-[13.5px] leading-[1.65] text-muted-foreground">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        </AnimatedSection>
      </div>
    </section>
  );
}