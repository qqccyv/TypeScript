// 用于描述一个可以被调用的函数

type descreptionFunction = {
  descreption: string;
  (someArg: number): boolean;
};
// 使用场景比如需要描述一个回调函数
function onCallback(callback: descreptionFunction) {
  const number = 5;

  console.log(callback.descreption + callback(number));
}

function isEven(number: number): boolean {
  console.log(number % 2);

  return number % 2 === 0;
}
isEven.descreption = "this number is even:";
onCallback(isEven);

type callOrConstructor = {
  // 构造签名
  new (date: string): Date;
  // 调用签名
  (n: number): number;
};
// 测试提交
function callFunction(call: callOrConstructor) {
  new call("2022-10-23");
  call(Date.now());
}
