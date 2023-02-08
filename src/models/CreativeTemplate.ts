import { z } from 'zod'
import { CreativeTemplateContentsSchema } from './CreativeTemplateContents'
import { CreativeTemplateFieldSchema } from './CreativeTemplateField'

export const CreativeTemplateSchema = z.object({
  name: z.string(),
  description: z.string(),
  id: z.number().optional().nullable(),
  isArchived: z.boolean().optional(),
  fields: z.array(CreativeTemplateFieldSchema).optional(),
  contents: z.array(CreativeTemplateContentsSchema).optional(),
})

export type CreativeTemplateSchema = z.infer<typeof CreativeTemplateSchema>
