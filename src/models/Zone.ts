import { z } from 'zod'

export const ZoneSchema = z.object({
  id: z.number().optional().nullable(),
  name: z.string().optional(),
  siteId: z.number().optional(),
  isDeleted: z.boolean().optional().nullable(),
})

export type ZoneSchema = z.infer<typeof ZoneSchema>
