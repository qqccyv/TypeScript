"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
// 类装饰器
const classDecorator = (target) => {
    target.prototype.sing = () => {
        console.log('唱歌');
    };
};
// 方法装饰器
const methodDecorator = (target, key, descriptor) => {
    descriptor.value = () => {
        console.log('test2');
    };
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
let Test = class Test {
    constructor() {
        this.name = '123';
    }
    test(a, b) {
        console.log('test');
    }
};
__decorate([
    propertyDecorator,
    __metadata("design:type", Object)
], Test.prototype, "name", void 0);
__decorate([
    methodDecorator,
    __param(1, paramsDecorator),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], Test.prototype, "test", null);
Test = __decorate([
    classDecorator
], Test);
const testClass = new Test();
console.log(testClass.sing());
console.log(testClass.test());
