import { z } from 'zod'
import { BehavioralTargetOnClickSchema } from './BehavioralTargetOnClick'

export const BehavioralTargetSchema = z.object({
  onClick: BehavioralTargetOnClickSchema.optional(),
  onConvert: BehavioralTargetOnClickSchema.optional(),
})

export type BehavioralTargetSchema = z.infer<typeof BehavioralTargetSchema>
