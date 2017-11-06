'use strict'

import test from 'ava'
import d from '.'

test('convert duration', t => {
  t.is(d('2d'), 172800000)
  t.is(d('2h'), 7200000)
  t.is(d('2m'), 120000)
  t.is(d('2s'), 2000)
  t.is(d('1d 1h 1m 1s'), 90061000)
  t.is(d(null), 0)
  t.is(d(500), 500)
})

