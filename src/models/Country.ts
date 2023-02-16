import { z } from 'zod'
import { RegionSchema } from './Region'

export const CountrySchema = z.object({
  name: z.string().optional(),
  code: z.string().optional(),
  regions: z.record(RegionSchema).optional().nullable(),
})

export type CountrySchema = z.infer<typeof CountrySchema>
