import { z } from 'zod'

export const CreativeSchema = z.object({
  AdvertiserId: z.number().nullable(),
  AdTypeId: z.number().nullable(),
  IsActive: z.boolean(),
  Id: z.number().optional(),
  Title: z.string().optional().nullable(),
  ImageName: z.string().optional().nullable(),
  Body: z.string().default(''),
  Url: z.string().max(2000).optional().nullable(),
  Alt: z.string().optional().nullable(),
  IsDeleted: z.boolean().optional().nullable(),
  IsHTMLJS: z.boolean().optional().nullable(),
  ScriptBody: z.string().optional().nullable(),
  Metadata: z.string().optional().nullable(),
  ImageLink: z.string().optional().nullable(),
  SaveEmptyCreative: z.boolean().optional().nullable(),
  IsNoTrack: z.boolean().optional().nullable(),
  IsNetworkAd: z.boolean().optional().nullable(),
  TemplateId: z.number().optional().nullable(),
  TemplateValues: z.string().optional().nullable(),
})

export type CreativeSchema = z.infer<typeof CreativeSchema>
