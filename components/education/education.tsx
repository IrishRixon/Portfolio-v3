import AnimatedSection from "@/components/AnimatedSection";
import { GraduationCap } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <AnimatedSection>
          <p className="mb-4 font-mono text-xs font-semibold tracking-[0.2em] text-primary uppercase">
            Education
          </p>
          <h2 className="mb-6 font-display text-[clamp(28px,4vw,40px)] leading-[1.15] font-extrabold tracking-[-0.02em] text-foreground">
            Academic foundation.
          </h2>
        </AnimatedSection>

        <AnimatedSection>
          <div className="max-w-[700px] rounded-2xl border border-border bg-card p-8">
            <div className="flex gap-7">
              <div className="shrink-0 rounded-xl border border-primary/25 bg-primary/12 p-3 h-fit">
                <GraduationCap className="size-7 text-primary" />
              </div>
              <div>
                <h3 className="mb-1 font-display text-lg font-bold text-foreground">
                  BS Information Technology
                </h3>
                <div className="mb-3 flex flex-wrap items-center gap-x-2 gap-y-1">
                  <span className="font-sans text-[15px] font-semibold text-primary">
                    Pampanga State University
                  </span>
                  <span className="font-mono text-[12.5px] text-muted-foreground">
                    · 2021–2025
                  </span>
                </div>
                <p className="text-[14.5px] leading-[1.75] text-muted-foreground">
                  Bachelor of Science in Information Technology, with a strong foundation in software development, and databases.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
