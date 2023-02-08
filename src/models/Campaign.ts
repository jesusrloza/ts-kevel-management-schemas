import { z } from 'zod'
import { Flight, FlightSchema } from './Flight'
import { CapTypeEnum, FrequencyCapTypeEnum } from './base/enums'

export const CampaignSchema = z.object({
  AdvertiserId: z.number(),
  Name: z.string(),
  StartDate: z.string().optional(),
  Flights: z.array(FlightSchema).optional(),
  IsActive: z.boolean().default(false),
  IsDeleted: z.boolean().optional(),
  IsArchived: z.boolean().optional().nullable(),
  FreqCap: z.number().optional().nullable(),
  FreqCapDuration: z.number().optional().nullable(),
  FreqCapType: FrequencyCapTypeEnum.optional().nullable(),
  DontAffectParentFreqCap: z.boolean().optional().nullable(),
  CapType: CapTypeEnum.default(4).nullable(),
  DailyCapAmount: z.number().optional().nullable(),
  LifetimeCapAmount: z.number().optional().nullable(),
  Id: z.number().optional().nullable(),
  CustomFieldsJson: z.string().optional().nullable(),
  EndDate: z.string().optional().nullable(),
  IsFreqCap: z.boolean().optional().nullable(),
  EndDateISO: z.string().optional().nullable(),
  Price: z.number().optional().nullable(),
  StartDateISO: z.string().optional().nullable(),
})

export type CampaignSchema = z.infer<typeof CampaignSchema>

export interface Campaign {
  advertiserId: number
  name: string
  startDate: string
  flights?: Array<Flight> | null
  isActive?: boolean
  isDeleted?: boolean
  isArchived?: boolean | null
  freqCap?: number | null
  freqCapDuration?: number | null
  freqCapType?: number | null
  dontAffectParentFreqCap?: boolean | null
  capType?: number | null
  dailyCapAmount?: number | null
  lifetimeCapAmount?: number | null
  id?: number | null
  customFieldsJson?: string | null
  endDate?: string | null
  isFreqCap?: boolean | null
  endDateISO?: string | null
  price?: number | null
  startDateISO?: string | null
}
