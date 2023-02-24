import { z } from 'zod'

export const DateSchema = z.string().refine((value) => {
  const dateRegex = /^\d{4}-\d{2}-\d{2}$/
  const dateTimeRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(.\d{3})?Z?$/
  const kevelTimeRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(.\d{7})?$/

  return dateRegex.test(value) || dateTimeRegex.test(value) || kevelTimeRegex.test(value)
}, 'Expected a date or date-time string in the format YYYY-MM-DD or YYYY-MM-DDTHH:mm:ss.sssZ or YYYY-MM-DDTHH:mm:ss.sssssss')

export type DateSchema = z.infer<typeof DateSchema>
