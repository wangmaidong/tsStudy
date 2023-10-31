function sum1(a: string, b: string): string {
  return a + b
}
type Sum = (a1: string, b1: string) => string
let sum2: Sum = (a: string, b: string) => {
  return a + b
}
let sum3 = (a: string, b?: string): string => {
  return a + b
}
sum3('abc')
let sum4 = (a: string, b: string = 'b'): string => {
  return a + b
}
let sum5 = (...args: string[]) => {
  return args.reduce((memo, current) => memo += current, '')
}

export { }