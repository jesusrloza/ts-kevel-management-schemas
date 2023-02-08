import { z } from 'zod'

export const AdvertiserSearchSchema = z.object({
  advertiserName: z.string().optional(),
})

export type AdvertiserSearchSchema = z.infer<typeof AdvertiserSearchSchema>

export interface AdvertiserSearch {
  advertiserName?: string
}
