// 1.接口可以用来描述数据的结构，接口必须都是抽象的，没有具体的实现
// 2.接口不能声明联合类型，type可以声明联合类型

// 语法 
// interface IVeg {
//   name: string
//   taste: string
//   size: number
//   color: string
// }

// 3.接口也可以用来描述一个函数，因为函数也是对象

// interface ICounter {
//   (): number  // 这个就表示函数的返回值是一个number类型 
//   count: number //表示该函数上有一个count属性
// }
// 这样的接口不能使用let去声明，要使用const
// const counter: ICounter = () => {
//   return counter.count++
// }
// counter.count = 1

// 4.接口的断言
// interface IVeg {
//   name: string
//   taste: string
//   size: number
//   color: string
// }
// 当声明的对象不满足接口时，可以使用断言
// let tomato:IVeg = {
//   name: 'tomato',
//   size: 12,
//   taste: '甜的',
// } as IVeg

// 5.采用赋值的方式
// 这种赋值的方式儿子要兼容父亲，儿子满足父亲的情况下可以有自己的
// let obj = {
//   name: 'tomato',
//   size: 12,
//   taste: '甜的',
//   color: 'yellow',
//   age: 12 // 自己的接口没有
// }

// let tomato: IVeg = obj

// 6.接口可以通过?表示可有可无

// interface IVeg {
//   name: string
//   size: number
//   taste: string
//   color?:string
// }

// let tomato: IVeg = {
//   name: 'tomato',
//   size: 12,
//   taste: '甜的'
// }

// 7.同名的接口会合并 相同的属性要类型一致

// interface IVeg {
//   name: string
//   age: number
// }
// interface IVeg {
//   size: number
//   taste: string
// }
// let tomato: IVeg = {
//   name: 'tomato',
//   age: 12,
//   size: 12,
//   taste: '甜的'
//  }

// 8.接口可以进行扩展 或者说继承
// interface IVeg {
//   name: string
//   size: number
// }

// interface ITomato extends IVeg {
//   color: string
//   taste: string
// }

// let tomato: ITomato = {
//   name: "tomato",
//   color: "yellow",
//   size: 12,
//   taste: '甜的'
// }

// 9.[props:string]: any 可以设置任意索引签名，且索引签名必须为string 或者number

interface IVegAll {
  size: number
  [prop:string]: any
}

let tomato: IVegAll = {
  name: "tomato",
  age: 1,
  taste: "甜的",
  size: 12
}

interface IArray {
  [prop:number] : any
}
let arr: IArray = [1, 2, 3]
let arrObj:IArray = { 1: 'suu', "0" : "ooo"}  // key值能转换成number类型即可