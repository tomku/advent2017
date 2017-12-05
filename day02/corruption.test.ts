import {minmaxChecksum, quotChecksum} from "./corruption"

test("calculates a spreadsheet's checksum using min/max", () => {
    const sheet = "5 1 9 5\n7 5 3\n2 4 6 8"
    expect(minmaxChecksum(sheet)).toBe(18)
})

test("calculates a spreadsheet's checksum using quotients", () => {
    const sheet = "5 9 2 8\n9 4 7 3\n3 8 6 5"
    expect(quotChecksum(sheet)).toBe(9)
})
