/**
 * Constant variables for SUGOS
 * @module sugo-constants
 */

'use strict'

let d = (module) => module && module.default || module

module.exports = {
  get ActorEvents () { return d(require('./actor_events')) },
  get CallerEvents () { return d(require('./caller_events')) },
  get HubUrls () { return d(require('./hub_urls')) },
  get ReservedNames () { return d(require('./reserved_names')) }
}
