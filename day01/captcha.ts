function simpleCaptcha(s: string) {
    let total = 0;

    for (let i: number = 0; i < s.length; i++) {
        if (modIndex(s, i) === modIndex(s, i + 1)) {
            total += +modIndex(s, i);
        }
    }

    return total;
}

function modIndex(s: string, i: number) {
    return s.charAt(i % s.length);
}

function complexCaptcha(s: string) {
    let total = 0;
    const offset = Math.floor(s.length / 2);

    for (let i: number = 0; i < s.length; i++) {
        if (modIndex(s, i) === modIndex(s, i + offset)) {
            total += +modIndex(s, i);
        }
    }

    return total;
}

export { simpleCaptcha, complexCaptcha, modIndex } ;
