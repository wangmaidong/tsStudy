// 类
// 1.在ts中想要在构造函数中使用this.xxxx = xxxx的语句需要使用public或者protected或者private声明
// protected只能在类本身或者子类中使用，类的实例和子类的实例均不能使用
// private只能在类本身中使用
// readonly表明此属性只能在初始化时被赋值，后续不能被更改
class Circle {
  public x: number
  protected y: number
  readonly z: number
  public foo(): void { }
  constructor(x: number, y: number, z: number) {
    this.x = x
    this.y = y
    this.z = z
  }
}
let circle = new Circle(1, 2, 3)
console.log(circle.x)

class CircleSon extends Circle {
  constructor() {
    super(1, 2, 4)
    this.y = 456
  }
}
let circleSon = new CircleSon
console.log(circleSon)

// 
class Animal {
  constructor(public name: string | number) {
    this.name = name
  }
  public changeName(name: string): void {
    this.name = name
  }
  get aliasName() {
    return "$" + this.name
  }
  set aliasName(name: string) {
    this.name = name
  }
}
// 2.在子类中重写父类的原型方法许需要兼容父类的方法,
// 因为很多时候再重写父类的原型方法时会调用父类的原型方法
// super在constructor中表示父类  在原型方法中表示父类的原型
class Cat extends Animal {
  changeName(name: string) {
    // super.changeName(name)
    console.log(super.constructor)
    this.name = name
  }
}

let tom1 = new Cat('jerry')
tom1.changeName('Tom')

// 3.类中原型的属性需要通过 get 和 set实现

// 4. 如果构造函数被加上了protected就不能被new了

class UnNewClass {
  protected constructor() {
  }
  static instance = new UnNewClass
  static getInstance() {
    return this.instance
  }
}
let instance = UnNewClass.getInstance

console.log(instance)

// 5.抽象类
// 抽象类中有抽象的方法和属性也可以有具体的方法实现，但是继承了抽象类的子类必须实现抽象父类的方法和属性
// 抽象方法和属性只能出现在抽象类中
abstract class Person {
  abstract a: string
  abstract eat(a: number): void
  drink() { }
}

class WL extends Person {
  public a!: string
  eat() { }
}


