import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Rocket } from 'lucide-react';

export default function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/40">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
            <Link href="/" className="flex items-center space-x-2">
              <Rocket className="h-6 w-6 text-primary" />
              <span className="font-bold font-headline sm:inline-block text-lg">
                Gian Piero Canevari
              </span>
            </Link>
            <p className="text-sm text-muted-foreground text-center">
              &copy; {currentYear} Gian Piero Canevari. All rights reserved.
            </p>
            <div className="flex gap-1">
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://github.com/gpiero19" target="_blank" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://linkedin.com/in/canevarigian" target="_blank" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </Link>
              </Button>
               <Button variant="ghost" size="icon" asChild>
                <Link href="mailto:canevarigian@gmail.com" target="_blank" aria-label="Email">
                  <Mail className="h-5 w-5" />
                </Link>
              </Button>
            </div>
        </div>
      </div>
    </footer>
  );
}
