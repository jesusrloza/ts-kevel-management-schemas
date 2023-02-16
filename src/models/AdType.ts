import { z } from 'zod'

export const AdTypeSchema = z.object({
  Id: z.number().optional(),
  Width: z.number().optional(),
  Height: z.number().optional(),
  Name: z.string().optional().nullable(),
})

export type AdTypeSchema = z.infer<typeof AdTypeSchema>
