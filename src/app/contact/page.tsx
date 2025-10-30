import { ContactForm } from "@/components/contact-form";

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-8 sm:py-16">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight text-primary sm:text-5xl">
          Get in Touch
        </h1>
        <p className="mt-4 text-lg text-foreground/80">
          Have a project in mind, a question, or just want to say hi? I&apos;d love to hear from you.
        </p>
      </div>

      <div className="max-w-xl mx-auto mt-12">
        <ContactForm />
      </div>
    </div>
  );
}
