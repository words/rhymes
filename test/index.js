/* globals describe, it */

const expect = require('code').expect
const rhymes = require('..')
var monkey = rhymes('monkey')

describe('rhymes', function () {
  it('is a fun function', function () {
    expect(rhymes).to.be.a.function()
  })

  it('returns an array of result objects', function () {
    expect(monkey).to.be.an.array()
    expect(monkey).to.not.be.empty()
    expect(monkey[0]).to.be.an.object()
  })

  describe('each result object', function () {
    it('has a `word` property', function () {
      expect(monkey[0].word).to.exist()
    })
    it('has a `pron` property', function () {
      expect(monkey[0].pron).to.exist()
    })
    it('has a `score` property', function () {
      expect(monkey[0].score).to.exist()
    })
  })

  it('returns an empty array for empty input values', function () {
    expect(rhymes()).to.be.an.array()
    expect(rhymes('')).to.be.an.array()
  })

  it('returns an empty array if word is not in corpus', function () {
    expect(rhymes.words['sdfokusdls']).to.be.undefined()
    expect(rhymes('sdfokusdls')).to.be.an.array()
  })

  // it('returns an empty array if word is in corpus but has no matches', function () {
  //   expect(rhymes.words['zoghby']).to.be.a.string()
  //   expect(rhymes('zoghby')).to.be.an.array()
  // })

  it('finds matches regardless of input case', function () {
    expect(rhymes('CAT')).to.be.an.array()
    expect(rhymes('CAT')).to.not.be.empty()
    expect(rhymes('CAT')).to.deep.equal(rhymes('cat'))
  })

})
