import { z } from 'zod'
import { BehavioralTargetOnClick, BehavioralTargetOnClickSchema } from './BehavioralTargetOnClick'

export const BehavioralTargetSchema = z.object({
  onClick: BehavioralTargetOnClickSchema.optional(),
  onConvert: BehavioralTargetOnClickSchema.optional(),
})

export type BehavioralTargetSchema = z.infer<typeof BehavioralTargetSchema>

export interface BehavioralTarget {
  onClick?: BehavioralTargetOnClick
  onConvert?: BehavioralTargetOnClick
}
