/**
 * Test case for clientTypes.
 * Runs with mocha.
 */
'use strict'

const ClientTypes = require('../lib/client_types.js')
const assert = require('assert')
const co = require('co')

describe('client-types', function () {
  this.timeout(3000)

  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Client types', () => co(function * () {
    for (let name of Object.keys(ClientTypes)) {
      assert.ok(ClientTypes[ name ])
    }
  }))
})

/* global describe, before, after, it */
