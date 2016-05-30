# sails-boat
> A boat for sails

[![Build Status](https://img.shields.io/travis/magicdawn/sails-boat.svg?style=flat-square)](https://travis-ci.org/magicdawn/sails-boat)
[![Coverage Status](https://img.shields.io/coveralls/magicdawn/sails-boat.svg?style=flat-square)](https://coveralls.io/github/magicdawn/sails-boat?branch=master)
[![npm version](https://img.shields.io/npm/v/sails-boat.svg?style=flat-square)](https://www.npmjs.com/package/sails-boat)
[![npm downloads](https://img.shields.io/npm/dm/sails-boat.svg?style=flat-square)](https://www.npmjs.com/package/sails-boat)
[![npm license](https://img.shields.io/npm/l/sails-boat.svg?style=flat-square)](http://magicdawn.mit-license.org)

## Features

- [x] `async/await` / `generator-function` support in `boat.action`
- [x] `boat.defaultErrorHandler` as error handle

## Install
```
npm i sails-boat --save
```

## API
```js
const boat = require('sails-boat');
```


### `boat.action`

`boat.action(fn, errorHandler)`

- fn: async function / generator-function / normal function, with `(req, res)` para
- errorHandler: defaults to `boat.defaultErrorHandler`, with `(req, res, err)` para

```js
const boat = require('sails-boat');
const sleep = require('promise.delay');

// api/controller/HelloController.js
module.exports = {
  world: boat.action(function*(req, res){
    yield sleep(100); // sleep 100ms
    var results = yield SomeModel.find();
    res.send(results);
  }),

  foo: boat.action(async function(req, res){
    await sleep(100);
    var results = await SomeModel.find();
    res.send(results);
  })
}
```

## Changelog
[CHANGELOG.md](CHANGELOG.md)

## License
the MIT License http://magicdawn.mit-license.org