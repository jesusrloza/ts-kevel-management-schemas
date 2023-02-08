import { z } from 'zod'
import { Advertiser, AdvertiserSchema } from './Advertiser'
import { ListSchema } from './base/List'

export const AdvertiserListSchema = ListSchema.extend({
  items: z.array(AdvertiserSchema).optional(),
})
export type AdvertiserListSchema = z.infer<typeof AdvertiserListSchema>

export interface AdvertiserList {
  page?: number
  pageSize?: number
  totalPages?: number
  totalItems?: number
  items?: Array<Advertiser>
}
