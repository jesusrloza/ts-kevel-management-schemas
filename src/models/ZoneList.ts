import { z } from 'zod'
import { Zone, ZoneSchema } from '..'

export const ZoneListSchema = z.object({
  page: z.number().optional(),
  pageSize: z.number().optional(),
  totalPages: z.number().optional(),
  totalItems: z.number().optional(),
  items: z.array(ZoneSchema).optional(),
})

export type ZoneListSchema = z.infer<typeof ZoneListSchema>

export interface ZoneList {
  page?: number
  pageSize?: number
  totalPages?: number
  totalItems?: number
  items?: Array<Zone>
}
