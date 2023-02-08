import { z } from 'zod'
import { CapTypeEnum, FrequencyCapTypeEnum } from './base/enums'

export const AdvertiserSchema = z.object({
  Title: z.string(),
  IsActive: z.boolean().default(false),
  PlacementLimit: z.number().optional().nullable(),
  FreqCap: z.number().optional().nullable(),
  FreqCapDuration: z.number().optional().nullable(),
  FreqCapType: FrequencyCapTypeEnum.optional().nullable(),
  CapType: CapTypeEnum.default(4).nullable(),
  DailyCapAmount: z.number().optional().nullable(),
  LifetimeCapAmount: z.number().optional().nullable(),
  IsDeleted: z.boolean().default(false),
  IsFreqCap: z.boolean().optional().nullable(),
  RtbCustomFields: z.string().optional().nullable(),
  PartnerId: z.number().optional().nullable(),
  Id: z.number().optional().nullable(),
})

export type AdvertiserSchema = z.infer<typeof AdvertiserSchema>

export interface Advertiser {
  title: string
  isActive: boolean
  placementLimit?: number | null
  freqCap?: number | null
  freqCapDuration?: number | null
  freqCapType?: number | null
  capType?: number | null
  dailyCapAmount?: number | null
  lifetimeCapAmount?: number | null
  isDeleted?: boolean
  isFreqCap?: boolean | null
  rtbCustomFields?: string | null
  partnerId?: number | null
  id?: number | null
}
