/**
 * Test case for cloudUrls.
 * Runs with mocha.
 */
'use strict'

const CloudUrls = require('../lib/cloud_urls.js')
const assert = require('assert')
const co = require('co')

describe('cloud-urls', function () {
  this.timeout(3000)

  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Cloud urls', () => co(function * () {
    for (let name of Object.keys(CloudUrls)) {
      assert.ok(CloudUrls[ name ])
    }
  }))
})

/* global describe, before, after, it */
