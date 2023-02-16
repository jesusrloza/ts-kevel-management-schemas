import { z } from 'zod'
import { AdvertiserSchema } from './Advertiser'
import { ListSchema } from './base/List'

export const AdvertiserListSchema = ListSchema.extend({
  items: z.array(AdvertiserSchema).optional(),
})

export type AdvertiserListSchema = z.infer<typeof AdvertiserListSchema>
