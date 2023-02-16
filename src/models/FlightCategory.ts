import { z } from 'zod'

export const FlightCategorySchema = z.object({
  Name: z.string().optional(),
  Id: z.number().optional(),
})

export type FlightCategorySchema = z.infer<typeof FlightCategorySchema>
