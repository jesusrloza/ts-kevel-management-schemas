import { z } from 'zod'
import { DayOfTheWeekEnum } from './base/enums'

const timeSchema = z.string().regex(/^([01]\d|2[0-3]):([0-5]\d):([0-5]\d)$/)

export const DayPartSchema = z.object({
  TimepartID: z.number().optional(),
  Id: z.number().optional(),
  StartTime: timeSchema,
  EndTime: timeSchema,
  WeekDays: z.array(DayOfTheWeekEnum),
  FlightId: z.number().optional(),
})

export type DayPartSchema = z.infer<typeof DayPartSchema>
