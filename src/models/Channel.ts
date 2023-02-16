import { z } from 'zod'

export const ChannelSchema = z.object({
  Title: z.string().optional(),
  AdTypes: z.array(z.number()).optional(),
  IsDeleted: z.boolean().optional().nullable(),
  Engine: z.string().optional().nullable(),
  CPM: z.number().optional(),
  Id: z.number().optional(),
  Commission: z.number().optional().nullable(),
  CustomTargeting: z.string().optional().nullable(),
  Keywords: z.string().optional().nullable(),
})

export type ChannelSchema = z.infer<typeof ChannelSchema>
