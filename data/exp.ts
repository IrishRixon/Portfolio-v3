export interface Experience {
    role: string;
    company: string;
    period: string;
    type: string;
    summary: string;
    points: string[];
    tech: string[];
}

export const EXPERIENCE: Experience[] = [
    {
        role: "Junior Software Developer",
        company: "MK Themed Attractions Philippines",
        period: "Feb 2026 — Present",
        type: "Full-time · 7 months",
        summary:
            "Contributed to production web applications across HR management, B2B e-commerce, and AI marketing, with a focus on frontend development and API integration.",
        points: [ 
            "Developed responsive and user-friendly interfaces using Next.js, Tailwind CSS, and shadcn/ui.",
            "Developed and integrated frontend features with REST APIs for an internal HR management system, including data presentation, forms, filtering, and business workflows.", 
            "Implemented advanced filtering, search, and CRUD functionality for a B2B e-commerce web application.", 
            "Implemented frontend authentication and protected application flows for an internal B2B e-commerce web application.", 
            "Developed dashboard features for an AI marketing platform, including an interactive chat interface for an AI marketing agent.", 
        ],
        tech: [ "Next.js", "React", "TypeScript", "Tailwind CSS", "shadcn/ui", "REST APIs", "Git", ],
    },
];