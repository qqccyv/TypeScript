
var uname:string = 'dengyu'
//定义数组的几种方式
// var arr:number[] = [1,2,3]
// var arr:Array<number> = [1,2,3]

//元组类型tuple
let arr:[string,number] = ['1',2]

//枚举类型enum
enum flag {
  'true'=1,'false'=2,red
}

let a:flag = flag.true
let b:flag = flag.red
console.log(a); //1
console.log(b); //3 没有赋值下标的情况下，下标在前面一位加1

//任意类型 ， 无法确定类型时

var c:any = '1'
var c:any = 1
var c:any = []
var c:any = true

//null undefined

var d:number | null | undefined;
d = 1
d = null
d = undefined

//void 函数没有返回值的时候

//正常写法
function run():number {
  return 123
}
console.log(run());

//void写法
function run1():void {
  console.log(123);
  
}
run1()

//never类型  包括null和undefined和其他不会出现的值

let e = (()=>{
  throw new Error('错误')
})()

