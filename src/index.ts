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
  USER,
  ADMIN,
  MANAGER
}
console.log(USER_ROLE)