"use client";

import type { Project } from "@/lib/types";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Github, ExternalLink, Code } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Dialog>
      <Card className="flex flex-col h-full overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1">
        <CardHeader>
          <div className="flex justify-between items-start gap-4">
            <CardTitle className="font-headline">{project.title}</CardTitle>
            <Badge
              variant="outline"
              className={cn("shrink-0", {
                "border-green-500/50 text-green-600": project.status === "Completed",
                "border-blue-500/50 text-blue-600": project.status === "In Development",
                "border-amber-500/50 text-amber-600": project.status === "On Hold",
              })}
            >
              {project.status}
            </Badge>
          </div>
          <CardDescription className="line-clamp-2">{project.description}</CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
          <DialogTrigger asChild>
            <div className="relative aspect-video w-full cursor-pointer">
              <Image
                src={project.imageUrl}
                alt={`Screenshot of ${project.title}`}
                fill
                className="object-cover rounded-md"
                data-ai-hint={project.imageHint}
              />
            </div>
          </DialogTrigger>
        </CardContent>
        <CardFooter>
          <DialogTrigger asChild>
            <Button variant="secondary" className="w-full">
              View Details
            </Button>
          </DialogTrigger>
        </CardFooter>
      </Card>
      
      <DialogContent className="sm:max-w-[625px]">
        <DialogHeader>
          <DialogTitle className="font-headline text-2xl">{project.title}</DialogTitle>
          <DialogDescription>{project.description}</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="relative aspect-video w-full">
            <Image
              src={project.imageUrl}
              alt={`Screenshot of ${project.title}`}
              fill
              className="object-cover rounded-md"
              data-ai-hint={project.imageHint}
            />
          </div>
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">{project.longDescription}</p>
            <div>
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <Code className="w-4 h-4 text-primary" />
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary">{tech}</Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
        <DialogFooter>
          <div className="flex w-full justify-end gap-2">
            {project.repoUrl && (
              <Button asChild variant="outline">
                <Link href={project.repoUrl} target="_blank">
                  <Github />
                  GitHub
                </Link>
              </Button>
            )}
            {project.liveUrl && (
              <Button asChild>
                <Link href={project.liveUrl} target="_blank">
                  <ExternalLink />
                  Live Demo
                </Link>
              </Button>
            )}
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
