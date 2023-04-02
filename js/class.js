"use strict";
class Person1 {
    run() {
        return `${this.name} is runing`;
    }
    constructor(name) {
        this.myHeart = {};
        this.name = name;
    }
}
Person1.height = 180;
let dengyu = new Person1('dengyu');
console.log(dengyu.run());
console.log(Person1.height);
// 实现关键字 
class car {
    switchRadio() {
    }
    run() {
    }
}
