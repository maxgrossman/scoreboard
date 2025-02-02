const { distanceInWords } = require('date-fns')

export function formatDecimal (num) {
  num = num || 0
  if (Number(num) % 1 !== 0) num = num.toFixed(2)
  var n = num
  if (n < 100000) return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  var k = Math.floor(n)

  function shorten (number, letter) {
    var d = number.toString().split('.')
    if (!d[1]) {
      return d[0] + letter
    } else {
      return d[0] + '.' + d[1].substring(0, 2) + letter
    }
  }

  k = n / 1e15; if (k >= 1) return shorten(k, 'Q')
  k = n / 1e12; if (k >= 1) return shorten(k, 'T')
  k = n / 1e9; if (k >= 1) return shorten(k, 'B')
  k = n / 1e6; if (k >= 1) return shorten(k, 'M')
  k = n / 1e3; if (k >= 100) return shorten(k, 'K')
}

/**
 * If distance is < 1 -> multiply by 1000 and add 'm'
 * If distance is > 1 -> add km
 */
export function formatKm (distance) {
  if (distance < 1) {
    return `${(distance * 1000).toFixed(1)} m`
  } else {
    return `${(distance).toFixed(1)} km`
  }
}

export function formatEditTimeDescription (timeVar) {
  const now = new Date()
  // divide difference in timestamps by millisecond conversion
  const daysDifference = Math.floor((now - timeVar) / (1000 * 60 * 60 * 24))
  if (daysDifference < 1) {
    return 'In the last 24 hours'
  } else if (daysDifference === 1) {
    return `1 day ago`
  } else return `${daysDifference} days ago`
}

export function formatUpdateDescription (timeVar) {
  return `${distanceInWords(timeVar, new Date())} ago`
}
