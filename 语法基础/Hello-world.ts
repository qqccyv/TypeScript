console.log('Hello world!!!!');

function test({ a, b }: { a: number, b: number }) {

}

test({ a: 1, b: 2 })


interface IPerson {
  name: string
  age: number
}

interface IReadonlyPerson {
  readonly name: string
  readonly age: number
}

const person: IPerson = {
  name: 'xiaoyu',
  age: 18
}
// 在新版ts中可写属性可以赋值给只读属性，但是赋值后属性都变为只读了 
const readonlyPerson: IReadonlyPerson = person

// readonlyPerson.age++


interface ISister {
  name: string
}

interface ISister {
  age: number
}

const sister: ISister = {
  name: 'xiaoyu',
  age: 18
}

type SisterName = {
  name: string
}
type SisterAge = {
  age: number
}

const sisterType: SisterName & SisterAge = {
  name: '123',
  age: 18
}