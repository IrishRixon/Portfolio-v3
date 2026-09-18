"use client";

import { useEffect, useState } from "react";
import Nav from "../components/nav/nav";
import Hero from "../components/hero/hero";
import About from "../components/about/about";
import Experience from "../components/exp/exp";
import Skills from "../components/skills/skills";
import Projects from "../components/projects/projects";
import Education from "@/components/education/education";
import Contact from "@/components/contact/contact";
import Footer from "@/components/footer/footer";

export default function Page() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setDark(prefersDark);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav dark={dark} onToggle={() => setDark((d) => !d)} />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </div>
  )
}