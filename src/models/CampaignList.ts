import { z } from 'zod'
import { CampaignSchema } from './Campaign'
import { ListSchema } from './base/List'

export const CampaignListSchema = ListSchema.extend({
  items: z.array(CampaignSchema).optional(),
})

export type CampaignListSchema = z.infer<typeof CampaignListSchema>
