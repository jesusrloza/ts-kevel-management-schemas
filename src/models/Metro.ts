import { z } from 'zod'

export const MetroSchema = z.object({
  name: z.string().optional(),
  code: z.string().optional(),
  regionCodes: z.array(z.string()).optional(),
})

export type MetroSchema = z.infer<typeof MetroSchema>

export interface Metro {
  name?: string
  code?: string
  regionCodes?: Array<string> | null
}
