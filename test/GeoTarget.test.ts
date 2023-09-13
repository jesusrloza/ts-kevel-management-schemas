import { describe, expect, it } from 'vitest'
import { GeoTargetSchema } from '../src/models/GeoTarget'
import { invalidGeoTargets, validGeoTargets } from './examples/geoTargets'

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
