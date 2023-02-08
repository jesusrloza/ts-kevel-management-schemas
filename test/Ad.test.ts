import { AdSchema } from '../src/models/Ad'
import validAds from './examples/validAds.json'
import invalidAds from './examples/invalidAds.json'

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
