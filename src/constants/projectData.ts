import type { Project, ProjectPage } from "@/types/project";

export function getProjectsForPage(page: ProjectPage): Project[] {
  return projectsList.filter((p) => !p.pages || p.pages.includes(page));
}

export const projectsList: Project[] = [
  {
    name: "Tyngle",
    link: "https://tyngle.in",
    desktopImage: "images/tyngle.png",
    points: [
      " Built a production-ready multi-vendor e-commerce platform with separate Buyer, Seller, and Admin portals using Role-Based Access Control.",
        "Built a hierarchical regional pricing engine (state → city → zone) with geolocation-based resolution and cascade fallback logic.",
      "React · Node.js · MongoDB",
      "e-commerce",
    ],
    category: "frontend",
    pages: ["home", "projects"],
  },
  {
    name: "3D car configurator",
    link: "https://3-dcar-configurator.vercel.app/",
    desktopImage: "images/3Dconfigurator.png",
    points: [
      "Built a client-facing animated website for a creative studio with custom scroll-triggered animations.",
      "Real-time 3D car visualization and interaction.",
      "Designed a premium automotive-style experience with smooth animations and an intuitive customization workflow.",
    ],
    category: "frontend",
    pages: ["home", "projects"],
  },
  {
    name: "HRMS",
    link: "https://hrms.ideacraft.com/",
    desktopImage: "images/image.png",
    points: [
      "Developed a full-stack HR Management System to automate employee lifecycle operations including employee records, attendance tracking, leave management, and role-based workflows.",    
      "Implemented Role-Based Access Control (RBAC) supporting Admin, HR, and Employee roles with permission-based access to application features.",
      "Designed database schemas and optimized CRUD operations for efficient employee data management.",
      "React · Node.js · MongoDB",
      "Multi-tenant SaaS Application"
    ],
    category: "fullstack",
    pages: ["home", "projects"],
  },
  {
    name: "ChessBlitz",
    link: "https://chessblitz.lok1.dev/",
    desktopImage: "images/chess.png",
    points: [
      "Real-time multiplayer chess with random matchmaking, friend games, and live spectating",
      "Async, event-driven backend with WebSockets and Redis for concurrent gameplay",
      "Tech - React.js, Express.js, Node.js, TypeScript, Tailwind CSS, WebSockets, Redis, PostgreSQL, Prisma",
    ],
    category: "fullstack",
    pages: ["home", "projects"],
  },
  {
    name: "FreeOrNot",
    desktopImage: "images/paywall.png",
    link: "",
    points: [
      " Built an AI-powered Chrome Extension that classifies websites as FREE, LIMITED FREE, LIKELY PAID, or PAID REQUIRED using Gemini and heuristic analysis.",
      " Designed a hybrid inference engine combining LLM responses, domain-level caching, rule-based detection, and community feedback to improve prediction accuracy while reducing redundant API calls",
      "Flask · Gemini API · Chrome Extensions",
      "chrome extension",
    ],
      category: "fullstack",
    pages: ["home", "projects"],
  },
  {
    name: "Comment Analyzer",
    desktopImage: "images/commentAnalyzer.png",
    link: "https://yt-comments-xpert.vercel.app/",
    points: [
      "Extracts YouTube comments from a video URL for fast sentiment analysis",
      "Classifies comments as positive, negative, or abusive",
      "Next.js · YouTube Data API",
      "NLP",
    ],
    category: "frontend",
    pages: ["home", "projects"],
  },
];
