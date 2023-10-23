let bool: boolean = true
let num: number = 1
let str: string = 'hello world'
let tuple: [string, number, boolean] = ['1', 2, true]
tuple.push(4)
console.log(tuple)
let arr1: number[] = [1, 2, 3]
let arr2: string[] = ['123']
let arr3: boolean[] = [true, false]
let arr4: Array<number | string> = ['1', 2]
let arr5: (number | string)[] = ['123', 23]
enum USER_ROLE {
  USER = 10,
  ADMIN = 'string',
  MANAGER = 'sbc'
}
let arr:any = ['jiagou', true, 123]
let test1:number | string
test1 = 2
let test2:void
test2 = undefined // 严格模式下undefined可以赋值给void，但是null

let test3
test3 = 123

let test4 = 'abc' // ji
test4 = 'bcd'

let bool1:boolean = false
let bool2:boolean = Boolean(1)
let bool3:Boolean = new Boolean(23)

let str1:String = 'abc'