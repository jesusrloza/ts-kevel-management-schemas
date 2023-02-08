import { RegionSchema } from './Region'

export interface Country {
  name?: string
  code?: string
  regions?: { [key: string]: RegionSchema } | null
}
