interface Experience {
    role: string;
    company: string;
    period: string;
    type: string;
    summary: string;
    points: string[];
    tech: string[];
}

const EXPERIENCE: Experience[] = [
    {
        role: "Junior Frontend Developer",
        company: "Meridian Digital",
        period: "Feb 2026 — Present",
        type: "Full-time · 7 months",
        summary:
            "Building and maintaining production React applications serving thousands of users daily, collaborating directly with senior engineers and designers.",
        points: [
            "Developed and shipped three major feature releases using React 18 and TypeScript, reducing bundle size by 22% through code-splitting",
            "Built a reusable component library adopted across two internal products, eliminating duplicate UI work",
            "Collaborated with UX on accessibility improvements, achieving WCAG AA compliance across the primary dashboard",
            "Integrated REST APIs and implemented client-side caching strategies that cut average load times by ~40%",
            "Participated in daily standups, code reviews, and sprint retrospectives in an Agile team of eight engineers",
        ],
        tech: ["React", "TypeScript", "Tailwind CSS", "REST APIs", "Git", "Figma"],
    },
];