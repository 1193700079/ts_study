// function printLabel(labelledObj: { label: string }) {
//   console.log(labelledObj.label);
// }

// let myObj = { size: 10, label: "Size 10 Object" };
// printLabel(myObj);

// 一：
// 接口表述法：
interface LabelledValue {
    label: string;
    size?: number;
    test?: string;
    readonly y: number; // 不能修改的 当做属性  而const是变量
}

// 要求接受的参数里面必须有名称为label的string！
// 返回值为一个对象哦(其中必须携带 label 和 size 就行，顺序无所谓的)
const  printLabel =  (labelledObj: LabelledValue): { label: string;size:number} => {
    let label:string = "new label";
    let  labelObj = {...labelledObj ,label , size:label.length  }
    // labelledObj.y = 10
    console.log(labelledObj.label);
    if (labelledObj.size) {
         console.log(labelledObj.size);
    }
   
    if (labelledObj.test) {
console.log(labelledObj.test);
    }
    return labelObj
  
  
}

let myObj = {size: 10, label: "Size 10 Object",y:1314};
let newObj = printLabel(myObj);
console.log(newObj);



let arr_a: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> =  [1, 2, 3, 4,5];
// ro[0] = 12; // error!
// ro.push(5); // error!
// ro.length = 100; // error!
// arr_a = ro; // error!
arr_a = ro as number[];
console.log(arr_a);



interface SquareConfig {
    color?: string;
    width?: number;
    [propName: string]: any;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
    let newSquare = {color: "white", area: 100};
  if (config.color) {
    newSquare.color = config.color;
  }
  if (config.width) {
    newSquare.area = config.width * config.width;
  }
  return newSquare;
}

// 会进行额外的属性检查  所以要加入SquareConfig
let mySquare = createSquare({ colour: "red", width: 100 } as SquareConfig);

// 会进行额外的属性检查  所以要加入[propName: string]: any;
let mySquare2 = createSquare({ colour: "red", width: 100 });

// 会进行额外的属性检查  传入一个对象
let squareOptions = { colour: "red", width: 100 };
let mySquare3 = createSquare(squareOptions);


// 二：
// 接口里面定义函数
interface SearchFunc {
  (source: string, subString: string): boolean;
}
// const mySearch: SearchFunc;
let mySearch: SearchFunc; //只能用let接收
//参数名称不需要和接口保持一致的,同时参数类型也可以省去,ts会自动推断
// mySearch = (src: string, sub: string) => {   
mySearch = (src, sub) => {   
    let result = src.search(sub);
    console.log(result);
  return result > -1;
}
console.log(mySearch("123456", "345"));


// 三： 可索引的类型（支持字符串和数字索引）

// 在数字索引和字符串索引同时使用的时候，数字索引的返回必须是字符串索引类型返回的子类型
interface StringArray {
  [index: number]: string;
//   [index: number]: number;
}

let myArray: StringArray;
myArray = ["Bob", "Fred"];
// myArray = [123,456];

let myStr: string = myArray[0];
// let myStr: number = myArray[0];
console.log(myStr)

// 字符串索引
// interface StringArray2 {
//      [index: string]: number;
//     length?: number;
//     // name: string
// }

// let myArray2: StringArray2;
// myArray2["aaa"] = 10
// myArray2["bbb"] = 20


// let myNumber: number = myArray2["aaa"];
// console.log(myNumber)

// 四：类接口
interface ClockInterface {
    currentTime: Date;
    setTime(d: Date):void;
    getTime():Date;
}

class Clock implements ClockInterface {
    currentTime: Date;
    constructor(h: number, m: number, currentTime: Date) { 
        this.currentTime = currentTime;
    }
    getTime(): Date {
        return this.currentTime
    }
    setTime(d: Date):void {
       this.currentTime = d;
    }
}

let clock = new Clock(1, 2, new Date())
console.log(clock.currentTime.toLocaleString());

export const Sleep = (ms:number) => {
  return new Promise(resolve=>setTimeout(resolve, ms))
}

// 异步休眠
// const test = async()=>{
// 	console.log(1)
// 	await Sleep(1500)
// 	console.log(2)
// }
// test()


// 函数实现，参数 delay 单位 毫秒 ；
function sleep(delay:number) {
    let start = (new Date()).getTime();
    while ((new Date()).getTime() - start < delay) {
        // 使用  continue 实现；
        continue; 
    }
}
sleep(5000);

clock.setTime(new Date())
// .toLocaleString() 调用日期格式化 2021-12-14 13:25:11
console.log(clock.getTime().toLocaleString());
