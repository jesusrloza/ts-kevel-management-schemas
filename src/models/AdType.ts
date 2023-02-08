import { z } from 'zod'

export const AdTypeSchema = z.object({
  id: z.number().optional().nullable(),
  width: z.number().optional(),
  height: z.number().optional(),
  name: z.string().optional().nullable(),
})

export type AdTypeSchema = z.infer<typeof AdTypeSchema>

export interface AdType {
  id?: number | null
  width?: number
  height?: number
  name?: string | null
}
