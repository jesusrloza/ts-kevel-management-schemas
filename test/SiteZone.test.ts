import { describe, expect, it } from 'vitest'
import { SiteZoneSchema } from '../src/models/SiteZone'
import invalidSiteZones from './examples/invalidSiteZones.json'
import validSiteZones from './examples/validSiteZones.json'

describe('SiteZoneSchema', () => {
  it('should validate a valid SiteZone object', () => {
    validSiteZones.forEach((SiteZone) => {
      const parsedExample = SiteZoneSchema.safeParse(SiteZone)

      expect(parsedExample.success).toBe(true)
    })
  })

  it('should not validate an invalid SiteZone object', () => {
    invalidSiteZones.forEach((SiteZone) => {
      const parsedExample = SiteZoneSchema.safeParse(SiteZone)

      expect(parsedExample.success).toBe(false)
    })
  })
})
