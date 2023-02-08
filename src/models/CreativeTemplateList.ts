import { z } from 'zod'
import { CreativeTemplate, CreativeTemplateSchema } from './CreativeTemplate'
import { ListSchema } from './base/List'

export const CreativeTemplateListSchema = ListSchema.extend({
  items: z.array(CreativeTemplateSchema).optional(),
})

export type CreativeTemplateListSchema = z.infer<typeof CreativeTemplateListSchema>

export interface CreativeTemplateList {
  page?: number
  pageSize?: number
  totalPages?: number
  totalItems?: number
  items?: Array<CreativeTemplate>
}
