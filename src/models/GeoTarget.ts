import { z } from 'zod'

export const GeoTargetSchema = z.object({
  CountryCode: z.string().optional(),
  Region: z.string().optional(),
  MetroCode: z.number().optional(),
  IsExclude: z.boolean().default(false).nullable(),
  LocationId: z.number().optional().nullable(),
})

export type GeoTargetSchema = z.infer<typeof GeoTargetSchema>

export interface GeoTarget {
  countryCode?: string
  region?: string
  metroCode?: number
  isExclude?: boolean | null
  locationId?: number | null
}
