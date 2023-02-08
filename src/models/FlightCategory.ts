import { z } from 'zod'

export const FlightCategorySchema = z.object({
  name: z.string().optional(),
  id: z.number().optional().nullable(),
})

export type FlightCategorySchema = z.infer<typeof FlightCategorySchema>
