import { FlightSchema } from '../src/models/Flight'
import validFlights from './examples/validFlights.json'
import invalidFlights from './examples/invalidFlights.json'

describe('FlightSchema', () => {
  it('should validate a valid Flight object', () => {
    validFlights.forEach((Flight) => {
      const parsedExample = FlightSchema.safeParse(Flight)

      expect(parsedExample.success).toBe(true)
    })
  })
  it('should not validate an invalid Flight object', () => {
    invalidFlights.forEach((Flight) => {
      const parsedExample = FlightSchema.safeParse(Flight)

      expect(parsedExample.success).toBe(false)
    })
  })
})
