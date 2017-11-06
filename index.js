'use strict'

const DURATION_UNITS = {
  days: { rx: /(\d+)\s*d/, mul: 86400 },
  hours: { rx: /(\d+)\s*h/, mul: 3600 },
  minutes: { rx: /(\d+)\s*m/, mul: 60 },
  seconds: { rx: /(\d+)\s*s/, mul: 1 }
}

/**
 * Parse duration to miliseconds
 * @param {string|number} aDuration duration syntax
 * @return {number} milliseconds
 * @example duration('1d 10h 7m 13s')
 */
function duration (aDuration) {
  if (typeof (aDuration) === 'number') return aDuration
  let result = 0
  let unit, match, key
  if (typeof (aDuration) === 'string') {
    for (key in DURATION_UNITS) {
      unit = DURATION_UNITS[key]
      match = aDuration.match(unit.rx)
      if (match) result += parseInt(match[1], 10) * unit.mul
    }
  }
  return result * 1000
}

module.exports = duration
