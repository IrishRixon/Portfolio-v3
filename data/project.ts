export interface Project {
  title: string;
  description: string;
  problem: string;
  tags: string[];
  features: string[];
  github: string;
  demo?: string;
  featured?: boolean;
  gradient: string;
}

export const PROJECTS: Project[] = [
  {
    title: "Taskly — Team Project Manager",
    description:
      "A full-stack task management platform with real-time collaboration, role-based access control, and a clean drag-and-drop interface.",
    problem: "Teams struggle with scattered task tracking across emails and spreadsheets. Taskly centralizes work with real-time updates.",
    tags: ["React", "Node.js", "MongoDB", "WebSockets", "JWT", "Express"],
    features: [
      "Real-time updates via WebSockets",
      "Drag-and-drop kanban board",
      "Role-based permissions (Admin / Member / Viewer)",
      "Email notifications and activity feed",
    ],
    github: "https://github.com",
    demo: "https://taskly-demo.vercel.app",
    featured: true,
    gradient: "from-blue-500/10 to-cyan-500/10",
  },
  {
    title: "Shopfront — E-Commerce Platform",
    description:
      "A modern e-commerce storefront with product catalog, cart management, Stripe checkout, and an admin panel for inventory management.",
    problem: "Small businesses need an affordable, self-hosted alternative to big platforms without sacrificing UX quality.",
    tags: ["React", "Express", "MongoDB", "Cloudinary", "Stripe", "JWT"],
    features: [
      "Product catalog with search and filter",
      "Stripe payment integration",
      "Admin panel with inventory management",
      "Image uploads via Cloudinary",
    ],
    github: "https://github.com",
    demo: "https://shopfront-demo.vercel.app",
    featured: true,
    gradient: "from-violet-500/10 to-purple-500/10",
  },
  {
    title: "PulseChat — Real-Time Messaging",
    description:
      "A real-time group chat application with private rooms, message history, typing indicators, and read receipts.",
    problem: "Building a performant WebSocket-based chat system as a deep dive into real-time architecture patterns.",
    tags: ["React", "Socket.io", "Node.js", "MongoDB", "TypeScript"],
    features: [
      "Private and public chat rooms",
      "Typing indicators and read receipts",
      "Persistent message history",
      "User presence and status",
    ],
    github: "https://github.com",
    gradient: "from-emerald-500/10 to-teal-500/10",
  },
  {
    title: "Forecast — Weather Dashboard",
    description:
      "A weather dashboard aggregating data from multiple APIs, with location search, 7-day forecasts, and animated weather visualizations.",
    problem: "Existing weather apps are cluttered. This project prioritises clarity and a polished reading experience.",
    tags: ["React", "TypeScript", "FastAPI", "OpenWeather API", "Recharts"],
    features: [
      "7-day forecast with hourly breakdown",
      "Multi-location saved cities",
      "Interactive precipitation charts",
      "Dynamic backgrounds by weather condition",
    ],
    github: "https://github.com",
    demo: "https://forecast-dash.netlify.app",
    gradient: "from-amber-500/10 to-orange-500/10",
  },
];