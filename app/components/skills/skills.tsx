import AnimatedSection from "@/components/AnimatedSection";
import { Badge } from "@/components/ui/badge";
import { SKILLS } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <AnimatedSection>
          <p className="mb-4 font-mono text-xs font-semibold tracking-[0.2em] text-primary uppercase">
            Technical Skills
          </p>
          <h2 className="mb-6 font-display text-[clamp(28px,4vw,40px)] leading-[1.15] font-extrabold tracking-[-0.02em] text-foreground">
            Technologies I work with.
          </h2>
          <p className="mb-12 max-w-[480px] text-[15px] text-muted-foreground">
            Hands-on experience from professional work, personal projects, and academic study.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {SKILLS.map((cat) => (
            <AnimatedSection key={cat.name}>
              <div className="h-full rounded-xl border border-border bg-card p-6 transition-all duration-200 hover:border-primary/35 hover:shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
                <div className="mb-4 font-display text-[13px] font-bold tracking-[0.06em] text-primary uppercase">
                  {cat.name}
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

export { Skills };
