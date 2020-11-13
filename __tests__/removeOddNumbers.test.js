const removeOddNumbers = require("../problems/removeOddNumbers")

describe("removeOddNumbers", () => {
  test("Removes odd numbers with a small set", () => {
    expect(removeOddNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9])).toEqual([2, 4, 6, 8])
  })
  test("Removes odd numbers with more values", () => {
    const input = [
      207,
      808,
      814,
      41,
      443,
      689,
      719,
      611,
      174,
      98,
      3,
      632,
      663,
      531,
      970,
      941,
      0,
      554,
      608,
      827,
      330,
      90,
      19,
      857,
      976,
      806,
      499,
      464,
      786,
      590,
      833,
      721,
      898,
      441,
      272,
      37,
      812,
      705,
      35,
      987,
      52,
      63,
      227,
      388,
      267,
      574,
      413,
      262,
      698,
      48,
    ]
    const expected = [
      808,
      814,
      174,
      98,
      632,
      970,
      0,
      554,
      608,
      330,
      90,
      976,
      806,
      464,
      786,
      590,
      898,
      272,
      812,
      52,
      388,
      574,
      262,
      698,
      48,
    ]
    expect(removeOddNumbers(input)).toEqual(expected)
  })
})