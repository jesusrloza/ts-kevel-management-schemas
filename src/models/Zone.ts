import { z } from 'zod'

export const ZoneSchema = z.object({
  Id: z.number().optional(),
  Name: z.string().optional(),
  SiteId: z.number().optional(),
  IsDeleted: z.boolean().optional().nullable(),
})

export type ZoneSchema = z.infer<typeof ZoneSchema>
