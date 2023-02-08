import { z } from 'zod'
import { ChannelSiteMap, ChannelSiteMapSchema } from './ChannelSiteMap'

export const ChannelSiteMapListSchema = z.object({
  page: z.number().optional(),
  pageSize: z.number().optional(),
  totalPages: z.number().optional(),
  totalItems: z.number().optional(),
  items: z.array(ChannelSiteMapSchema).optional(),
})

export type ChannelSiteMapListSchema = z.infer<typeof ChannelSiteMapListSchema>

export interface ChannelSiteMapList {
  page?: number
  pageSize?: number
  totalPages?: number
  totalItems?: number
  items?: Array<ChannelSiteMap>
}
