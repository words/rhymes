# rhymes

[![Build][build-badge]][build]
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
  {score: 3, word: 'catt', pron: 'K AE1 T'},
  {score: 3, word: 'kat', pron: 'K AE1 T'},
  {score: 3, word: 'katt', pron: 'K AE1 T'},
  {score: 3, word: 'scat', pron: 'S K AE1 T'},
  {score: 2, word: 'arnatt', pron: 'AA0 R N AE1 T'}
  // …and more results.
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

[downloads-badge]: https://img.shields.io/npm/dm/rhymes.svg

[downloads]: https://www.npmjs.com/package/rhymes

[size-badge]: https://img.shields.io/bundlephobia/minzip/rhymes.svg

[size]: https://bundlephobia.com/result?p=rhymes

[npm]: https://docs.npmjs.com/cli/install

[license]: license

[author]: http://zeke.sikelianos.com
