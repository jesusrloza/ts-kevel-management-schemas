import { z } from 'zod'
import { CreativeSchema } from './Creative'
import { DistributionTypeEnum, FrequencyCapTypeEnum, GoalTypeEnum } from './base/enums'
import { DateSchema } from './base/Date'

export const AdSchema = z.object({
  CampaignId: z.number().nullable(),
  Creative: CreativeSchema,
  FlightId: z.number().nullable(),
  Id: z.number().optional(),
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
  StartDateISO: DateSchema.optional().nullable(),
  EndDateISO: DateSchema.optional().nullable(),
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
