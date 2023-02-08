import { z } from 'zod'
import { CreativeTemplateContents, CreativeTemplateContentsSchema } from './CreativeTemplateContents'
import { CreativeTemplateField, CreativeTemplateFieldSchema } from './CreativeTemplateField'

export const CreativeTemplateSchema = z.object({
  name: z.string(),
  description: z.string(),
  id: z.number().optional().nullable(),
  isArchived: z.boolean().optional(),
  fields: z.array(CreativeTemplateFieldSchema).optional(),
  contents: z.array(CreativeTemplateContentsSchema).optional(),
})

export type CreativeTemplateSchema = z.infer<typeof CreativeTemplateSchema>

export interface CreativeTemplate {
  name: string
  description: string
  id?: number | null
  isArchived?: boolean
  fields?: Array<CreativeTemplateField>
  contents?: Array<CreativeTemplateContents>
}
