import { z } from 'zod'
import { Metro, MetroSchema } from './Metro'

export const RegionSchema = z.object({
  name: z.string().optional(),
  code: z.string().optional(),
  countryCode: z.string().optional(),
  metros: z.record(MetroSchema).optional().nullable(),
})

export type RegionSchema = z.infer<typeof RegionSchema>

export interface Region {
  name?: string
  code?: string
  countryCode?: string
  metros?: { [key: string]: Metro } | null
}
