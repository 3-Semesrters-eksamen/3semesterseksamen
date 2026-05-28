"use server";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  message: z.string().min(5, "Message must be at least 5 characters"),
});

const actionContactUs = async (_, formData) => {
  const result = contactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  });

  if (!result.success) {
    const errors = result.error.flatten().fieldErrors;
    return {
      success: false,
      errors: {
        name: errors.name?.[0],
        email: errors.email?.[0],
        message: errors.message?.[0],
      },
    };
  }

  return {
    success: true,
    message: "Thanks for contacting us. We will get back to you as fast as possible.",
  };
};

export default actionContactUs;
