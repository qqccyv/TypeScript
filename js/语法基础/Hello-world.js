"use strict";
console.log('Hello world!!!!');
function test({ a, b }) {
}
test({ a: 1, b: 2 });
const person = {
    name: 'xiaoyu',
    age: 18
};
// 在新版ts中可写属性可以赋值给只读属性，但是赋值后属性都变为只读了 
const readonlyPerson = person;
const sister = {
    name: 'xiaoyu',
    age: 18
};
const sisterType = {
    name: '123',
    age: 18
};
