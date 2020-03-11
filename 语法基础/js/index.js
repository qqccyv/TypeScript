"use strict";
var uname = 'dengyu';
//定义数组的几种方式
// var arr:number[] = [1,2,3]
// var arr:Array<number> = [1,2,3]
var arr1 = [];
//元组类型tuple
var arr = ['1', 2];
//枚举类型enum
var flag;
(function (flag) {
    flag[flag["true"] = 1] = "true";
    flag[flag["false"] = 2] = "false";
    flag[flag["red"] = 3] = "red";
})(flag || (flag = {}));
var a = flag.true;
var b = flag.red;
console.log(a); //1
console.log(b); //3 没有赋值下标的情况下，下标在前面一位加1
//任意类型 ， 无法确定类型时
var c = '1';
var c = 1;
var c = [];
var c = true;
//null undefined
var d;
d = 1;
d = null;
d = undefined;
//void 函数没有返回值的时候
//正常写法
function run() {
    return 123;
}
console.log(run());
//void写法
function run1() {
    console.log(123);
}
run1();
//never类型  包括null和undefined和其他不会出现的值
var e = (function () {
    throw new Error('错误');
})();
