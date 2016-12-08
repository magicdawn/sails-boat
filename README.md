# sails-boat
> Sails.js helper library

<!--
[![Build Status](https://img.shields.io/travis/magicdawn/sails-boat.svg?style=flat-square)](https://travis-ci.org/magicdawn/sails-boat)
[![Coverage Status](https://img.shields.io/coveralls/magicdawn/sails-boat.svg?style=flat-square)](https://coveralls.io/github/magicdawn/sails-boat?branch=master)
-->
[![npm version](https://img.shields.io/npm/v/sails-boat.svg?style=flat-square)](https://www.npmjs.com/package/sails-boat)
[![npm downloads](https://img.shields.io/npm/dm/sails-boat.svg?style=flat-square)](https://www.npmjs.com/package/sails-boat)
[![npm license](https://img.shields.io/npm/l/sails-boat.svg?style=flat-square)](http://magicdawn.mit-license.org)

## Install
```
npm i sails-boat --save
```

## Features

- [x] `boat.patchModels(sails)` will add `Model.queryAsync`
- [x] `boat.patchBluebird` will turn off bluebird warnings

## API
```js
const boat = require('sails-boat');
```

## Changelog
[CHANGELOG.md](CHANGELOG.md)

## License
the MIT License http://magicdawn.mit-license.org