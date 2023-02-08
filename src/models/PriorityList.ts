import { z } from 'zod'
import { Priority, PrioritySchema } from './Priority'
import { ListSchema } from './base/List'

export const PriorityListSchema = ListSchema.extend({
  items: z.array(PrioritySchema).optional(),
})

export type PriorityListSchema = z.infer<typeof PriorityListSchema>

export interface PriorityList {
  page?: number
  pageSize?: number
  totalPages?: number
  totalItems?: number
  items?: Array<Priority>
}
