import { describe, expect, it } from 'vitest'
import { AdSchema } from '../src/models/Ad'
import { invalidAds, validAds } from './examples/ads'

describe('AdSchema', () => {
  it('should validate a valid Ad object', () => {
    validAds.forEach((Ad) => {
      const parsedExample = AdSchema.safeParse(Ad)

      expect(parsedExample.success).toBe(true)
    })
  })

  it('should not validate an invalid Ad object', () => {
    invalidAds.forEach((Ad) => {
      const parsedExample = AdSchema.safeParse(Ad)

      expect(parsedExample.success).toBe(false)
    })
  })
})
