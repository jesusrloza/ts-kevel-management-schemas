import { z } from 'zod'
import { Channel, ChannelSchema } from './Channel'
import { ListSchema } from './base/List'

export const ChannelListSchema = ListSchema.extend({
  items: z.array(ChannelSchema).optional(),
})

export type ChannelListSchema = z.infer<typeof ChannelListSchema>

export interface ChannelList {
  page?: number
  pageSize?: number
  totalPages?: number
  totalItems?: number
  items?: Array<Channel>
}
