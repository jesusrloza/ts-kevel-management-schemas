import { CapTypeEnum, FrequencyCapTypeEnum } from './base/enums'
import { DateSchema } from './base/Date'
import { FlightSchema } from './Flight'
import { z } from 'zod'

export const CampaignSchema = z.object({
  AdvertiserId: z.number(),
  CapType: CapTypeEnum.default(4).nullable(),
  Created: DateSchema.optional().nullable(),
  CustomFieldsJson: z.string().optional().nullable(),
  DailyCapAmount: z.number().optional().nullable(),
  DontAffectParentFreqCap: z.boolean().optional().nullable(),
  EndDate: z.string().optional().nullable(),
  EndDateISO: DateSchema.optional().nullable(),
  Flights: z.array(FlightSchema).default([]),
  FreqCap: z.number().optional().nullable(),
  FreqCapDuration: z.number().optional().nullable(),
  FreqCapType: FrequencyCapTypeEnum.optional().nullable(),
  Id: z.number().optional(),
  IsActive: z.boolean().default(false),
  IsArchived: z.boolean().optional(),
  IsDeleted: z.boolean().optional(),
  IsFreqCap: z.boolean().optional().nullable(),
  LastModified: DateSchema.optional().nullable(),
  LifetimeCapAmount: z.number().optional().nullable(),
  Name: z.string(),
  Price: z.number().optional().nullable(),
  StartDate: z.string().optional(),
  StartDateISO: DateSchema.optional().nullable(),
  Version: z.number().optional().nullable(),
})

export type CampaignSchema = z.infer<typeof CampaignSchema>
