import { z } from 'zod'
import { FlightSchema } from './Flight'
import { CapTypeEnum, FrequencyCapTypeEnum } from './base/enums'
import { DateSchema } from './base/Date'

export const CampaignSchema = z.object({
  Id: z.number().optional(),
  AdvertiserId: z.number(),
  Name: z.string(),
  StartDate: z.string().optional(),
  Flights: z.array(FlightSchema).default([]),
  IsActive: z.boolean().default(false),
  IsDeleted: z.boolean().optional(),
  IsArchived: z.boolean().optional(),
  FreqCap: z.number().optional().nullable(),
  FreqCapDuration: z.number().optional().nullable(),
  FreqCapType: FrequencyCapTypeEnum.optional().nullable(),
  DontAffectParentFreqCap: z.boolean().optional().nullable(),
  CapType: CapTypeEnum.default(4).nullable(),
  DailyCapAmount: z.number().optional().nullable(),
  LifetimeCapAmount: z.number().optional().nullable(),
  CustomFieldsJson: z.string().optional().nullable(),
  EndDate: z.string().optional().nullable(),
  IsFreqCap: z.boolean().optional().nullable(),
  EndDateISO: DateSchema.optional().nullable(),
  Price: z.number().optional().nullable(),
  StartDateISO: DateSchema.optional().nullable(),
})

export type CampaignSchema = z.infer<typeof CampaignSchema>
