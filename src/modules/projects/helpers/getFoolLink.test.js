import { expect, test } from 'vitest'
import { getFoolLink } from './getFoolLink.js'

test('getFoolLink function', () => {
  expect(getFoolLink('http://site.com')).toBe('http://site.com')
  expect(getFoolLink('www.site.com')).toBe('https://www.site.com')
  expect(getFoolLink('site.com')).toBe('https://site.com')
})