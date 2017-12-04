import { complexCaptcha, simpleCaptcha} from "./captcha";

test("captcha puzzle #1", () => {
    expect(simpleCaptcha("1122")).toBe(3);
    expect(simpleCaptcha("1111")).toBe(4);
    expect(simpleCaptcha("1234")).toBe(0);
    expect(simpleCaptcha("91212129")).toBe(9);
});

test("captcha puzzle #2", () => {
    expect(complexCaptcha("1212")).toBe(6);
    expect(complexCaptcha("1221")).toBe(0);
    expect(complexCaptcha("123425")).toBe(4);
    expect(complexCaptcha("123123")).toBe(12);
    expect(complexCaptcha("12131415")).toBe(4);
});
