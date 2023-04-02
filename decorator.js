var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// 类装饰器
const classDecorator = (target) => {
    target.prototype.sing = () => {
        console.log('唱歌');
    };
};
// 方法装饰器
const methodDecorator = (target, propertyKey, descriptor) => {
    // descriptor.value = () => {
    //   console.log('test2');
    // }
    const method = descriptor.value;
    descriptor.value = () => {
        method();
    };
    // console.log(args);
};
// 属性装饰器
const propertyDecorator = (target, propertyKey) => {
    // 如果是静态属性 target就是构造函数，如果是普通属性，就是原型对象
    console.log(target, propertyKey);
};
// 参数装饰器
const paramsDecorator = (target, propertyKey, parameterIndex) => {
    console.log(target, propertyKey, parameterIndex);
};
class Test {
    constructor() {
        this.name = '123';
    }
    test() {
        console.log('test');
    }
}
__decorate([
    methodDecorator
], Test.prototype, "test", null);
const testClass = new Test();
testClass.test();
