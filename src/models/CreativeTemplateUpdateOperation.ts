import { z } from 'zod'
import { CreativeTemplateOperationEnum } from './base/enums'

export const CreativeTemplateUpdateOperationSchema = z.object({
  path: z.any().optional(),
  op: CreativeTemplateOperationEnum.optional(),
  value: z.any().optional(),
})

export type CreativeTemplateUpdateOperationSchema = z.infer<typeof CreativeTemplateUpdateOperationSchema>
