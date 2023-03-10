import { z } from 'zod'
import { AdSchema } from './Ad'
import { ListSchema } from './base/List'

export const AdListSchema = ListSchema.extend({
  items: z.array(AdSchema).default([]),
})

export type AdListSchema = z.infer<typeof AdListSchema>
