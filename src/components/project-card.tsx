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
import { Github, ExternalLink } from "lucide-react";
import Link from "next/link";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="flex flex-col h-full overflow-hidden transition-all duration-300 border-border/60 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 bg-secondary/20">
      <CardHeader>
        <div className="relative aspect-video w-full mb-4">
            <Image
              src={project.imageUrl}
              alt={`Screenshot of ${project.title}`}
              fill
              className="object-cover rounded-md"
              data-ai-hint={project.imageHint}
            />
          </div>
        <CardTitle className="font-headline text-xl">{project.title}</CardTitle>
        <CardDescription className="line-clamp-3 text-foreground/60">{project.longDescription}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col justify-end">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="font-normal">{tech}</Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <div className="flex w-full justify-start gap-4">
          {project.repoUrl && (
            <Button asChild variant="ghost" size="sm">
              <Link href={project.repoUrl} target="_blank">
                <Github />
                Source Code
              </Link>
            </Button>
          )}
          {project.liveUrl && (
            <Button asChild variant="link" size="sm" className="p-0 h-auto">
              <Link href={project.liveUrl} target="_blank">
                <ExternalLink className="mr-2"/>
                Live Demo
              </Link>
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}
