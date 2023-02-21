import { z } from 'zod'
import { CreativeTemplateSchema } from './CreativeTemplate'
import { ListSchema } from './base/List'

export const CreativeTemplateListSchema = ListSchema.extend({
  items: z.array(CreativeTemplateSchema).default([]),
})

export type CreativeTemplateListSchema = z.infer<typeof CreativeTemplateListSchema>
