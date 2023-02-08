# ts-kevel-management-schemas

> My awesome module

## Install

```bash
npm install ts-kevel-management-schemas
```

## Usage

```ts
import { CampaignSchema } from '@jesusrloza/ts-kevel-management-schemas'

// use CampaignSchema as a type
const campaign: CampaignSchema = {
  AdvertiserId: 0,
  Name: 'Test campaign',
  IsActive: true,
  CapType: 1,
}

// or as a data validator
const result = CampaignSchema.safeParse(campaign)

if (result.success) {
  console.log(result.data)
  // => { AdvertiserId: 0, Name: 'Test campaign', IsActive: true, CapType: 1 }
} else {
  console.log(result.error)
}
```

## API

### myPackage(input, options?)

#### input

Type: `string`

Lorem ipsum.

#### options

Type: `object`

##### postfix

Type: `string`
Default: `rainbows`

Lorem ipsum.
