# go-duration
[![Build Status](https://travis-ci.org/igorgo/go-duration.svg?branch=master)](https://travis-ci.org/igorgo/go-duration)

Converts a humanreadble string of duration to miliseconds

## Usage

```
$ npm install go-duration
```

```js
const duration = require('go-duration')

duration('2d')
//=> 172800000

duration('2h')
//=> 7200000

duration('2m')
//=> 120000

duration('2s')
//=> 2000

duration('1d 1h 1m 1s')
//=> 90061000

duration('null')
//=> 0

duration(10000)
//=> 10000
```

## Test
```
$ npm test
```
