/**
 * Test case for reservedNames.
 * Runs with mocha.
 */
'use strict'

const ReservedNames = require('../lib/reserved_names.js')
const assert = require('assert')
const co = require('co')

describe('reserved-names', function () {
  this.timeout(3000)

  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Reserved names', () => co(function * () {
    for (let name of Object.keys(ReservedNames)) {
      assert.ok(ReservedNames[ name ])
    }
  }))
})

/* global describe, before, after, it */
