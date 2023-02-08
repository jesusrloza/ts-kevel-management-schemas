import { z } from 'zod'

export const BehavioralTargetOnClickSchema = z.object({
  stopShowingAdsFromFlight: z.boolean().optional().nullable(),
  stopShowingAdsFromAdvertiser: z.boolean().optional().nullable(),
  storeCategoriesFromFlightAsInterest: z.boolean().optional().nullable(),
})

export type BehavioralTargetOnClickSchema = z.infer<typeof BehavioralTargetOnClickSchema>
