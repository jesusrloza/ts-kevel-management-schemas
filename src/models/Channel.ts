import { z } from 'zod'

export const ChannelSchema = z.object({
  title: z.string().optional(),
  adTypes: z.array(z.number()).optional(),
  isDeleted: z.boolean().optional().nullable(),
  engine: z.string().optional().nullable(),
  cPM: z.number().optional(),
  id: z.number().optional().nullable(),
  commission: z.number().optional().nullable(),
  customTargeting: z.string().optional().nullable(),
  keywords: z.string().optional().nullable(),
})

export type ChannelSchema = z.infer<typeof ChannelSchema>

export interface Channel {
  title?: string
  adTypes?: Array<number>
  isDeleted?: boolean | null
  engine?: string | null
  cPM?: number
  id?: number | null
  commission?: number | null
  customTargeting?: string | null
  keywords?: string | null
}
