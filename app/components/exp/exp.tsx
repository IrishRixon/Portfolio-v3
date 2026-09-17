"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { EXPERIENCE } from "@/data/exp";
import AnimatedSection from "@/components/AnimatedSection";

export default function Experience() {
    return (
        <section id="experience" className="bg-secondary py-24">
            <div className="mx-auto max-w-[1200px] px-6">
                <AnimatedSection>
                    <p className="mb-4 font-mono text-xs font-semibold tracking-[0.2em] text-primary uppercase">
                        Experience
                    </p>
                    <h2 className="mb-6 font-display text-[clamp(28px,4vw,40px)] leading-[1.15] font-extrabold tracking-[-0.02em] text-foreground">
                        Professional work.
                    </h2>
                    <p className="mb-12 max-w-[480px] text-[15px] text-muted-foreground">
                        Real-world engineering in a production environment, working on software people use every day.
                    </p>
                </AnimatedSection>

                {EXPERIENCE.map((exp, i) => (
                    <AnimatedSection key={i}>
                        <div className="mb-5 rounded-2xl border border-border bg-card p-6 shadow-[0_2px_12px_rgba(0,0,0,0.04)] sm:p-9">
                            <div className="mb-5 flex flex-wrap items-start justify-between gap-4">
                                <div>
                                    <h3 className="mb-1 font-display text-xl font-bold text-foreground">{exp.role}</h3>
                                    <div className="flex flex-wrap items-center gap-2.5">
                                        <span className="font-sans text-[15px] font-semibold text-primary">{exp.company}</span>
                                        <span className="inline-block size-1 rounded-full bg-border" />
                                        <span className="font-mono text-[12.5px] text-muted-foreground">{exp.type}</span>
                                    </div>
                                </div>
                                <div className="rounded-md border border-border bg-secondary px-3 py-1 font-mono text-xs whitespace-nowrap text-muted-foreground">
                                    {exp.period}
                                </div>
                            </div>

                            <p className="mb-6 text-[14.5px] leading-[1.75] text-muted-foreground">{exp.summary}</p>

                            <ul className="mb-6 flex list-none flex-col gap-2.5 p-0">
                                {exp.points.map((pt, j) => (
                                    <li key={j} className="flex items-start gap-2.5">
                                        <ArrowRight className="mt-1 size-3.5 shrink-0 text-primary" aria-hidden />
                                        <span className="font-sans text-sm leading-[1.65] text-secondary-foreground">{pt}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="flex flex-wrap gap-2">
                                {exp.tech.map((t) => (
                                    <Badge key={t} variant="secondary">
                                        {t}
                                    </Badge>
                                ))}
                            </div>
                        </div>
                    </AnimatedSection>
                ))}

                {/* Earlier experience placeholder */}
                <AnimatedSection>
                    <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-dashed border-border px-6 py-7 sm:px-9">
                        <div>
                            <div className="mb-0.5 font-display text-base font-semibold text-foreground">
                                Academic &amp; Freelance Projects
                            </div>
                            <div className="text-[13px] text-muted-foreground">
                                University coursework, open-source contributions, and freelance web work · 2021–2023
                            </div>
                        </div>
                        <Link
                            href="#projects"
                            className="text-[13px] font-medium text-primary no-underline hover:underline"
                        >
                            See projects →
                        </Link>
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
}

export { Experience };