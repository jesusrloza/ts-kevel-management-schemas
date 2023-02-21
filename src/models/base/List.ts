import { z } from 'zod'

export const ListSchema = z.object({
  page: z.number(),
  pageSize: z.number(),
  totalPages: z.number(),
  totalItems: z.number(),
})

export type ListSchema = z.infer<typeof ListSchema>
