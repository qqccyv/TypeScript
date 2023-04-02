// 类装饰器
const classDecorator: ClassDecorator = (target) => {
  target.prototype.sing = () => {
    console.log('唱歌');

  }
}
// 方法装饰器
const methodDecorator: MethodDecorator = (target, propertyKey, descriptor: PropertyDescriptor) => {
  // descriptor.value = () => {
  //   console.log('test2');

  // }
  const method = descriptor.value
  descriptor.value = () => {
    method()
  }
  // console.log(args);

}

// 属性装饰器
const propertyDecorator: PropertyDecorator = (target: Object, propertyKey: string | symbol) => {
  // 如果是静态属性 target就是构造函数，如果是普通属性，就是原型对象
  console.log(target, propertyKey);

}
// 参数装饰器
const paramsDecorator: ParameterDecorator = (target: Object, propertyKey: string | symbol, parameterIndex: number) => {
  console.log(target, propertyKey, parameterIndex);

}

class Test {
  name = '123'
  @methodDecorator
  public test() {
    console.log('test');

  }
}

const testClass = new Test()

  ; (<any>testClass).test()


