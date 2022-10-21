"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function run(count = 1000) {
    const temp = [];
    for (let i = 0; i < count; ++i) {
        temp.push(i * 69);
    }
    return temp;
}
exports.default = run;
