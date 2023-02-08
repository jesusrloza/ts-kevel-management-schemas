import { z } from 'zod'

const DistributionType = {
  AutoBalanced: 1,
  Percentage: 2,
  FixedImpressions: 3,
} as const
export const DistributionTypeEnum = z.nativeEnum(DistributionType)
export type DistributionTypeEnum = z.infer<typeof DistributionTypeEnum>

const GoalType = {
  Impressions: 1,
  Percentage: 2,
  Click: 3,
  Any: 7,
  LifetimeRevenue: 8,
  DailyRevenue: 9,
} as const
export const GoalTypeEnum = z.nativeEnum(GoalType)
export type GoalTypeEnum = z.infer<typeof GoalTypeEnum>

const RateType = {
  Flat: 1,
  Cpm: 2,
  Cpc: 3,
  CpaView: 4,
  CpaClick: 5,
} as const
export const RateTypeEnum = z.nativeEnum(RateType)
export type RateTypeEnum = z.infer<typeof RateTypeEnum>

const CapType = {
  Impressions: 1,
  Clicks: 2,
  Conversions: 3,
  Revenue: 4,
} as const
export const CapTypeEnum = z.nativeEnum(CapType)
export type CapTypeEnum = z.infer<typeof CapTypeEnum>

const FrequencyCapType = {
  Hour: 1,
  Day: 2,
  Minute: 3,
} as const
export const FrequencyCapTypeEnum = z.nativeEnum(FrequencyCapType)
export type FrequencyCapTypeEnum = z.infer<typeof FrequencyCapTypeEnum>

const CreativeTemplateFieldType = {
  String: 'String',
  File: 'File',
  ExternalFile: 'ExternalFile',
  Array: 'Array',
  Number: 'Number',
} as const
export const CreativeTemplateFieldTypeEnum = z.nativeEnum(CreativeTemplateFieldType)
export type CreativeTemplateFieldTypeEnum = z.infer<typeof CreativeTemplateFieldTypeEnum>

const CreativeTemplateContentType = {
  Html: 'HTML',
  JavaScript: 'JavaScript',
  JavaScriptExternal: 'JavaScriptExternal',
  Css: 'CSS',
  Raw: 'Raw',
} as const
export const CreativeTemplateContentTypeEnum = z.nativeEnum(CreativeTemplateContentType)
export type CreativeTemplateContentTypeEnum = z.infer<typeof CreativeTemplateContentTypeEnum>

const CreativeTemplateOperation = {
  Update: 'Update',
  Delete: 'Delete',
  InsertAfter: 'InsertAfter',
} as const
export const CreativeTemplateOperationEnum = z.nativeEnum(CreativeTemplateOperation)
export type CreativeTemplateOperationEnum = z.infer<typeof CreativeTemplateOperationEnum>

const DayOfTheWeek = {
  Sunday: 'SU',
  Monday: 'MO',
  Tuesday: 'TU',
  Wednesday: 'WE',
  Thursday: 'TH',
  Friday: 'FR',
  Saturday: 'SA',
} as const
export const DayOfTheWeekEnum = z.nativeEnum(DayOfTheWeek)
export type DayOfTheWeekEnum = z.infer<typeof DayOfTheWeekEnum>

const DuplicateMode = {
  Flight: 1,
  Campaign: 2,
  Advertiser: 3,
  Creative: 4,
} as const
export const DuplicateModeEnum = z.nativeEnum(DuplicateMode)
export type DuplicateModeEnum = z.infer<typeof DuplicateModeEnum>

const DeliveryStatus = {
  Pending: 0,
  Healthy: 1,
  BorderLine: 2,
  InDanger: 3,
  Finished: 4,
  Undelivered: 5,
} as const
export const DeliveryStatusEnum = z.nativeEnum(DeliveryStatus)
export type DeliveryStatusEnum = z.infer<typeof DeliveryStatusEnum>

const SelectionAlgorithm = {
  Lottery: 0,
  Auction: 1,
  AdchainOrdered: 2,
  AdchainOptimized: 3,
  LotteryWithOutbid: 4,
} as const
export const SelectionAlgorithmEnum = z.nativeEnum(SelectionAlgorithm)
export type SelectionAlgorithmEnum = z.infer<typeof SelectionAlgorithmEnum>

const SchedulingWindow = {
  EarlyMorning: 0,
  Morning: 1,
  Afternoon: 2,
  Evening: 3,
} as const
export const SchedulingWindowEnum = z.nativeEnum(SchedulingWindow)
export type SchedulingWindowEnum = z.infer<typeof SchedulingWindowEnum>

const RecurrenceType = {
  None: 0,
  Daily: 1,
  Weekly: 2,
  Monthly: 3,
} as const
export const RecurrenceTypeEnum = z.nativeEnum(RecurrenceType)
export type RecurrenceTypeEnum = z.infer<typeof RecurrenceTypeEnum>
