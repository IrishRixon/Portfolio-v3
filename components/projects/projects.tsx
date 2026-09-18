import AnimatedSection from "@/components/AnimatedSection";
import { PROJECTS } from "@/data/project";
import { ProjectCard } from "./project-cards";

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-secondary">
      <div className="mx-auto max-w-[1200px] px-6">
        <AnimatedSection>
          <p className="mb-4 font-mono text-xs font-semibold tracking-[0.2em] text-primary uppercase">
            Projects
          </p>
          <h2 className="mb-6 font-display text-[clamp(28px,4vw,40px)] leading-[1.15] font-extrabold tracking-[-0.02em] text-foreground">
            Things I&apos;ve built.
          </h2>
          <p className="mb-12 max-w-[480px] text-[15px] text-muted-foreground">
            Personal and academic projects built to solve real problems and explore new technologies.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project) => (
            <AnimatedSection key={project.title}>
              <ProjectCard project={project} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
