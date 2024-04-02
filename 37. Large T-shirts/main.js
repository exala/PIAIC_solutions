function make_shirt(size, text) {
    if (text === void 0) { text = 'I love Typescript'; }
    if (size == 'L' || size == 'M') {
        console.log(text);
    }
}
make_shirt('L');
