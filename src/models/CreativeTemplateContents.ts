import { z } from 'zod'
import { CreativeTemplateContentTypeEnum } from './base/enums'

export const CreativeTemplateContentsSchema = z.object({
  type: CreativeTemplateContentTypeEnum.optional(),
  body: z.string().optional(),
})

export type CreativeTemplateContentsSchema = z.infer<typeof CreativeTemplateContentsSchema>
