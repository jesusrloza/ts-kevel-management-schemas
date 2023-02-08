import { z } from 'zod'

export const BehavioralTargetOnClickSchema = z.object({
  stopShowingAdsFromFlight: z.boolean().optional().nullable(),
  stopShowingAdsFromAdvertiser: z.boolean().optional().nullable(),
  storeCategoriesFromFlightAsInterest: z.boolean().optional().nullable(),
})

export type BehavioralTargetOnClickSchema = z.infer<typeof BehavioralTargetOnClickSchema>

export interface BehavioralTargetOnClick {
  stopShowingAdsFromFlight?: boolean | null
  stopShowingAdsFromAdvertiser?: boolean | null
  storeCategoriesFromFlightAsInterest?: boolean | null
}
