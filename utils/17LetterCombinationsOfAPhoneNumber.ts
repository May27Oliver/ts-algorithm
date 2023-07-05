export default function letterCombinations(digits: string): string[] {
    const mappingTable = {
        '2': ['a', 'b', 'c'],
        '3': ['d', 'e', 'f'],
        '4': ['g', 'h', 'i'],
        '5': ['j', 'k', 'l'],
        '6': ['m', 'n', 'o'],
        '7': ['p', 'q', 'r', 's'],
        '8': ['t', 'u', 'v'],
        '9': ['w', 'x', 'y', 'z'],
    };
    type Keys = keyof typeof mappingTable;
    let mappingArr: string[] = [];
    const combineAlphabat = (digi: string, str: string) => {
        if (digi === '') {
            mappingArr = [...mappingArr, str]
        } else {
            for (let i = 0; i < mappingTable[digi[0] as Keys].length; i++) {
                combineAlphabat(digi.substring(1, digi.length), str + mappingTable[digi[0] as Keys][i])
            }
        }
    }
    if (digits.length !== 0) {
        combineAlphabat(digits, '')
    }
    return mappingArr;
};