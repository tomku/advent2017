function captcha(offsetCallback: (s: string) => number): (s: string) => number {
    return (s: string) => {
        let total = 0;
        const offset = offsetCallback(s);

        for (let i: number = 0; i < s.length; i++) {
            if (modIndex(s, i) === modIndex(s, i + offset)) {
                total += +modIndex(s, i);
            }
        }

        return total;
    };
}

const simpleCaptcha: (s: string) => number =
    captcha(() => 1);
const complexCaptcha: (s: string) => number =
    captcha((s) => Math.floor(s.length / 2));

function modIndex(s: string, i: number): string {
    return s.charAt(i % s.length);
}

export { simpleCaptcha, complexCaptcha } ;
