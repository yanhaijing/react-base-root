"use strict";
function fetch() {
    return {
        a: {
            b: 1,
            c: [1, 2],
        },
    };
}
const data = fetch();
console.log(data.a);
