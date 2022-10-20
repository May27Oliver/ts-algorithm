import mergeSort from '../mergeSort';

describe('sort', () => {
    test('mergeSort', () => {
        const a = 2
        const b = 3
        expect(mergeSort(a, b)).toBe(5)
    })
})