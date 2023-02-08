import { z } from 'zod'
import { CreativeTemplateFieldTypeEnum } from './base/enums'

export const CreativeTemplateFieldSchema = z.object({
  name: z.string().optional(),
  variable: z.string().optional(),
  type: CreativeTemplateFieldTypeEnum.optional(),
  // type: z.string().optional(),
  required: z.boolean().optional(),
  description: z.string().optional(),
  hidden: z.boolean().optional(),
  _default: z.any().optional(),
})

export type CreativeTemplateFieldSchema = z.infer<typeof CreativeTemplateFieldSchema>

export interface CreativeTemplateField {
  name?: string
  variable?: string
  type?: string
  required?: boolean
  description?: string
  hidden?: boolean
  _default?: object
}
