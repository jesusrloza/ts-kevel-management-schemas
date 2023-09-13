import { describe, expect, it } from 'vitest'
import { CampaignSchema } from '../src/models/Campaign'
import invalidCampaigns from './examples/invalidCampaigns.json'
import validCampaigns from './examples/validCampaigns.json'

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
