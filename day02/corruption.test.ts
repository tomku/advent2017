import {checksum} from "./corruption";

test("calculates a spreadsheet's checksum", () => {
    const sheet = "5 1 9 5\n7 5 3\n2 4 6 8";
    expect(checksum(sheet)).toBe(18);
});
