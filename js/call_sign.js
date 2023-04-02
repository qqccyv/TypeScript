"use strict";
// 用于描述一个可以被调用的函数
// 使用场景比如需要描述一个回调函数
function onCallback(callback) {
    const number = 5;
    console.log(callback.descreption + callback(number));
}
function isEven(number) {
    console.log(number % 2);
    return number % 2 === 0;
}
isEven.descreption = "this number is even:";
onCallback(isEven);
// 测试提交
function callFunction(call) {
    new call("2022-10-23");
    call(Date.now());
}
// class MyClass {
//   static a = 1
//   print(){
//     MyClass.a
//   }
// }
class MyClass {
    static setCount() {
        MyClass.count = MyClass.count + 1;
    }
}
MyClass.count = 1;
