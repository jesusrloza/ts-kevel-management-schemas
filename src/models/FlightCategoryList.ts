import { z } from 'zod'
import { FlightCategory, FlightCategorySchema } from './FlightCategory'
import { ListSchema } from './base/List'

export const FlightCategoryListSchema = ListSchema.extend({
  items: z.array(FlightCategorySchema).optional(),
})

export type FlightCategoryListSchema = z.infer<typeof FlightCategoryListSchema>

export interface FlightCategoryList {
  page?: number
  pageSize?: number
  totalPages?: number
  totalItems?: number
  items?: Array<FlightCategory>
}
