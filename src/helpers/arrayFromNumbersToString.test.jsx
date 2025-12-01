import { arrayFromNumbersToString } from "./arrayFromNumbersToString"

describe('Array of numbers in array of string', () => {
    test('Received array of string from [1, 2, 3]', () => {
        expect(arrayFromNumbersToString([1, 2, 3])).toEqual(['1', '2', '3'])
    })
    test('Received array of string from [1, 2, 3, null, undefined] without unnecessary data', () => {
        expect(arrayFromNumbersToString([1, 2, 3, null, undefined])).toEqual(['1', '2', '3'])
    })
})