'use strict'

/**
 * turn off bluebird warnings
 */

const tryPatch = s => {
  try {
    const Promise = require(s)
    Promise && Promise.config({
      // Enables all warnings except forgotten return statements.
      warnings: {
        wForgottenReturn: false
      }
    })
  } catch (_) {
    // noop
  }
}

tryPatch('bluebird')
tryPatch('waterline/node_modules/bluebird')
tryPatch('sails/node_modules/waterline/node_modules/bluebird')