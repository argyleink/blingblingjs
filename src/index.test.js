import test from 'ava'
import browserEnv from 'browser-env'

import { $ } from '../dist/index.js'

browserEnv()

test('Basic <div>', t => {
  const div = document.createElement('div')
  document.body.appendChild(div)

  t.is($('div'), div)
  t.pass()
})