# ts-kevel-management-schemas

A package that that provides a set of Zod schemas for describing the shape of objects in the Kevel Management API.

These schemas are designed to overcome some of the limitations of Typescript in terms of run-time validation of unknown data types. In addition to serving as type declarations, the schemas can also be used to validate data that is being sent to or received from the API.

## Install

```bash
npm install @jesusrloza/ts-kevel-management-schemas
```

## Usage

```ts
// import any of the available schemas listed below
import { CampaignSchema } from '@jesusrloza/ts-kevel-management-schemas'

// use that schema as a type
const campaign: CampaignSchema = {
  AdvertiserId: 0,
  Name: 'Test campaign',
  IsActive: true,
  CapType: 1,
}

// or as an object validator
const result = CampaignSchema.safeParse(campaign)

if (result.success) {
  console.log(result.data)
} else {
  console.log(result.error)
}
```

In this example the parse was succesful and `result` looks like this:

```ts
{
  success: true,
  data: {
    AdvertiserId: 0,
    Name: 'Test campaign',
    IsActive: true,
    CapType: 1
  }
}
```

The `result` produced by validating an object using the schema will always have a `success` property, which is a boolean indicating whether the validation was successful or not.

If the validation was successful and `result.success` is `true`, the `result` will contain a data property that holds the original object, which has now been confirmed to match the schema. On the other hand, if the validation was unsuccessful, `result.success` will be false, and the `result` will contain an error property instead of a data property. The error property will provide information on what differences were found between the object and the schema.

## Available Schemas:

- AdSchema
  - AdListSchema
  - AdTypeSchema
  - AdTypeListSchema
- AdvertiserSchema
  - AdvertiserListSchema
  - AdvertiserSearchSchema
- CampaignSchema
  - CampaignListSchema
  - CampaignSearchSchema
- CreativeSchema
  - CreativeListSchema
  - CreativeTemplateSchema
  - CreativeTemplateContentsSchema
  - CreativeTemplateFieldSchema
  - CreativeTemplateListSchema
  - CreativeTemplateUpdateSchema
  - CreativeTemplateUpdateOperationSchema
- FlightSchema
  - FlightListSchema
- FlightCategorySchema
  - FlightCategoryListSchema
- GeoTargetSchema
- MetroSchema
- PrioritySchema
  - PriorityListSchema
- RegionSchema
- SiteSchema
  - SiteListSchema
- SiteZoneSchema
- ZoneSchema
  - ZoneListSchema

## Where to use this

Before performing any operations such as `create`, `update`, `get`, `list`, or `search` on a specific datatype, it is recommended to validate the data you are sending to ensure that it adheres to the specifications defined by the Kevel Management API.

By validating your data against the API's defined schemas, you can avoid potential issues and save time in diagnosing the root cause of any errors that may occur. The response from any API request can be unpredictable, and while you may have a general understanding of what it should look like based on the documentation, it is possible for the API to return something unexpected, particularly if the API's code and documentation are not always in sync.

By parsing both the data you send and the responses you receive, you can detect and address any issues before they escalate into more complex problems. This reduces the need for debugging, tracking call stacks, and monitoring variables, allowing you to quickly identify and resolve any issues with the data being exchanged.

## References

- [Kevels Campaign Management API](https://dev.kevel.com/reference/campaign-api-overview)
- [Zod Documentation](https://zod.dev/)
