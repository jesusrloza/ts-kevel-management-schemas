import { z } from 'zod'

export const TrackingPixelSchema = z.object({
  TrackingCode: z.string().optional(),
})

export type TrackingPixelSchema = z.infer<typeof TrackingPixelSchema>
