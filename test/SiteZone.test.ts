import { SiteZoneSchema } from '../src/models/SiteZone'
import validSiteZones from './examples/validSiteZones.json'
import invalidSiteZones from './examples/invalidSiteZones.json'

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
