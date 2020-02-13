# rhymes

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]

Give me an English word and I’ll give you a list of rhymes.

## Install

[npm][]:

```sh
npm install rhymes
```

## Use

```js
var rhymes = require('rhymes')

console.log(rhymes('cat'))
```

Yields:

```js
[
  {score: 3, pron: 'S K AE1 T', word: 'scat'},
  {score: 2, pron: 'AA0 R N AE1 T', word: 'arnatt'},
  {score: 2, pron: 'AE1 T', word: 'at'},
  {score: 2, pron: 'AE1 T B AE1 T', word: 'at-bat'},
  {score: 2, pron: 'B AE2 L IY0 AE1 T', word: 'balyeat'},
  {score: 2, pron: 'B AE1 T', word: 'bat'},
  {score: 2, pron: 'B AE1 T', word: 'batt'},
  {score: 2, pron: 'B AE1 T', word: 'batte'},
  {score: 2, pron: 'B IH0 G AE1 T', word: 'begat'},
  {score: 2, pron: 'B AE1 T', word: 'bhatt'},
  // …and 10 more results.
]
```

## API

### `rhymes(value)`

Pass in an English word, and I’ll give you up to 20 words it rhymes with.

## License

[ISC][license] © [Zeke Sikelianos][author]

<!-- Definitions -->

[build-badge]: https://img.shields.io/travis/words/rhymes.svg

[build]: https://travis-ci.org/words/rhymes

[coverage-badge]: https://img.shields.io/codecov/c/github/words/rhymes.svg

[coverage]: https://codecov.io/github/words/rhymes

[downloads-badge]: https://img.shields.io/npm/dm/rhymes.svg

[downloads]: https://www.npmjs.com/package/rhymes

[size-badge]: https://img.shields.io/bundlephobia/minzip/rhymes.svg

[size]: https://bundlephobia.com/result?p=rhymes

[npm]: https://docs.npmjs.com/cli/install

[license]: license

[author]: http://zeke.sikelianos.com
