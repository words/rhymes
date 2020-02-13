var assert = require('assert')
var test = require('tape')
var rhymes = require('.')

test('rhymes', function(t) {
  var monkey = rhymes('monkey')

  t.equal(typeof rhymes, 'function', 'should be a function')

  t.ok(Array.isArray(monkey), 'monkey: should return an array')
  t.notEqual(monkey.length, 0, 'monkey: should not return an empty array')
  t.equal(typeof monkey[0], 'object', 'monkey: should return objects')

  t.doesNotThrow(function() {
    monkey.forEach(function(d, i) {
      assert.strictEqual(
        typeof d.word,
        'string',
        'should have a `word` field ' + i
      )
      assert.strictEqual(
        typeof d.pron,
        'string',
        'should have a `pron` field ' + i
      )
      assert.strictEqual(
        typeof d.score,
        'number',
        'should have a `score` field ' + i
      )
    })
  }, 'entries should match schemes')

  t.deepEqual(rhymes(), [], 'should return empty arrays for empty input (#1)')
  t.deepEqual(rhymes(''), [], 'should return empty arrays for empty input (#2)')

  t.deepEqual(
    rhymes('sdfokusdls'),
    [],
    'should return empty arrays for non-words'
  )

  t.deepEqual(rhymes('CAT'), rhymes('cat'), 'should be case-insensitive')

  t.end()
})
