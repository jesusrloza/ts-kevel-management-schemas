import { z } from 'zod'

export const ChannelSiteMapSchema = z.object({
  SiteId: z.number().optional(),
  ChannelId: z.number().optional(),
  Priority: z.number().optional().nullable(),
  FixedPaymentAmount: z.number().optional().nullable(),
})

export type ChannelSiteMapSchema = z.infer<typeof ChannelSiteMapSchema>
