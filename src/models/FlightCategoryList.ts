import { z } from 'zod'
import { FlightCategorySchema } from './FlightCategory'
import { ListSchema } from './base/List'

export const FlightCategoryListSchema = ListSchema.extend({
  items: z.array(FlightCategorySchema).default([]),
})

export type FlightCategoryListSchema = z.infer<typeof FlightCategoryListSchema>
