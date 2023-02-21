import { z } from 'zod'
import { FlightSchema } from './Flight'
import { ListSchema } from './base/List'

export const FlightListSchema = ListSchema.extend({
  items: z.array(FlightSchema).default([]),
})

export type FlightListSchema = z.infer<typeof FlightListSchema>
