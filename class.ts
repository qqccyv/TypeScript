class Person1 {
    public name:string;  // 外部可以在该类的实例中直接访问
    protected age:number; // 本身类及继承类中可以访问
    private gender:string; // 只有本身类中可以访问
    static height:number = 180
    readonly myHeart:object = {}
     run(){  // 外部直接通过类名直接访问
        return `${this.name} is runing`
    }
    constructor(name:string){
        this.name = name
    }
}

let dengyu = new Person1('dengyu')
console.log(dengyu.run());
console.log(Person1.height);

interface Radio {
    switchRadio():void
}
//接口可以继承
interface Run extends Radio{
    run():void
}
// 实现关键字 
class car implements Run{
    switchRadio(){

    }
    run(){
        
    }
}
