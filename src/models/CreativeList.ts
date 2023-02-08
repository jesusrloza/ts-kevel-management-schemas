import { z } from 'zod'
import { CreativeSchema } from './Creative'
import { ListSchema } from './base/List'

export const CreativeListSchema = ListSchema.extend({
  items: z.array(CreativeSchema).optional(),
})

export type CreativeListSchema = z.infer<typeof CreativeListSchema>
