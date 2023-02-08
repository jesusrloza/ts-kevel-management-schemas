import { z } from 'zod'

export const ListSchema = z.object({
  page: z.number().optional(),
  pageSize: z.number().optional(),
  totalPages: z.number().optional(),
  totalItems: z.number().optional(),
})

export type ListSchema = z.infer<typeof ListSchema>
