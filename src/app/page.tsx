"use client";

import * as React from "react";
import { projects as allProjects } from "@/lib/data";
import { ProjectCard } from "@/components/project-card";
import { Button } from "@/components/ui/button";
import { ArrowDown, Code, Server, Wrench } from "lucide-react";
import { ContactForm } from "@/components/contact-form";

export default function Home() {
  const [projects, setProjects] = React.useState(allProjects.slice(0, 4));

  return (
    <div className="container mx-auto px-4">
      {/* Hero Section */}
      <section id="home" className="flex flex-col items-center justify-center min-h-screen text-center py-20">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-headline tracking-tighter">
          <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
            Gian Piero Canevari
          </span>
        </h1>
        <p className="mt-4 text-xl md:text-2xl font-light text-foreground/80">
          Software Developer
        </p>
        <p className="mt-8 max-w-2xl text-base md:text-lg text-foreground/60">
          Software Developer with a passion for building user-focused applications and solving problems through code. Fast learner and motivated to grow within collaborative, high-impact teams.
        </p>
        <a href="#about" className="mt-12">
          <div className="flex items-center gap-2 text-foreground/60 hover:text-foreground transition-colors">
            <ArrowDown className="animate-bounce" />
            <span>Scroll to explore</span>
          </div>
        </a>
      </section>

      {/* About / Skills Section */}
      <section id="about" className="py-24">
        <div className="text-center">
          <h2 className="text-4xl font-headline font-bold">About Me</h2>
          <p className="mt-4 max-w-3xl mx-auto text-foreground/70">
            Passionate about technology and continuous learning. My early interest in games and tech sparked my curiosity to explore software development. I thrive in collaborative environments, value attention to detail, and bring discipline and resilience from my background in sports.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="border border-border/50 rounded-lg p-8">
            <Code className="mx-auto h-10 w-10 text-primary mb-4" />
            <h3 className="text-xl font-bold font-headline">Languages</h3>
            <p className="mt-2 text-foreground/60">Python, JavaScript, SQL</p>
          </div>
          <div className="border border-border/50 rounded-lg p-8">
            <Server className="mx-auto h-10 w-10 text-primary mb-4" />
            <h3 className="text-xl font-bold font-headline">Frameworks</h3>
            <p className="mt-2 text-foreground/60">Django, React, Node.js</p>
          </div>
          <div className="border border-border/50 rounded-lg p-8">
            <Wrench className="mx-auto h-10 w-10 text-primary mb-4" />
            <h3 className="text-xl font-bold font-headline">Tools</h3>
            <p className="mt-2 text-foreground/60">Git/GitHub, Docker, Power BI, Google Analytics</p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24">
        <div className="text-center">
          <h2 className="text-4xl font-headline font-bold">Featured Projects</h2>
          <p className="mt-4 max-w-3xl mx-auto text-foreground/70">
            Here are a few projects I've worked on recently.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-headline text-4xl font-bold tracking-tight text-primary">
            Get in Touch
          </h2>
          <p className="mt-4 text-lg text-foreground/80">
            Have a project in mind, a question, or just want to say hi? I'd love to hear from you.
          </p>
        </div>
        <div className="max-w-xl mx-auto mt-12">
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
