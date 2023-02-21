import { z } from 'zod'
import { ChannelSchema } from './Channel'
import { ListSchema } from './base/List'

export const ChannelListSchema = ListSchema.extend({
  items: z.array(ChannelSchema).default([]),
})

export type ChannelListSchema = z.infer<typeof ChannelListSchema>
