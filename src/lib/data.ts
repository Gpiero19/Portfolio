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
    title: "Trello Clone",
    description: "A full-stack task management application inspired by Trello.",
    longDescription: "Built a full-stack task management application inspired by Trello using React (Vite) for the front-end and Express.js for the back-end. Implemented features such as board creation, lists, and draggable cards to simulate real project workflows. Designed RESTful APIs to handle CRUD operations, ensuring scalable and maintainable code structure. Focused on responsive UI, smooth user interactions, and optimized rendering for better performance.",
    ...findImage("project-4"), // Re-using an existing image
    status: "In Development",
    technologies: ["React", "Node.js", "Express.js", "REST API"],
    repoUrl: "https://github.com/gpiero19",
    date: "2024-06-01",
  },
  {
    id: "proj-2",
    title: "Banking API",
    description: "A terminal-based banking application with secure transaction processing.",
    longDescription: "Built a tewrminal-based banking application with error handling, unit testing, and secure transaction processing. Applied Python (OOP), SQL, Django, and virtual environments for dependency management.",
    ...findImage("project-5"), // Re-using an existing image
    status: "Completed",
    technologies: ["Python", "Django", "SQL"],
    repoUrl: "https://github.com/gpiero19",
    date: "2024-02-20",
  },
  {
    id: "proj-3",
    title: "SEO & WordPress Project",
    description: "Redesigned and optimized a business website using WordPress.",
    longDescription: "Redesigned and optimized a business website using WordPress, improving SEO ranking and site performance. Collaborated directly with client to align technical execution with business goals. Gained experience in web development workflow, client communication, and usability optimization.",
    ...findImage("project-1"),
    status: "Completed",
    technologies: ["WordPress", "SEO", "Client Communication"],
    date: "2025-01-01",
  },
];
