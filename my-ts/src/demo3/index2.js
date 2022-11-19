"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.truncate2 = void 0;
function truncate2(str) {
    if (str === undefined) {
        return '-';
    }
    return str;
}
exports.truncate2 = truncate2;
function fetch() {
    return { a: 'str' };
}
const data = fetch();
truncate2(data.a);
