interface Person  {
    name:string;
    age:number,
    readonly gender:string, // 只读
    money?:number  //可选属性
}
let 邓宇:Person = {
    name:'邓宇',
    age:30,
    gender:'male'
}