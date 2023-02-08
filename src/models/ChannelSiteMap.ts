import { z } from 'zod'

export const ChannelSiteMapSchema = z.object({
  siteId: z.number().optional(),
  channelId: z.number().optional(),
  priority: z.number().optional().nullable(),
  fixedPaymentAmount: z.number().optional().nullable(),
})

export type ChannelSiteMapSchema = z.infer<typeof ChannelSiteMapSchema>

export interface ChannelSiteMap {
  siteId?: number
  channelId?: number
  priority?: number | null
  fixedPaymentAmount?: number | null
}
