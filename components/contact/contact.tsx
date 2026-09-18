"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Check, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "jordan.ellis@dev.io";

  const copyEmail = () => {
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <section id="contact" className="relative overflow-hidden py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_60%,color-mix(in_srgb,var(--primary)_5%,transparent)_0%,transparent_60%)]"
      />

      <div className="relative mx-auto max-w-[720px] px-6 text-center">
        <AnimatedSection>
          <p className="mb-4 font-mono text-xs font-semibold tracking-[0.2em] text-primary uppercase">
            Contact
          </p>
          <h2 className="mb-5 font-display text-[clamp(32px,5vw,52px)] leading-[1.1] font-extrabold tracking-[-0.03em] text-foreground">
            Let&apos;s build something
            <br />
            <span className="text-primary">together.</span>
          </h2>
          <p className="mb-10 text-[15.5px] leading-[1.75] text-muted-foreground">
            I&apos;m open to junior or early mid-level roles, freelance work, and interesting side projects.
            If something looks like a fit, I&apos;d love to hear from you.
          </p>

          <div className="mb-12 flex flex-wrap justify-center gap-3">
            <Button
              type="button"
              onClick={copyEmail}
              size="lg"
              className="h-12 gap-2 rounded-lg px-6 font-semibold hover:-translate-y-px"
            >
              {copied ? (
                <>
                  <Check className="size-4" aria-hidden />
                  Copied!
                </>
              ) : (
                <>
                  <Mail className="size-4" aria-hidden />
                  {email}
                </>
              )}
            </Button>

            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-6 py-3 font-sans text-sm font-semibold text-foreground no-underline transition-all duration-200 hover:-translate-y-px hover:border-muted-foreground"
            >
              <Image src="/linkedin-logo.png" alt="" width={16} height={16} aria-hidden />
              LinkedIn
            </Link>

            <Link
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-6 py-3 font-sans text-sm font-semibold text-foreground no-underline transition-all duration-200 hover:-translate-y-px hover:border-muted-foreground"
            >
              <Image src="/github.png" alt="" width={16} height={16} aria-hidden />
              GitHub
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

export { Contact };
