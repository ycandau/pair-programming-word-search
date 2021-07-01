const chai = require('chai')
const assert = chai.assert

const wordSearch = require('../wordsearch.js')

describe('#wordSearch()', function () {
  it('should return false if the input is not an array', function () {
    const result = wordSearch('abc', 'FRANK')
    assert.isFalse(result)
  })

  it('should return false if the array is empty', function () {
    const result = wordSearch([], 'FRANK')
    assert.isFalse(result)
  })

  it('should return false if the word is not present', function () {
    const result = wordSearch(
      [
        ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
        ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
        ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
        ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
        ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
        ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
        ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
        ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
        ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
      ],
      'FRANK'
    )
    assert.isFalse(result)
  })

  it('should return true if the word is present (left to right)', function () {
    const result = wordSearch(
      [
        ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
        ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
        ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
        ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
        ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
        ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
        ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
        ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
        ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
      ],
      'SEINFELD'
    )
    assert.isTrue(result)
  })

  it('should return true if the word is present (right to left)', function () {
    const result = wordSearch(
      [
        ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
        ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
        ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
        ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
        ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
        ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
        ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
        ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
        ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
      ],
      'AUKA'
    )
    assert.isTrue(result)
  })

  it('should return true if the word is present (up to down)', function () {
    const result = wordSearch(
      [
        ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
        ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
        ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
        ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
        ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
        ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
        ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
        ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
        ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
      ],
      'LARRY'
    )
    assert.isTrue(result)
  })

  it('should return true if the word is present (down to up)', function () {
    const result = wordSearch(
      [
        ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
        ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
        ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
        ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
        ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
        ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
        ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
        ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
        ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
      ],
      'ANYE'
    )
    assert.isTrue(result)
  })

  it('should return true if the word is present (NE diagonal)', function () {
    const result = wordSearch(
      [
        ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
        ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
        ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
        ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
        ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
        ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
        ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
        ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
        ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
      ],
      'NERL'
    )
    assert.isTrue(result)
  })

  it('should return true if the word is present (NW diagonal)', function () {
    const result = wordSearch(
      [
        ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
        ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
        ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
        ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
        ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
        ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
        ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
        ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
        ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
      ],
      'YEEF'
    )
    assert.isTrue(result)
  })

  it('should return true if the word is present (SE diagonal)', function () {
    const result = wordSearch(
      [
        ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
        ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
        ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
        ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
        ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
        ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
        ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
        ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
        ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
      ],
      'FEEY'
    )
    assert.isTrue(result)
  })

  it('should return true if the word is present (SW diagonal)', function () {
    const result = wordSearch(
      [
        ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
        ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
        ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
        ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
        ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
        ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
        ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
        ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
        ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
      ],
      'LUES'
    )
    assert.isTrue(result)
  })
})
