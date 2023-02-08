import { CampaignSchema } from '../src/models/Campaign'
import validCampaigns from './examples/validCampaigns.json'
import invalidCampaigns from './examples/invalidCampaigns.json'

describe('CampaignSchema', () => {
  it('should validate a valid Campaign object', () => {
    validCampaigns.forEach((Campaign) => {
      const parsedExample = CampaignSchema.safeParse(Campaign)

      expect(parsedExample.success).toBe(true)
    })
  })

  it('should not validate an invalid Campaign object', () => {
    invalidCampaigns.forEach((Campaign) => {
      const parsedExample = CampaignSchema.safeParse(Campaign)

      expect(parsedExample.success).toBe(false)
    })
  })
})
