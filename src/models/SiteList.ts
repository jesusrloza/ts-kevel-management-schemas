import { z } from 'zod'
import { Site, SiteSchema } from '..'
import { ListSchema } from './base/List'

export const SiteListSchema = ListSchema.extend({
  items: z.array(SiteSchema).optional(),
})

export type SiteListSchema = z.infer<typeof SiteListSchema>
export interface SiteList {
  page?: number
  pageSize?: number
  totalPages?: number
  totalItems?: number
  items?: Array<Site>
}
