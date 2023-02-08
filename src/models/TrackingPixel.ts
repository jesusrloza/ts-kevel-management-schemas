import { z } from 'zod'

export const TrackingPixelSchema = z.object({
  trackingCode: z.string().optional(),
})

export type TrackingPixelSchema = z.infer<typeof TrackingPixelSchema>

export interface TrackingPixel {
  trackingCode?: string
}
