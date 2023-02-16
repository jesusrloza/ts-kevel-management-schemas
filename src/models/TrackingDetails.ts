import { z } from 'zod'

export const TrackingDetailsSchema = z.object({
  Id: z.number().optional(),
  StaticClickUrl: z.string().optional(),
  ImpressionPixelUrl: z.string().optional(),
})

export type TrackingDetailsSchema = z.infer<typeof TrackingDetailsSchema>
