export interface SkillCategory {
    name: string;
    skills: string[]
}

export const SKILLS: SkillCategory[] = [
    {
        name: "Frontend",
        skills: [
            "React",
            "Next.js",
            "TypeScript",
            "JavaScript",
            "Angular",
            "HTML5",
            "CSS3",
            "Tailwind CSS",
            "Bootstrap",
            "shadcn/ui",
        ],
    },
    {
        name: "Backend",
        skills: [
            "Node.js",
            "Express.js",
            "FastAPI",
            "REST APIs",
            "Authentication",
            "WebSockets",
            "Socket.IO",
        ],
    },
    {
        name: "Databases",
        skills: [
            "MongoDB",
            "MySQL",
            "SQLite",
            "Firebase",
            "Supabase",
        ],
    },
    {
        name: "Tools & Platforms",
        skills: [
            "Git",
            "GitHub",
            "Postman",
            "Figma",
            "Cloudinary",
            "Netlify",
            "Render",
        ],
    },
]