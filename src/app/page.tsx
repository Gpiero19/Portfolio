"use client";

import * as React from "react";
import { projects as allProjects } from "@/lib/data";
import { ProjectCard } from "@/components/project-card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { Project, ProjectStatus } from "@/lib/types";

export default function Home() {
  const [projects, setProjects] = React.useState<Project[]>(allProjects);
  const [statusFilter, setStatusFilter] = React.useState<ProjectStatus | "all">(
    "all"
  );
  const [techFilter, setTechFilter] = React.useState<string>("all");
  const [sortOrder, setSortOrder] = React.useState<"newest" | "oldest">(
    "newest"
  );

  const technologies = React.useMemo(() => {
    const allTechs = allProjects.flatMap((p) => p.technologies);
    return [...new Set(allTechs)].sort();
  }, []);

  React.useEffect(() => {
    let filtered = allProjects;

    if (statusFilter !== "all") {
      filtered = filtered.filter((p) => p.status === statusFilter);
    }

    if (techFilter !== "all") {
      filtered = filtered.filter((p) => p.technologies.includes(techFilter));
    }

    const sorted = [...filtered].sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return sortOrder === "newest" ? dateB - dateA : dateA - dateB;
    });

    setProjects(sorted);
  }, [statusFilter, techFilter, sortOrder]);

  return (
    <div className="container mx-auto px-4 py-8 sm:py-12">
      <header className="mb-12 text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight text-primary sm:text-5xl lg:text-6xl">
          Developer Project Showcase
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
          Welcome to my launchpad. Explore my journey from concept to
          completion, with real-time project statuses and tech stacks.
        </p>
      </header>

      <div className="mb-8 flex flex-col sm:flex-row gap-4 justify-center">
        <Select
          onValueChange={(value) => setStatusFilter(value as ProjectStatus | "all")}
          defaultValue="all"
        >
          <SelectTrigger className="w-full sm:w-[180px]">
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Statuses</SelectItem>
            <SelectItem value="Completed">Completed</SelectItem>
            <SelectItem value="In Development">In Development</SelectItem>
            <SelectItem value="On Hold">On Hold</SelectItem>
          </SelectContent>
        </Select>

        <Select
          onValueChange={(value) => setTechFilter(value)}
          defaultValue="all"
        >
          <SelectTrigger className="w-full sm:w-[180px]">
            <SelectValue placeholder="Filter by technology" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Technologies</SelectItem>
            {technologies.map((tech) => (
              <SelectItem key={tech} value={tech}>
                {tech}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select
          onValueChange={(value) => setSortOrder(value as "newest" | "oldest")}
          defaultValue="newest"
        >
          <SelectTrigger className="w-full sm:w-[180px]">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="newest">Newest First</SelectItem>
            <SelectItem value="oldest">Oldest First</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      {projects.length === 0 && (
        <div className="text-center col-span-full py-16">
          <p className="text-muted-foreground">No projects match the current filters.</p>
        </div>
      )}
    </div>
  );
}
