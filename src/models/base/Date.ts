import { z } from 'zod'

function isDateString(value: string): boolean {
  const date = /^\d{4}-\d{2}-\d{2}$/
  const dateTime = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(.\d{3})?Z?$/
  const kevelTime = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(.\d{7})?([+-]\d{2}:\d{2})?$/

  return date.test(value) || dateTime.test(value) || kevelTime.test(value)
}

export const DateSchema = z
  .string()
  .refine(
    isDateString,
    'Expected a date or date-time string in the format YYYY-MM-DD or YYYY-MM-DDTHH:mm:ss.sssZ or YYYY-MM-DDTHH:mm:ss.sssssss'
  )
export type DateSchema = z.infer<typeof DateSchema>
