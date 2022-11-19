"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.truncate1 = void 0;
function truncate1(str) {
    return str;
}
exports.truncate1 = truncate1;
function fetch() {
    return { a: 'str' };
}
const data = fetch();
truncate1(data.a);
truncate1(data.a);
truncate1(data.a);
truncate1((_a = data.a) !== null && _a !== void 0 ? _a : '');
