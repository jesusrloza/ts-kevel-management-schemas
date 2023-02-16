import { z } from 'zod'

export const InlineObjectSchema = z.object({
  file: z.any().optional(),
})

export type InlineObjectSchema = z.infer<typeof InlineObjectSchema>

// export interface InlineObject {
//   file?: Blob
// }
