import { Brain, Globe, LucideIcon, PawPrint, Sparkles, Wallet } from "lucide-react";

export interface Project {
  title: string;
  description: string;
  icon: LucideIcon;
  problem: string;
  tags: string[];
  features: string[];
  github: string;
  demo?: string;
  featured?: boolean;
  gradient: string;
  dateStarted: string;
}

export const PROJECTS: Project[] = [
  {
    title: "Flo",
    description:
      "An AI-powered personal finance tracker that helps users manage transactions, understand spending patterns, and make more informed budgeting decisions.",
    problem:
      "Managing personal finances often requires manually categorizing transactions and reviewing spending patterns. Flo combines expense tracking with AI-assisted categorization and financial insights to make personal finance management more convenient.",
    icon: Wallet,
    tags: [
      "Next.js",
      "LangChain",
      "FastAPI",
      "TypeScript",
      "Supabase",
      "shadcn ui",
    ],
    features: [
      "Transaction tracking with AI-assisted category suggestions",
      "Spending analysis and monthly financial summaries",
      "Budget tracking with category-based spending limits",
      "AI-powered financial assistant for working with transaction and spending data",
    ],
    github: "https://github.com/IrishRixon",
    demo: "",
    featured: true,
    gradient: "from-emerald-500/10 to-teal-500/10",
    dateStarted: "June 2026"
  },
  {
    title: "Personal Portfolio V2",
    description:
      "A redesigned personal portfolio focused on interactive motion, and a polished developer experience while showcasing my professional work and full-stack projects.",
    problem:
      "As my development experience and technical skills grew, my original portfolio no longer represented the quality and breadth of my work. V2 was created to provide a more modern and engaging way to present my projects and experience.",
    icon: Sparkles,
    tags: [
      "React",
      "TypeScript",
      "Reactbits",
      "Tailwind CSS",
    ],
    features: [
      "Modern responsive portfolio design with motion",
      "Interactive animations and motion-based UI elements",
      "Organized showcase of frontend, backend, IoT, and other projects",
      "Updated experience, skills, education, and project sections",
    ],
    github: "https://github.com/IrishRixon",
    demo: "https://irishrixonportfolio-v2.netlify.app/",
    featured: false,
    gradient: "from-violet-500/10 to-indigo-500/10",
    dateStarted: "Jan 2026"
  },
  {
    title: "QuizAI",
    description:
      "An AI-powered quiz platform that generates questions based on selected categories and difficulty levels, with real-time multiplayer gameplay.",
    problem: "Creating engaging quizzes manually can be time-consuming. QuizAI uses AI to generate questions on demand and adds multiplayer functionality for a more interactive experience.",
    icon: Brain,
    tags: ["React", "TypeScript", "Express.js", "Socket.IO", "Tailwind CSS", "PrimeReact"],
    features: [
      "AI-generated questions based on category and difficulty",
      "Real-time multiplayer quiz sessions using Socket.IO",
      "Interactive quiz interface with scoring and game progression"
    ],
    github: "https://github.com/IrishRixon",
    demo: "",
    featured: false,
    gradient: "from-blue-500/10 to-cyan-500/10",
    dateStarted: "Oct 2025"
  },
  {
    title: "Personal Portfolio V1",
    description:
      "My first personal portfolio website, built to showcase my projects, technical skills, education, and early experience as a student.",
    problem:
      "I needed a simple online presence to present my development work and make it easier for recruiters and other developers to explore my projects, skills, and background.",
    icon: Globe,
    tags: [
      "Angular",
      "TypeScript",
      "Tailwind CSS",
    ],
    features: [
      "Responsive personal portfolio layout",
      "Project showcase with technology and feature highlights",
      "Sections for skills, education, and professional background",
      "Contact and social links for professional networking",
    ],
    github: "https://github.com/IrishRixon",
    demo: "",
    featured: false,
    gradient: "from-slate-500/10 to-zinc-500/10",
    dateStarted: "May 2025",
  },
  {
    title: "Pawfile - QR code Identification for pets",
    description:
      "A full-stack pet identification platform that helps pet owners create digital pet profiles and quickly access important pet information through a unique QR code.",
    problem: "Pet owners may have difficulty providing identification and important information when a pet is lost. PawFile provides a scannable QR code linked to a digital pet profile.",
    icon: PawPrint,
    tags: ["Angular", "TypeScript", "Express.js", "MongoDB", "Tailwind CSS", "JWT"],
    features: [
      "Unique QR codes linked to digital pet profiles",
      "Pet profile and information management",
      "Image uploads using Cloudinary",
    ],
    github: "https://github.com/IrishRixon",
    demo: "",
    featured: false,
    gradient: "from-blue-500/10 to-cyan-500/10",
    dateStarted: "Feb 2025",
  },
];