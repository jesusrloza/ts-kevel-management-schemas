import { z } from 'zod'

export const SiteZoneSchema = z.object({
  Id: z.number().optional().nullable(),
  IsExcluded: z.boolean().optional(),
  SiteId: z.number().optional(),
  ZoneId: z.number().optional(),
  FlightId: z.number().optional().nullable(),
})
export type SiteZoneSchema = z.infer<typeof SiteZoneSchema>
