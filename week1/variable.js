// variable, rw(read/write)
// 변수 선언 let

// global scope: 블록 밖에서 참조 가능
let globalName = "global name";

// block scope: 블록 밖에서는 참조 불가
{
  let name = "hee";
  console.log(name);
  name = "hi";
  console.log(name);
}
console.log(name); // 아무 값도 나오지 않음
console.log(globalName);

// var 쓰면 안되는 이유: hoisting(선언부를 최상단으로 끌어올림), no block scope

// constant(상수) 한번 할당하면 값이 바뀌지 않음, read only
const daysInWeek = 7;
const maxNumber = 5;

// function도 변수에 할당 가능 (first-class-function)
// primitive type: 값 자체가 메모리에 저장됨
// object: object를 가리키는 reference가 메모리에 저장됨

// immutable data types: primitive types, frozen objects
// mutable data types: all objects

const count = 17;
const size = 17.1;
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = "not a number" / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// bigInt: 최신 기능(사용 자제)
const bigInt = 12391298314124124141312312312312313123;
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);
Number.MAX_SAFE_INTEGER;

const char = 'c';
const mimi = 'mimi';
const greeting = 'hello' + mimi;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${mimi}`;
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);
console.log('value: ' + helloBob + 'type: ' + typeof helloBob);

const canRead = true;
const test = 3 < 1;
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined
let x;
console.log(`value: ${x}, type: ${typeof x}`);

// 고유한 식별자 위해 사용
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);
// description: string으로 변환
console.log(`value: ${symbol1.description}, type: ${typeof symbol1.description}`);

// Dynamic typing
let text = 'hello';
console.log(text.charAt(0));    // h
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);    // 75
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`);    // 4
console.log(text.charAt(0));    // error

// object
const elf = { name: 'elf', age: 90 };
elf.age = 91;
