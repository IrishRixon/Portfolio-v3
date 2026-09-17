import Link from "next/link";
import { ArrowUpRight, CodeXml, Diamond } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { Badge } from "@/components/ui/badge";
import { PROJECTS, type Project } from "@/data/project";

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all duration-250 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_12px_40px_rgba(0,0,0,0.10)]">
      {/* Gradient preview area */}
      <div
        className={`relative flex h-[140px] items-center justify-center overflow-hidden bg-gradient-to-br ${project.gradient}`}
      >
        {project.featured && (
          <div className="absolute top-3 right-3 rounded bg-primary px-2 py-[3px] font-mono text-[10px] font-semibold tracking-[0.08em] text-primary-foreground">
            FEATURED
          </div>
        )}
        {/* Decorative dots */}
        <div className="flex gap-8 opacity-15">
          {[0, 1, 2].map((n) => (
            <div key={n} className="size-12 rounded-full border-2 border-foreground" />
          ))}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="mb-2 font-display text-[17px] font-bold tracking-[-0.01em] text-foreground">
          {project.title}
        </h3>
        <p className="mb-4 font-sans text-[13.5px] leading-[1.7] text-muted-foreground">
          {project.description}
        </p>

        <ul className="mb-4 flex list-none flex-col gap-1.5 p-0">
          {project.features.slice(0, 3).map((f, i) => (
            <li key={i} className="flex items-start gap-2">
              <Diamond className="mt-[5px] size-2 shrink-0 fill-accent text-accent" aria-hidden />
              <span className="font-sans text-[12.5px] text-secondary-foreground">{f}</span>
            </li>
          ))}
        </ul>

        <div className="mt-auto mb-5 flex flex-wrap gap-1.5">
          {project.tags.slice(0, 4).map((t) => (
            <Badge key={t} variant="secondary">
              {t}
            </Badge>
          ))}
          {project.tags.length > 4 && (
            <span className="self-center font-mono text-[11px] text-muted-foreground">
              +{project.tags.length - 4}
            </span>
          )}
        </div>

        <div className="flex gap-2.5 border-t border-border pt-4">
          <Link
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-[5px] rounded-md border border-border bg-secondary px-3 py-1.5 font-sans text-[13px] font-semibold text-foreground no-underline transition-colors duration-200 hover:border-muted-foreground"
          >
            <CodeXml className="size-3.5" aria-hidden />
            Code
          </Link>
          {project.demo && (
            <Link
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-[5px] rounded-md bg-primary px-3 py-1.5 font-sans text-[13px] font-semibold text-primary-foreground no-underline transition-opacity duration-200 hover:opacity-90"
            >
              <ArrowUpRight className="size-3.5" aria-hidden />
              Live
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 font-mono text-xs font-semibold tracking-[0.2em] text-primary uppercase">
      {children}
    </p>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-6 font-display text-[clamp(28px,4vw,40px)] leading-[1.15] font-extrabold tracking-[-0.02em] text-foreground">
      {children}
    </h2>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <AnimatedSection>
          <SectionLabel>Projects</SectionLabel>
          <SectionHeading>Things I&apos;ve built.</SectionHeading>
          <p className="mb-12 max-w-[480px] text-[15px] text-muted-foreground">
            Full-stack personal projects — designed, built, and shipped end to end.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
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

export { Projects, ProjectCard };
