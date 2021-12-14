/* 方法一
npm install -D tslib @types/node
npm install -g typescript
npm install -g ts-node
执行 ts-node  xx.ts */
let isDone: boolean = false;
let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
let binaryLiteral: number = 0b1010;
let octalLiteral: number = 0o744;
let personName: string = `Gene`;
let age: number = 37;
let sentence: string = `Hello, my name is ${ personName }.

I'll be ${ age + 1} years old next month.`;

// 数组和元组的区别

// 联合类型

enum Color {Red, Green, Blue}
let c: Color = Color.Green;


// 获取枚举值
enum Color2 {Red = 1, Green, Blue}
let c2: Color2 = Color2.Green;

// 获取枚举的属性
enum Color3 {Red = 1, Green, Blue}
let colorName: string = Color3[2];   
console.log(colorName);

// 联合类型
let a: string | number
a = '100'
console.log(typeof a);
a = 101
console.log(typeof a);

// 类型断言： 告诉编译器一定是某个类型! 不是类型转换
let someValue: any = "this is a string";
// 尖括号
let strLength: number = (<string>someValue).length;
console.log(strLength);
//  as
let strLength2: number = (someValue as string).length;
console.log(strLength);