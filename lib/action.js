/**
 * A boat for sails
 */

'use strict';

/**
 * module dependencies
 */

const co = require('co');
const isGenFn = require('is-generator-function');

/**
 * utils
 */

// slice
const slice = Array.prototype.slice;

// a promise like has `catch` function
const hasCatch = o => o && o.catch && typeof o.catch === 'function';

/**
 * exports
 */

const boat = module.exports;

/**
 * 包装一个 `GeneratorFunction` | `async function` 成一个 sails action
 * @type {exports.action}
 */

boat.wrap = boat.action = function(fn, errorHandler) {
  if (isGenFn(fn)) {
    fn = co.wrap(fn);
  }

  // 错误处理
  errorHandler = errorHandler || boat.defaultErrorHandler;

  // real action
  return function(req, res) {
    const args = slice.call(arguments);
    const ret = fn.call(this, args);
    if (hasCatch(ret)) {
      ret.catch(function(e) {
        errorHandler(req, res, e);
      });
    }
  };
};

/**
 * 错误处理
 * @param res
 * @param e
 */

boat.defaultErrorHandler = function(req, res, e) {
  // res
  res.status(500);
  if (process.env.NODE_ENV === 'production') {
    res.send(e.message || 'unknow error');
  } else {
    res.send(e);
  }

  // log
  console.error(e.stack || e);
};