import { z } from 'zod'
import { Ad, AdSchema } from './Ad'
import { BehavioralTarget, BehavioralTargetSchema } from './BehavioralTarget'
import { GeoTarget, GeoTargetSchema } from './GeoTarget'
import { SiteZone, SiteZoneSchema } from './SiteZone'
import {
  CapTypeEnum,
  DeliveryStatusEnum,
  DuplicateModeEnum,
  FrequencyCapTypeEnum,
  GoalTypeEnum,
  RateTypeEnum,
} from './base/enums'

export const FlightSchema = z.object({
  Name: z.string(),
  StartDateISO: z.string().datetime().optional().nullable(),
  CampaignId: z.number(),
  PriorityId: z.number(),
  GoalType: GoalTypeEnum,
  Impressions: z.number(),
  IsActive: z.boolean(),
  Id: z.number().optional().nullable(),
  EndDateISO: z.date().optional().nullable(),
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
  IsSunday: z.boolean().optional().nullable(),
  IsMonday: z.boolean().optional().nullable(),
  IsTuesday: z.boolean().optional().nullable(),
  IsWednesday: z.boolean().optional().nullable(),
  IsThursday: z.boolean().optional().nullable(),
  IsFriday: z.boolean().optional().nullable(),
  IsSaturday: z.boolean().optional().nullable(),
  IsArchived: z.boolean().optional().nullable(),
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

export interface Flight {
  name: string
  startDateISO: Date
  campaignId: number
  priorityId: number
  goalType: number
  impressions: number
  isActive: boolean
  id?: number | null
  endDateISO?: Date | null
  noEndDate?: boolean | null
  isDeleted?: boolean
  rateType?: number | null
  price?: number | null
  capType?: number | null
  dailyCapAmount?: number | null
  dailyCapAmountDecimal?: number | null
  lifetimeCapAmount?: number | null
  lifetimeCapAmountDecimal?: number | null
  keywords?: string | null
  customTargeting?: string | null
  customFieldsJson?: string | null
  isFreqCap?: boolean | null
  freqCap?: number | null
  freqCapDuration?: number | null
  freqCapType?: number | null
  dontAffectParentFreqCap?: boolean | null
  isCompanion?: boolean | null
  isNoDuplicates?: boolean | null
  duplicateMode?: number | null
  deliveryStatus?: number | null
  isTrackingConversions?: boolean | null
  canPassback?: boolean | null
  passbackSortOrder?: number | null
  isECPMOptimized?: boolean | null
  eCPMOptimizePeriod?: number | null
  eCPMMultiplier?: number | null
  floorECPM?: number | null
  ceilingECPM?: number | null
  defaultECPM?: number | null
  eCPMBurnInImpressions?: number | null
  effectiveCPMOverride?: number | null
  datePartingStartTimeISO?: Date | null
  datePartingEndTimeISO?: Date | null
  isSunday?: boolean | null
  isMonday?: boolean | null
  isTuesday?: boolean | null
  isWednesday?: boolean | null
  isThursday?: boolean | null
  isFriday?: boolean | null
  isSaturday?: boolean | null
  isArchived?: boolean | null
  behavioralTargeting?: BehavioralTarget
  geoTargeting?: Array<GeoTarget> | null
  siteZoneTargeting?: Array<SiteZone> | null
  requireStrictLocation?: boolean | null
  creativeMaps?: Array<Ad> | null
  isTargetingOptimization?: boolean | null
  targetingOptimizationType?: number | null
  targetingOptimizationTargetType?: number | null
  targetingOptimizationTarget?: number | null
  targetingOptimizationBurnIn?: number | null
  targetingOptimizationCanMiss?: boolean | null
}
