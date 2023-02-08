import { z } from 'zod'

export const ChannelList2Schema = z.object({
  channelIds: z.array(z.number()).optional(),
})

export type ChannelList2Schema = z.infer<typeof ChannelList2Schema>

export interface ChannelList2 {
  channelIds?: Array<number>
}
