import { z } from 'zod'

export const GeoTargetSchema = z.object({
  LocationId: z.number().optional().nullable(),
  FlightId: z.number().optional().nullable(),
  CountryCode: z.string().optional(),
  Region: z.string().optional().nullable(),
  MetroCode: z.number().optional(),
  IsExclude: z.boolean().default(false).nullable(),
})

export type GeoTargetSchema = z.infer<typeof GeoTargetSchema>
