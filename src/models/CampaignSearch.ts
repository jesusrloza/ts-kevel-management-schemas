import { z } from 'zod'

export const CampaignSearchSchema = z.object({
  campaignName: z.string().optional(),
})

export type CampaignSearchSchema = z.infer<typeof CampaignSearchSchema>
