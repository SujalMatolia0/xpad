import { z } from "zod";

export const CreateNoteInput = z.object({
  title: z.string(),
  content: z.string(),
});

export const  UpdateNoteInput = z.object({
  id: z.number().positive(),
  title: z.string(),
  content: z.string()
}); 

export const GetNote = z.object({
  id: z.number().positive(),
});

export type UpdateNote = z.infer<typeof UpdateNoteInput>;
export type CreateNote = z.infer<typeof CreateNoteInput>