import { z } from 'zod'
import {
  CreativeTemplateUpdateOperation,
  CreativeTemplateUpdateOperationSchema,
} from './CreativeTemplateUpdateOperation'

export const CreativeTemplateUpdateSchema = z.object({
  updates: z.array(CreativeTemplateUpdateOperationSchema).optional(),
})

export type CreativeTemplateUpdateSchema = z.infer<typeof CreativeTemplateUpdateSchema>

export interface CreativeTemplateUpdate {
  updates?: Array<CreativeTemplateUpdateOperation>
}
