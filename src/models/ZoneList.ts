import { z } from 'zod'
import { ListSchema } from './base/List'
import { ZoneSchema } from './Zone'

export const ZoneListSchema = ListSchema.extend({
  items: z.array(ZoneSchema).default([]),
})

export type ZoneListSchema = z.infer<typeof ZoneListSchema>
