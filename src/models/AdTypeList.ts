import { z } from 'zod'
import { AdTypeSchema } from './AdType'
import { ListSchema } from './base/List'

export const AdTypeListSchema = ListSchema.extend({
  items: z.array(AdTypeSchema).default([]),
})

export type AdTypeListSchema = z.infer<typeof AdTypeListSchema>
