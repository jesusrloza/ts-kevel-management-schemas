import { z } from 'zod'
import { AdType, AdTypeSchema } from './AdType'
import { ListSchema } from './base/List'

export const AdTypeListSchema = ListSchema.extend({
  items: z.array(AdTypeSchema).optional(),
})

export type AdTypeListSchema = z.infer<typeof AdTypeListSchema>

export interface AdTypeList {
  page?: number
  pageSize?: number
  totalPages?: number
  totalItems?: number
  items?: Array<AdType>
}
