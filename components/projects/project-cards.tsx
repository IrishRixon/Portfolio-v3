import { Project } from "@/data/project";
import { ArrowUpRight, CodeXml, Diamond } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all duration-250 hover:-translate-y-1 hover:border-[color-mix(in_srgb,var(--primary)_40%,var(--border))] hover:shadow-[0_12px_40px_rgba(0,0,0,0.10)]"
    >
      {/* Gradient preview area */}
      <div
        className={`relative flex h-[140px] items-center justify-center overflow-hidden bg-gradient-to-br ${project.gradient}`}
      >
        {project.featured && (
          <div className="absolute top-[12px] right-[12px] rounded bg-primary px-2 py-[3px] font-mono text-[10px] font-semibold tracking-[0.08em] text-primary-foreground">
            FEATURED
          </div>
        )}
        {/* Decorative dots */}
        <div className="flex items-center gap-8 opacity-15 pointer-events-none">
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

        <ul className="mb-4 flex flex-col list-none gap-1.5 p-0">
          {project.features.slice(0, 3).map((f, i) => (
            <li key={i} className="flex items-start gap-2">
              <Diamond className="mt-[1px] shrink-0 size-[12px] text-accent" aria-hidden />
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
            <CodeXml className="size-[13px]" aria-hidden />
            Code
          </Link>
          {project.demo && (
            <Link
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-[5px] rounded-md bg-primary px-3 py-1.5 font-sans text-[13px] font-semibold text-primary-foreground no-underline transition-opacity duration-200 hover:opacity-90"
            >
              <ArrowUpRight className="size-[13px]" aria-hidden />
              Live
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}