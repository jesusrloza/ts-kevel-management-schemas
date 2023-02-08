import { z } from 'zod'
import { Ad, AdSchema } from './Ad'
import { ListSchema } from './base/List'

export const AdListSchema = ListSchema.extend({
  items: z.array(AdSchema).optional(),
})

export type AdListSchema = z.infer<typeof AdListSchema>

export interface AdList {
  page?: number
  pageSize?: number
  totalPages?: number
  totalItems?: number
  items?: Array<Ad>
}
