// 1.function 关键字声明的函数不能添加函数的类型
// 使用表达式声明的函数可以在变量名后面添加函数的类型
type ISum1 = (a: number, b: number) => number
type ISum2 = {
  (a: number, b: number): number
}
// const sum: ISum1 = (a: number, b: number): number => {
//   return a+ b
// }
// const sum: ISum2 = function (a, b): number {
//   return a + b
// }
// 2.可选参数 a?:number, 可选参数必须位于必选参数的后面
type ISum3 = (a: number, b?: number) => number

// const sum: ISum3 = function (a, b:number = 12): number  {
//   return a+b
// }

// 3.函数中尽量不使用this,this在类型推导时不能推导出何类型
// 如果使用 this要为this标注类型 且必须把this放在第一位，但是this不是形参
function getValue(this: IPerson, key: Ikey,) {
  return this[key]
}

const person = {
  name: 'zs',
  age: 12,
  address: 'hangzhou'
}
type IPerson = typeof person
type Ikey = keyof IPerson

getValue.call(person, 'age')

// 不考虑使用arguments

// function sum(a: number, b: number, c: number): number {
//   let arg: number[] = Array.from(arguments)
//   return arg.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
// }
// function sum(...args: number[]): number {
//   return args.reduce(((accumaltor, currentvalue) => accumaltor + currentvalue), 0)
// }
const sum: (...args: number[]) => number = (...args: number[]): number => {
  return args.reduce(((accumaltor, currentvalue) => accumaltor + currentvalue), 0)
}
console.log(sum(1, 23, 4, 7, 90))

// 5重载 ts中可以实现类型的重载

function array(value: string): string[]
function array(value: number): number[]

function array(value: string | number): (string | number)[] {
  return [value]
}

// 6.void void作为函数的返回值类型表示空 与类中的void含义不同，类中表示不关心函数的返回值
function bar(): void {
}

const foo = (): number => {
  return 123
}



