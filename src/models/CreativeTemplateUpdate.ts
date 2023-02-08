import { z } from 'zod'
import { CreativeTemplateUpdateOperationSchema } from './CreativeTemplateUpdateOperation'

export const CreativeTemplateUpdateSchema = z.object({
  updates: z.array(CreativeTemplateUpdateOperationSchema).optional(),
})

export type CreativeTemplateUpdateSchema = z.infer<typeof CreativeTemplateUpdateSchema>
