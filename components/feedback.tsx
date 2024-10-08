"use client";

import { useRef } from "react";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { submitFeedback } from "@/lib/actions/generateFeedback";
import { useFormStatus } from "react-dom";
import { toast } from "sonner";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending}>
      {pending ? "Submitting..." : "Submit"}
    </Button>
  );
}

export default function Feedback() {
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(formData: FormData) {
    const result = await submitFeedback(formData);
    if (result.error) {
      toast.error(result.error);
    } else if (result.success) {
      toast.success(result.success);
      formRef.current?.reset();
      alert("Feedback Submitted!");
    }
  }

  return (
    <form
      ref={formRef}
      action={handleSubmit}
      className="flex flex-col items-center gap-6"
    >
      <h1 className="mt-10 text-3xl font-bold">Feedback</h1>
      <Textarea
        name="feedback"
        required
        placeholder="Enter your feedback here."
        className="mx-4 h-[20rem] w-full sm:w-[50%]"
      />
      <SubmitButton />
    </form>
  );
}
