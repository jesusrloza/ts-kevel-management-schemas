import { Region } from './Region'

export interface Country {
  name?: string
  code?: string
  regions?: { [key: string]: Region } | null
}
