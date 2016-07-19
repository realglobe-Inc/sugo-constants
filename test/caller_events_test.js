/**
 * Test case for callerEvents.
 * Runs with mocha.
 */
'use strict'

const CallerEvents = require('../lib/caller_events.js')
const assert = require('assert')
const co = require('co')

describe('caller-events', function () {
  this.timeout(3000)

  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Caller events', () => co(function * () {
    for (let name of Object.keys(CallerEvents)) {
      assert.ok(CallerEvents[ name ])
    }
  }))
})

/* global describe, before, after, it */
