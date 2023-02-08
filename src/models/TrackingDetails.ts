import { z } from 'zod'

export const TrackingDetailsSchema = z.object({
  id: z.number().optional(),
  staticClickUrl: z.string().optional(),
  impressionPixelUrl: z.string().optional(),
})

export type TrackingDetailsSchema = z.infer<typeof TrackingDetailsSchema>
