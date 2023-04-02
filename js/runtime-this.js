"use strict";
class MyClassThis {
    constructor() {
        this.name = 'myclass';
        // this 指向调用者
        // getName() {
        //   console.log(this.name);
        // }
        // this 指向定义的作用域
        this.getName = () => {
            console.log(this.name);
        };
        // 这里的参数中的this定义，只是在ts中标明this应该指向哪个作用域，不会对代码实际影响，最终还是会指向实际调用者，
        // 所以要慎重权衡
        // getName(this: MyClassThis) {
        //   console.log(this.name);
        // }
    }
}
// const cThis = new MyClassThis()
// const objThis = {
//   name: 'obj',
//   getName: cThis.getName
// }
// console.log(objThis.getName());
class ExtendMyClass extends MyClassThis {
    test() {
        super.getName();
    }
}
const emc = new ExtendMyClass();
// TypeError: (intermediate value).getName is not a function
// 当基类的方法使用了箭头函数时，派生类不能再使用super.function 来调用基类的方法
console.log(emc.test());
