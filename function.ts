// 默认值 和 可选参数
function functionA(x:number,y:number=10,z?:number):number {
    if(typeof z == 'number'){
        return x + y + z
    }else{
        return x + y
    }
}
const functionB:(x:number,y?:number,z?:number)=>number = functionA  //只能赋值给特定类型的变量
console.log(functionA(1,2));
