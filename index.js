const dict = require('cmu-pronouncing-dictionary')
const merge = require('lodash').merge
const sortBy = require('lodash').sortBy

var words = []
Object.keys(dict).forEach(function (word) {
  words.push({
    word: word,
    pron: dict[word]
  })
})

module.exports = function rhymes (input) {
  if (!input) return []

  input = input.toLowerCase()

  if (!dict[input]) return []

  var inputPron = dict[input]
  var results = []

  words.forEach(function (word) {
    var score = countMatchingTrailingSyllablesInPronunciations(inputPron, word.pron)
    if (score > 1) {
      results.push(merge(word, {score: score}))
    }
  })

  results = sortBy(results, 'score')
    .reverse()
    .slice(0, 20)

  return results
}

module.exports.words = words

function countMatchingTrailingSyllablesInPronunciations (a, b) {
  a = a.split(' ').reverse()
  b = b.split(' ').reverse()
  var score = 0
  var shorterPron = (a.length < b.length) ? a : b

  for (var i in shorterPron) {
    if (a[i] === b[i]) {
      score++
    } else {
      return score
    }
  }

  return score
}
