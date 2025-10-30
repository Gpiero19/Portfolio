import { DescriptionGeneratorForm } from "@/components/description-generator-form";

export default function GeneratorPage() {
  return (
    <div className="container mx-auto px-4 py-8 sm:py-16">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight text-primary sm:text-5xl">
          AI Project Description Generator
        </h1>
        <p className="mt-4 text-lg text-foreground/80">
          Struggling to find the right words? Provide a brief summary and some keywords, and let our AI craft a compelling project description for you.
        </p>
      </div>

      <div className="max-w-2xl mx-auto mt-12">
        <DescriptionGeneratorForm />
      </div>
    </div>
  );
}
