/**
 * Test case for actorEvents.
 * Runs with mocha.
 */
'use strict'

const ActorEvents = require('../lib/actor_events.js')
const assert = require('assert')
const co = require('co')

describe('actor-events', function () {
  this.timeout(3000)

  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Actor events', () => co(function * () {
    for (let name of Object.keys(ActorEvents)) {
      assert.ok(ActorEvents[ name ])
    }
  }))
})

/* global describe, before, after, it */
