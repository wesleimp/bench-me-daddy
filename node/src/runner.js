"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Foo {
    constructor(a, b) {
        this.myItem = a * b;
    }
    get myNumber() {
        return this.myItem;
    }
}
const props = {
    prop1: true,
    prop2: "its a string",
    prop3: 0xBabeCafe,
    prop420: 69,
    prop1337: new Foo(6, 9),
};
function spread(prop) {
    return Object.assign({}, prop);
}
const temporaryMemory = [];
function run(count = 1000) {
    for (let i = 0; i < count; ++i) {
        temporaryMemory.push(spread(props));
    }
    return temporaryMemory;
}
exports.default = run;
