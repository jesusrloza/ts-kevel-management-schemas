import { z } from 'zod'
import { SiteSchema } from './Site'
import { ListSchema } from './base/List'

export const SiteListSchema = ListSchema.extend({
  items: z.array(SiteSchema).default([]),
})

export type SiteListSchema = z.infer<typeof SiteListSchema>
