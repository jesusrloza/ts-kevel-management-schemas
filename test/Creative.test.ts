import { describe, expect, it } from 'vitest'
import { CreativeSchema } from '../src/models/Creative'
import invalidCreatives from './examples/invalidCreatives.json'
import validCreatives from './examples/validCreatives.json'

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
