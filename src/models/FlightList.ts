import { z } from 'zod'
import { FlightSchema } from './Flight'
import { ListSchema } from './base/List'

export const FlightListSchema = ListSchema.extend({
  items: z.array(FlightSchema).optional(),
})

export type FlightListSchema = z.infer<typeof FlightListSchema>
