import { z } from 'zod'
import { ListSchema } from './base/List'
import { ChannelSiteMapSchema } from './ChannelSiteMap'

export const ChannelSiteMapListSchema = ListSchema.extend({
  items: z.array(ChannelSiteMapSchema).default([]),
})

export type ChannelSiteMapListSchema = z.infer<typeof ChannelSiteMapListSchema>
