"use strict";
// 约束泛型  函数
function echoWithLength(arg) {
    // console.log(arg.length);
    return arg;
}
let a = echoWithLength('123');
// let b = echoWithLength(5) 参数没有length属性 报错
// 约束 class类
class Queue {
    constructor() {
        this.data = [];
    }
    push(item) {
        return this.data.push(item);
    }
    pop() {
        return this.data.shift();
    }
}
let queue1 = new Queue();
console.log(queue1.push('1'));
console.log(queue1.pop());
let ba = { A: '123', B: 123 };
let arr9 = [2, 3];
