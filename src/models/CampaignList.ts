import { z } from 'zod'
import { Campaign, CampaignSchema } from './Campaign'
import { ListSchema } from './base/List'

export const CampaignListSchema = ListSchema.extend({
  items: z.array(CampaignSchema).optional(),
})

export type CampaignListSchema = z.infer<typeof CampaignListSchema>

export interface CampaignList {
  page?: number
  pageSize?: number
  totalPages?: number
  totalItems?: number
  items?: Array<Campaign>
}
