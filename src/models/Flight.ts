import { z } from 'zod'
import { AdSchema } from './Ad'
import { BehavioralTargetSchema } from './BehavioralTarget'
import { GeoTargetSchema } from './GeoTarget'
import { SiteZoneSchema } from './SiteZone'
import {
  CapTypeEnum,
  DeliveryStatusEnum,
  DuplicateModeEnum,
  FrequencyCapTypeEnum,
  GoalTypeEnum,
  RateTypeEnum,
} from './base/enums'

const dateSchema = z.string().refine((value) => {
  const dateRegex = /^\d{4}-\d{2}-\d{2}$/
  const dateTimeRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(.\d{3})?Z?$/

  return dateRegex.test(value) || dateTimeRegex.test(value)
}, 'Expected a date or date-time string in the format YYYY-MM-DD or YYYY-MM-DDTHH:mm:ss.sssZ')

export const FlightSchema = z.object({
  Name: z.string(),
  StartDateISO: dateSchema.optional().nullable(),
  CampaignId: z.number(),
  PriorityId: z.number(),
  GoalType: GoalTypeEnum,
  Impressions: z.number(),
  IsActive: z.boolean().default(false),
  Id: z.number().optional(),
  EndDateISO: dateSchema.optional().nullable(),
  NoEndDate: z.boolean().optional().nullable(),
  IsDeleted: z.boolean().optional(),
  RateType: RateTypeEnum.optional().nullable(),
  Price: z.number().optional().nullable(),
  CapType: CapTypeEnum.optional().nullable(),
  DailyCapAmount: z.number().optional().nullable(),
  DailyCapAmountDecimal: z.number().optional().nullable(),
  LifetimeCapAmount: z.number().optional().nullable(),
  LifetimeCapAmountDecimal: z.number().optional().nullable(),
  Keywords: z.string().optional().nullable(),
  CustomTargeting: z.string().optional().nullable(),
  CustomFieldsJson: z.string().optional().nullable(),
  IsFreqCap: z.boolean().optional().nullable(),
  FreqCap: z.number().optional().nullable(),
  FreqCapDuration: z.number().optional().nullable(),
  FreqCapType: FrequencyCapTypeEnum.optional().nullable(),
  DontAffectParentFreqCap: z.boolean().optional().nullable(),
  IsCompanion: z.boolean().optional().nullable(),
  IsNoDuplicates: z.boolean().optional().nullable(),
  DuplicateMode: DuplicateModeEnum.optional().nullable(),
  DeliveryStatus: DeliveryStatusEnum.optional().nullable(),
  IsTrackingConversions: z.boolean().optional().nullable(),
  CanPassback: z.boolean().optional().nullable(),
  PassbackSortOrder: z.number().optional().nullable(),
  IsECPMOptimized: z.boolean().optional().nullable(),
  ECPMOptimizePeriod: z.number().optional().nullable(),
  ECPMMultiplier: z.number().optional().nullable(),
  FloorECPM: z.number().optional().nullable(),
  CeilingECPM: z.number().optional().nullable(),
  DefaultECPM: z.number().optional().nullable(),
  ECPMBurnInImpressions: z.number().optional().nullable(),
  EffectiveCPMOverride: z.number().optional().nullable(),
  DatePartingStartTimeISO: z.date().optional().nullable(),
  DatePartingEndTimeISO: z.date().optional().nullable(),
  IsSunday: z.boolean().optional(),
  IsMonday: z.boolean().optional(),
  IsTuesday: z.boolean().optional(),
  IsWednesday: z.boolean().optional(),
  IsThursday: z.boolean().optional(),
  IsFriday: z.boolean().optional(),
  IsSaturday: z.boolean().optional(),
  IsArchived: z.boolean().optional(),
  BehavioralTargeting: BehavioralTargetSchema.optional(),
  GeoTargeting: z.array(GeoTargetSchema).optional(),
  SiteZoneTargeting: z.array(SiteZoneSchema).optional(),
  RequireStrictLocation: z.boolean().optional().nullable(),
  CreativeMaps: z.array(AdSchema).optional(),
  IsTargetingOptimization: z.boolean().optional().nullable(),
  TargetingOptimizationType: z.number().optional().nullable(),
  TargetingOptimizationTargetType: z.number().optional().nullable(),
  TargetingOptimizationTarget: z.number().optional().nullable(),
  TargetingOptimizationBurnIn: z.number().optional().nullable(),
  TargetingOptimizationCanMiss: z.boolean().optional().nullable(),
})

export type FlightSchema = z.infer<typeof FlightSchema>
