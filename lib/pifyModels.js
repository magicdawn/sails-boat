'use strict'

const assert = require('assert')
const pify = require('promise.ify')

/**
 * add queryAsync
 */

module.exports = sails => {
  assert(sails.models, 'sails.models must exists')
  const models = Object.keys(sails.models)
  for (let key of models) {
    sails.models[key].queryAsync = pify(sails.models[key].query)
  }
}