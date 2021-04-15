interface IwithLength {
    length:number
}
// 约束泛型  函数
function echoWithLength<T extends IwithLength>(arg:T):T{
    // console.log(arg.length);
    return arg
}

let a = echoWithLength('123')
// let b = echoWithLength(5) 参数没有length属性 报错

// 约束 class类
class Queue<T> {
    private data:T[]=[];
    push(item:T){
       return this.data.push(item)
    }
    pop():T{
       return this.data.shift()
    }
}

let queue1 = new Queue<string>()
console.log(queue1.push('1'));
console.log(queue1.pop());

// 约束接口
interface ab<T,U>{
    A:T,
    B:U
}

let ba:ab<string,number> = {A:'123',B:123}

let arr9:Array<number> = [2,3]

