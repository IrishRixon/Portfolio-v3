import { Project } from "@/data/project";
import { ArrowUpRight, CodeXml, Diamond } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";

const VISIBLE_TAGS = 3;

export function ProjectCard({ project }: { project: Project }) {
  const Icon = project.icon;
  const visibleTags = project.tags.slice(0, VISIBLE_TAGS);
  const remainingTags = project.tags.slice(VISIBLE_TAGS);

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
        {/* Decorative grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage: `
      linear-gradient(to right, currentColor 1px, transparent 1px),
      linear-gradient(to bottom, currentColor 1px, transparent 1px)
    `,
            backgroundSize: "32px 32px",
          }}
        />
        <Icon size={64}/>
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
          {visibleTags.map((t) => (
            <Badge key={t} variant="secondary">
              {t}
            </Badge>
          ))}
          {remainingTags.length > 0 && (
            <Tooltip>
              <TooltipTrigger
                aria-label={`Show ${remainingTags.length} more technologies`}
                className="cursor-default self-center rounded-sm p-0 font-mono text-[11px] text-muted-foreground transition-colors duration-200 hover:text-foreground focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-none"
              >
                +{remainingTags.length}
              </TooltipTrigger>
              <TooltipContent className="max-w-[240px]">
                <div className="flex flex-col items-start gap-1.5">
                  <span className="font-mono text-[10px] tracking-[0.08em] uppercase opacity-70">
                    Also used
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {remainingTags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-background/20 bg-background/10 px-2 py-[2px] font-sans text-[11px] font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </TooltipContent>
            </Tooltip>
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