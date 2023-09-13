export const invalidFlights = [{}, { Id: 'adsf' }]

export const validFlights = [
  {
    Name: 'My Flight',
    StartDateISO: '2017-01-01T00:00:00.000Z',
    CampaignId: 1,
    PriorityId: 2,
    GoalType: 1,
    Impressions: 1000,
    IsActive: true,
    IsDeleted: false,
  },
  {
    Name: 'My Flight',
    StartDateISO: '2017-01-01T00:00:00.1234567',
    CampaignId: 1,
    PriorityId: 2,
    GoalType: 1,
    Impressions: 1000,
    IsActive: true,
    IsDeleted: false,
  },
  {
    Name: 'My Flight',
    StartDateISO: '2017-01-01',
    CampaignId: 1,
    PriorityId: 2,
    GoalType: 1,
    Impressions: 1000,
    IsActive: true,
    IsDeleted: false,
  },
]
