import { CreativeSchema } from '../src/models/Creative'
import validCreatives from './examples/validCreatives.json'
import invalidCreatives from './examples/invalidCreatives.json'

describe('CreativeSchema', () => {
  it('should validate a valid Creative object', () => {
    validCreatives.forEach((Creative) => {
      const parsedExample = CreativeSchema.safeParse(Creative)

      expect(parsedExample.success).toBe(true)
    })
  })

  it('should not validate an invalid Creative object', () => {
    invalidCreatives.forEach((Creative) => {
      const parsedExample = CreativeSchema.safeParse(Creative)

      expect(parsedExample.success).toBe(false)
    })
  })
})
