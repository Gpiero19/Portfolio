import type { Project } from "./types";
import { PlaceHolderImages } from "./placeholder-images";

const findImage = (id: string) => {
    const img = PlaceHolderImages.find(img => img.id === id);
    if (!img) {
        return {
            imageUrl: "https://placehold.co/600x400",
            imageHint: "placeholder"
        }
    }
    return { imageUrl: img.imageUrl, imageHint: img.imageHint };
}

export const projects: Project[] = [
  {
    id: "proj-1",
    title: "E-commerce Platform",
    description: "A full-featured e-commerce site with a modern stack.",
    longDescription: "This is a comprehensive e-commerce platform built from the ground up, featuring product catalogs, a shopping cart, secure checkout with Stripe integration, and a user dashboard for order management. The backend is powered by Node.js and Express, with a PostgreSQL database, while the frontend is a responsive Next.js application.",
    ...findImage("project-1"),
    status: "In Development",
    technologies: ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL", "Stripe"],
    repoUrl: "https://github.com",
    liveUrl: "https://example.com",
    date: "2024-05-15",
  },
  {
    id: "proj-2",
    title: "Real-time Chat App",
    description: "A performant chat application using WebSockets.",
    longDescription: "A real-time chat application that allows users to create rooms and communicate instantly. It leverages WebSockets for low-latency bidirectional communication. User authentication is handled with JWTs, and messages are persisted in a MongoDB database. The frontend is built with React and styled with Tailwind CSS.",
    ...findImage("project-2"),
    status: "Completed",
    technologies: ["React", "Node.js", "WebSocket", "MongoDB", "JWT"],
    repoUrl: "https://github.com",
    date: "2024-02-20",
  },
  {
    id: "proj-3",
    title: "Personal Blog",
    description: "A static-generated blog with Markdown-based content.",
    longDescription: "A fast and lightweight personal blog built with Astro and Preact. Posts are written in Markdown and statically generated at build time for optimal performance and SEO. The design is clean, minimalist, and fully responsive, focusing on readability. Deployed on Vercel.",
    ...findImage("project-3"),
    status: "Completed",
    technologies: ["Astro", "Preact", "Markdown", "Tailwind CSS"],
    repoUrl: "https://github.com",
    liveUrl: "https://example.com",
    date: "2023-11-10",
  },
  {
    id: "proj-4",
    title: "Task Management Tool",
    description: "A Kanban-style task board for project management.",
    longDescription: "A collaborative task management tool inspired by Trello. It features a drag-and-drop interface for moving tasks between columns (To Do, In Progress, Done). Built with Vue.js and Firebase, it offers real-time updates and data persistence through Firestore and handles user authentication with Firebase Auth.",
    ...findImage("project-4"),
    status: "In Development",
    technologies: ["Vue.js", "Firebase", "Firestore"],
    repoUrl: "https://github.com",
    date: "2024-06-01",
  },
  {
    id: "proj-5",
    title: "API for Weather Data",
    description: "A RESTful API to serve weather information.",
    longDescription: "A RESTful API built with Python and FastAPI that serves current and forecasted weather data from a third-party provider. It includes rate limiting, API key authentication, and comprehensive documentation generated automatically with Swagger UI. The API is containerized with Docker for easy deployment.",
    ...findImage("project-5"),
    status: "On Hold",
    technologies: ["Python", "FastAPI", "Docker", "REST API"],
    repoUrl: "https://github.com",
    date: "2023-09-05",
  },
  {
    id: "proj-6",
    title: "Portfolio Website v1",
    description: "The previous version of this developer portfolio.",
    longDescription: "The first iteration of my personal portfolio website, built with plain HTML, CSS, and JavaScript. It served as a great learning experience for web development fundamentals, including responsive design and DOM manipulation. Though now replaced, it marks the beginning of my journey.",
    ...findImage("project-6"),
    status: "Completed",
    technologies: ["HTML", "CSS", "JavaScript"],
    date: "2022-08-01",
  },
];
