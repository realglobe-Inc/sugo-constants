/**
 * Constant variables for SUGOS
 * @module sugo-constants
 */

'use strict';

var d = function d(module) {
  return module.default || module;
};

module.exports = {
  get ActorEvents() {
    return d(require('./actor_events'));
  },
  get CallerEvents() {
    return d(require('./caller_events'));
  },
  get CloudUrls() {
    return d(require('./cloud_urls'));
  }
};
//# sourceMappingURL=data:application/json;base64,bnVsbA==