import { z } from 'zod'
import { Flight, FlightSchema } from './Flight'
import { ListSchema } from './base/List'

export const FlightListSchema = ListSchema.extend({
  items: z.array(FlightSchema).optional(),
})

export type FlightListSchema = z.infer<typeof FlightListSchema>

export interface FlightList {
  page?: number
  pageSize?: number
  totalPages?: number
  totalItems?: number
  items?: Array<Flight>
}
