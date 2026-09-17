interface SkillCategory {
    name: string;
    skills: string[]
}

const skills: SkillCategory[] = [
    {
        name: "Frontend",
        skills: ["React", "TypeScript", "JavaScript", "Angular", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"],
    },
    {
        name: "Backend",
        skills: ["Node.js", "Express", "PHP", "FastAPI", "REST APIs", "JWT Auth", "WebSockets"],
    },
    {
        name: "Databases",
        skills: ["MongoDB", "MySQL", "SQLite", "Firebase"],
    },
    {
        name: "Tools & Platforms",
        skills: ["Git", "GitHub", "Docker", "Postman", "Figma", "Cloudinary", "Vercel", "Netlify"],
    },
]