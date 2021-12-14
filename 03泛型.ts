/*
@File    :   03泛型.ts
@Time    :   2021/12/14 13:57:57
@Author  :   Ruiqing Yang
@Version :   1.0
@Contact :   1193700079@qq.com
@Desc    :   None
'''
*/

// 泛型函数： 保证输入和输出是同一种类型
// 定义函数的时候 如果遇到的类型不明确就可以使用函数
// function identity<T>(arg: T): T {
//     return arg;
// }
// 箭头函数的定义方法  用any会关闭ts的类型检查  
const identity = <T>(arg: T): T  => {
    return arg;
}





// function loggingIdentity<T>(arg: T): T {
//     console.log(arg.length);  // Error: T doesn't have .length
//     return arg;
// }
function loggingIdentity<T>(arg: T[]): T[] {
    console.log(arg.length);  // Array has a .length, so no more error
    return arg;
}
// ts手动指定<string>
let output = identity<string>("myString");  // type of output will be 'string'
console.log(output);

// ts会自动推断类型的  所以没有必要指定
output = identity("myString");  // type of output will be 'string'
console.log(output);


// 泛型可以同时指定多个
const fn = <T,K>(a: T, b:K): T  => {
    console.log(b);
    return a
}

let res  = fn(10,{name:"yrq",age:12})
console.log(res);

// 可以利用接口限制泛型
interface Inter {
    length: number;
}
// T类型中必须要含有length属性 泛型T是Inter的子类
const fn2 = <T extends Inter,K>(a: T, b:K):number  => {
    console.log(b);
    return a.length
}

// 类中使用泛型
interface myInterface {
    name: string,
    age: string,
}
class MyClass<T extends myInterface> {
    name: T;
    constructor(name: T) {
        this.name = name;
    }
}

let myObj = {
    name: "zyf",
    age: '22',
} 

const mc = new MyClass(myObj)
console.log(mc.name);


// let myIdentity: <T>(arg: T) => T = identity;
// let myIdentity2: { <T>(arg: T):T }  = identity;

// interface GenericIdentityFn {
//     <T>(arg: T): T;
// }

// let myIdentity3: GenericIdentityFn = identity;