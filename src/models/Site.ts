import { z } from 'zod'

export const SiteSchema = z.object({
  id: z.number().optional().nullable(),
  title: z.string().optional(),
  url: z.string().optional(),
  networkMargin: z.number().optional().nullable(),
  isDeleted: z.boolean().optional().nullable(),
  publisherAccountId: z.number().optional().nullable(),
})

export type SiteSchema = z.infer<typeof SiteSchema>
