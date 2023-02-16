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
  channelId: z.number().optional().nullable(),
  weight: z.number().optional().nullable(),
  id: z.number().optional(),
  isSecondPricing: z.boolean().optional().nullable(),
  passbackTimeout: z.number().optional().nullable(),
  relevancyScoreConfig: z.string().optional().nullable(),
  serializeRelevancyScoreConfigJSON: z.boolean().optional().nullable(),
  isKeywordOptimized: z.boolean().optional().nullable(),
  floorPrice: z.number().optional().nullable(),
  relevancyScoreConfigJSON: z.string().optional().nullable(),
})

export type PrioritySchema = z.infer<typeof PrioritySchema>
