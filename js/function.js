"use strict";
// 默认值 和 可选参数
function functionA(x, y = 10, z) {
    if (typeof z == 'number') {
        return x + y + z;
    }
    else {
        return x + y;
    }
}
const functionB = functionA; //只能赋值给特定类型的变量
console.log(functionA(1, 2));
