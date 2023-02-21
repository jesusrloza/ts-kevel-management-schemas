import { z } from 'zod'
import { PrioritySchema } from './Priority'
import { ListSchema } from './base/List'

export const PriorityListSchema = ListSchema.extend({
  items: z.array(PrioritySchema).default([]),
})

export type PriorityListSchema = z.infer<typeof PriorityListSchema>
