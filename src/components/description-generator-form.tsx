"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState } from "react";
import { Wand2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { generateDescriptionAction } from "@/app/actions";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const formSchema = z.object({
  projectSummary: z.string().min(10, { message: "Summary must be at least 10 characters." }),
  keywords: z.string().min(3, { message: "Please provide at least one keyword." }),
});

export function DescriptionGeneratorForm() {
  const { toast } = useToast();
  const [generatedDescription, setGeneratedDescription] = useState<string>("");
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      projectSummary: "",
      keywords: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setGeneratedDescription("");
    const result = await generateDescriptionAction(values);

    if (result.success && result.description) {
      setGeneratedDescription(result.description);
      toast({
        title: "Description Generated!",
        description: "Your new project description is ready below.",
      });
    } else {
      toast({
        variant: "destructive",
        title: "Generation Failed",
        description: result.message || "There was a problem generating the description.",
      });
    }
  }

  return (
    <div className="space-y-8">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="projectSummary"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Project Summary</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="e.g., A real-time chat application using WebSockets and React."
                    className="min-h-[100px]"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Provide a short, one-sentence summary of your project.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="keywords"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Keywords</FormLabel>
                <FormControl>
                  <Input placeholder="React, WebSockets, Node.js, Real-time" {...field} />
                </FormControl>
                <FormDescription>
                  Comma-separated keywords that describe the tech or features.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full" disabled={form.formState.isSubmitting}>
            {form.formState.isSubmitting ? "Generating..." : <>Generate Description <Wand2 className="ml-2"/></>}
          </Button>
        </form>
      </Form>
      
      {generatedDescription && (
        <Card>
          <CardHeader>
            <CardTitle>Generated Description</CardTitle>
          </CardHeader>
          <CardContent>
            <Textarea 
              readOnly 
              value={generatedDescription}
              className="min-h-[200px] text-base"
            />
          </CardContent>
        </Card>
      )}
    </div>
  );
}
