var dict = require('cmu-pronouncing-dictionary')

var own = {}.hasOwnProperty

var words = []

Object.keys(dict).forEach(function(word) {
  words.push({word: word, pron: dict[word]})
})

module.exports = rhymes
rhymes.words = words

function rhymes(value) {
  var results = []
  var pron

  if (!value) return results

  value = String(value).toLowerCase()

  if (!own.call(dict, value)) return results

  pron = dict[value]

  words.forEach(check)

  return results.sort(sort).slice(0, 20)

  function check(word) {
    var score = countMatchingTrailingSyllables(pron, word.pron)

    if (score > 1 && value !== word.word) {
      results.push(Object.assign({score: score}, word))
    }
  }
}

function countMatchingTrailingSyllables(a, b) {
  var left = reverseSyllables(a)
  var right = reverseSyllables(b)
  var length = Math.max(left.length, right.length)
  var index = -1
  var score = 0

  while (++index < length) {
    if (left[index] !== right[index]) {
      return score
    }

    score++
  }

  // Do not return words with exactly the same pronunciation (`kat` for `cat`)
  return 0
}

function reverseSyllables(d) {
  return d.split(' ').reverse()
}

function sort(a, b) {
  return pick(b) - pick(a)
}

function pick(d) {
  return d.score
}
