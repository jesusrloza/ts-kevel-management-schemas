import { GeoTargetSchema } from '../src/models/GeoTarget'
import validGeoTargets from './examples/validGeoTargets.json'
import invalidGeoTargets from './examples/invalidGeoTargets.json'

describe('GeoTargetSchema', () => {
  it('should validate a valid GeoTarget object', () => {
    validGeoTargets.forEach((GeoTarget) => {
      const parsedExample = GeoTargetSchema.safeParse(GeoTarget)

      expect(parsedExample.success).toBe(true)
    })
  })

  it('should not validate an invalid GeoTarget object', () => {
    invalidGeoTargets.forEach((GeoTarget) => {
      const parsedExample = GeoTargetSchema.safeParse(GeoTarget)

      expect(parsedExample.success).toBe(false)
    })
  })
})
