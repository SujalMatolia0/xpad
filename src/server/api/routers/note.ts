import { eq } from "drizzle-orm";
import { CreateNoteInput, GetNote, UpdateNoteInput } from "~/lib/zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { NoteSchema } from "~/server/db/schema";

export const notesRouter = createTRPCRouter({
  create: publicProcedure
    .input(CreateNoteInput)
    .mutation(async ({ ctx, input }) => {
      try {
        const validatedInput = CreateNoteInput.parse(input);

        await ctx.db.insert(NoteSchema).values({
          title: validatedInput.title,
          content: validatedInput.content,
        });
      } catch (error) {
        throw new Error("Failed to create note");
      }
    }),

  list: publicProcedure.query(async ({ ctx }) => {
    const listNote = await ctx.db.query.NoteSchema.findMany();
    return listNote;
  }),

  get: publicProcedure.input(GetNote).query(async ({ ctx, input }) => {
    

    const note = await ctx.db.query.NoteSchema.findFirst({
      where: (note, { eq}) => {
        return eq(note.id, input.id);
      },
    });

    return note;
  }),

  update: publicProcedure
    .input(UpdateNoteInput)
    .mutation(async ({ ctx, input }) => {
      const existingNote = await ctx.db.query.NoteSchema.findFirst({
       where:(note, {eq}) => {
        return eq(note.id, input.id)
       }
      });

      if (!existingNote) {
        throw new Error(
          "Note not found or you don't have permission to update it"
        );
      }

      await ctx.db
        .update(NoteSchema)
        .set({
          title: input.title,
          content: input.content,
        })
        .where( eq( NoteSchema.id, input.id)); 
    }),
});
