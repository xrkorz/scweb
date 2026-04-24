import { assertEquals } from 'jsr:@std/assert'
import { createDefaultUrl } from '../src/static/url.js'

Deno.test('createDefaultUrl falls back to sub.eeww.workers.dev when hash is empty', () => {
  assertEquals(createDefaultUrl('').href, 'https://sub.eeww.workers.dev/')
})
