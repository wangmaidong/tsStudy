
let test1: string | number = 123
test1.toString() // 如果是联合类型，没有赋值前只能调用联合类型共有的方法
let test2: string | number;
// (test2! as number).toFixed() // 如果想调用某一类型的方法需要使用断言
type Direction = 'Up' | 'Down' | 'Left' | 'Right'
let direction: Direction = "Down"
export { }