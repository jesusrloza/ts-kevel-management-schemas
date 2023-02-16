import { z } from 'zod'
import { CreativeTemplateContentsSchema } from './CreativeTemplateContents'
import { CreativeTemplateFieldSchema } from './CreativeTemplateField'

export const CreativeTemplateSchema = z.object({
  Name: z.string(),
  Description: z.string(),
  Id: z.number().optional(),
  IsArchived: z.boolean().optional(),
  Fields: z.array(CreativeTemplateFieldSchema).optional(),
  Contents: z.array(CreativeTemplateContentsSchema).optional(),
})

export type CreativeTemplateSchema = z.infer<typeof CreativeTemplateSchema>
