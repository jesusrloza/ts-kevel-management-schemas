import { z } from 'zod'
import { CreativeSchema, Creative } from './Creative'
import { DistributionTypeEnum, FrequencyCapTypeEnum, GoalTypeEnum } from './base/enums'

export const AdSchema = z.object({
  CampaignId: z.number().nullable(),
  Creative: CreativeSchema,
  FlightId: z.number().nullable(),
  Id: z.number().optional().nullable(),
  IsActive: z.boolean().default(false),
  RtbCustomFields: z.string().optional().nullable(),
  ActiveKeywords: z.array(z.string()).optional(),
  CustomTargeting: z.string().optional().nullable(),
  DistributionType: DistributionTypeEnum.optional(),
  Percentage: z.number().optional().nullable(),
  Impressions: z.number().optional().nullable(),
  SiteId: z.number().optional().nullable(),
  ZoneId: z.number().optional().nullable(),
  IsDeleted: z.boolean().optional().nullable(),
  Iframe: z.boolean().optional().nullable(),
  SizeOverride: z.boolean().default(false),
  IsStartEndDateOverride: z.boolean().optional().nullable(),
  StartDateISO: z.string().datetime().optional().nullable(),
  EndDateISO: z.string().datetime().optional().nullable(),
  IsGoalOverride: z.boolean().optional().nullable(),
  GoalType: GoalTypeEnum.optional().nullable(),
  Goal: z.number().optional().nullable(),
  IsNetworkAd: z.boolean().optional().nullable(),
  IsNoTrack: z.boolean().optional().nullable(),
  DontAffectParentFreqCap: z.boolean().optional().nullable(),
  FreqCap: z.number().optional().nullable(),
  FreqCapDuration: z.number().optional().nullable(),
  FreqCapType: FrequencyCapTypeEnum.optional().nullable(),
})

export type AdSchema = z.infer<typeof AdSchema>

export interface Ad {
  campaignId: number | null
  creative: Creative
  flightId: number | null
  id?: number | null
  isActive: boolean | null
  rtbCustomFields?: string | null
  activeKeywords?: Array<string> | null
  customTargeting?: string | null
  distributionType?: number
  percentage?: number | null
  impressions?: number | null
  siteId?: number | null
  zoneId?: number | null
  isDeleted?: boolean | null
  iframe?: boolean | null
  sizeOverride?: boolean | null
  isStartEndDateOverride?: boolean | null
  startDateISO?: Date | null
  endDateISO?: Date | null
  isGoalOverride?: boolean | null
  goalType?: number | null
  goal?: number | null
  isNetworkAd?: boolean | null
  isNoTrack?: boolean | null
  dontAffectParentFreqCap?: boolean | null
  freqCap?: number | null
  freqCapDuration?: number | null
  freqCapType?: number | null
}
