import { z } from 'zod'
import { SelectionAlgorithmEnum } from './base/enums'

export const PrioritySchema = z.object({
  name: z.string().optional(),
  isAdChainOptimized: z.boolean().optional(),
  isAdChainOrdered: z.boolean().optional(),
  isAdChain: z.boolean().optional(),
  isAuction: z.boolean().optional(),
  isDeleted: z.boolean().optional(),
  selectionAlgorithm: SelectionAlgorithmEnum.optional(),
  // selectionAlgorithm: z.number().optional(),
  channelId: z.number().optional().nullable(),
  weight: z.number().optional().nullable(),
  id: z.number().optional().nullable(),
  isSecondPricing: z.boolean().optional().nullable(),
  passbackTimeout: z.number().optional().nullable(),
  relevancyScoreConfig: z.string().optional().nullable(),
  serializeRelevancyScoreConfigJSON: z.boolean().optional().nullable(),
  isKeywordOptimized: z.boolean().optional().nullable(),
  floorPrice: z.number().optional().nullable(),
  relevancyScoreConfigJSON: z.string().optional().nullable(),
})

export type PrioritySchema = z.infer<typeof PrioritySchema>

export interface Priority {
  name?: string
  isAdChainOptimized?: boolean
  isAdChainOrdered?: boolean
  isAdChain?: boolean
  isAuction?: boolean
  isDeleted?: boolean
  selectionAlgorithm?: number
  channelId?: number | null
  weight?: number | null
  id?: number | null
  isSecondPricing?: boolean | null
  passbackTimeout?: number | null
  relevancyScoreConfig?: string | null
  serializeRelevancyScoreConfigJSON?: boolean | null
  isKeywordOptimized?: boolean | null
  floorPrice?: number | null
  relevancyScoreConfigJSON?: string | null
}
