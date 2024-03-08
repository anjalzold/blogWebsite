import { Schema } from "mongoose";
import { z } from "zod";

const blogSchema = z.object({
  title: z.string({ message: "Title is required" }),
  description: z.string({ message: "Description is required" }),
  image: z.string({ message: "Image URL is required" }),
  category: z.string({ message: "Category is required" }),
});

export default blogSchema;
