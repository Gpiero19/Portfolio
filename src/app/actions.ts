"use server";

import { z } from "zod";
import { generateProjectDescription } from "@/ai/flows/generate-project-description";

const contactFormSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  message: z.string(),
});

export async function handleContactFormSubmission(values: z.infer<typeof contactFormSchema>) {
  const parsed = contactFormSchema.safeParse(values);

  if (!parsed.success) {
    return { success: false, message: "Invalid form data." };
  }

  // In a real application, you would send an email, save to a database, etc.
  console.log("New contact form submission:", parsed.data);

  return { success: true };
}

const generateDescriptionSchema = z.object({
    projectSummary: z.string(),
    keywords: z.string(),
});

export async function generateDescriptionAction(values: z.infer<typeof generateDescriptionSchema>) {
    const parsed = generateDescriptionSchema.safeParse(values);

    if (!parsed.success) {
        return { success: false, message: "Invalid input data." };
    }

    try {
        const result = await generateProjectDescription(parsed.data);
        return { success: true, description: result.projectDescription };
    } catch (error) {
        console.error("Error generating project description:", error);
        return { success: false, message: "Failed to generate description from AI." };
    }
}
