import { z } from 'zod'

export const SiteSchema = z.object({
  Id: z.number().optional(),
  Title: z.string().optional(),
  Url: z.string().optional(),
  NetworkMargin: z.number().optional().nullable(),
  IsDeleted: z.boolean().optional().nullable(),
  PublisherAccountId: z.number().optional().nullable(),
})

export type SiteSchema = z.infer<typeof SiteSchema>
