import { z } from 'zod'
import { Creative, CreativeSchema } from './Creative'
import { ListSchema } from './base/List'

export const CreativeListSchema = ListSchema.extend({
  items: z.array(CreativeSchema).optional(),
})

export type CreativeListSchema = z.infer<typeof CreativeListSchema>

export interface CreativeList {
  page?: number
  pageSize?: number
  totalPages?: number
  totalItems?: number
  items?: Array<Creative>
}
