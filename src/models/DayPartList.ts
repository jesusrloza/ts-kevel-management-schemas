import { z } from 'zod'
import { DayPartSchema } from './DayPart'
import { ListSchema } from './base/List'

export const DayPartListSchema = ListSchema.extend({
  items: z.array(DayPartSchema).default([]),
})

export type DayPartListSchema = z.infer<typeof DayPartListSchema>
