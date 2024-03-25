// 1. string concatenation
console.log('my' + 'cat');
console.log('1' + 2);   // 숫자를 문자열로 변환
console.log(`string literals: 1 + 2 = ${1 + 2}`);

// 2. numeric operators
console.log(1 + 1);
console.log(1 - 1);
console.log(1 / 1);
console.log(1 * 1);
console.log(5 % 2);
console.log(2 ** 3);

// 3. increment and decrement operators
let counter = 2;
const preIncrement = ++counter; // 전위연산 (증가한 후 할당)
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);
const postIncrement = counter++;    // 후위연산 (할당한 후 증가)
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);
const preDecrement = --counter;
console.log(`preDecrement: ${preDecrement}, counter: ${counter}`);
const postDecrement = counter--;
console.log(`postDecrement: ${postDecrement}, counter: ${counter}`);

// 4. assigment operators
let x = 3;
let y = 6;
x += y;
x -= y;
x *= y;
x /= y;

// 5. comparison operators
console.log(10 < 6);
console.log(10 <= 6);
console.log(10 > 6);
console.log(10 >= 6);

// 6. logical operators
const value1 = false;
const value2 = 4 < 2;

// (중요) or 연산자는 true가 나오면 멈춤
console.log(`or: ${value1 || value2 || check()}`);  // true

// and 연산자는 false가 나오면 멈춤
console.log(`and: ${value1 && value2 && check()}`);

// and로 null check: null이면 false라서 뒷부분 실행 안됨
//    if (nullableObject != null) {
//        nullableObject.something;
//    }

function check() {
    for (let i = 0; i < 10; i++) {
        console.log('🥺');
    }
    return true;
}

console.log(!value1);

// 7. equality
const stringFive = '5';
const numberFive = 5;

// == loose equality with type conversion
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === strict equality, no type conversion
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// object equality by reference
// hamster1 hamster2에는 서로 다른 reference가 들어있음
const hamster1 = { name: 'hamster' };
const hamster2 = { name: 'hamster' };
const hamster3 = hamster1;
console.log(hamster1 == hamster2);
console.log(hamster1 === hamster2);
console.log(hamster1 === hamster3);

// equality-puzzler
console.log(0 == false);    // true
console.log(0 === false);   // false
console.log('' == false);   // true
console.log('' === false);  // false
console.log(null == undefined);     // true
console.log(null === undefined);    // false

// 8. conditional operators: if
const name = 'hamster';
if (name === 'hamster') {
    console.log("Welcome, Hamster!");
} else if (name === 'cat') {
    console.log('You are amazing cat');
} else {
    console.log('unknown');
}

// 9. ternary operator: condition ? value1 : value2:
console.log(name === 'hamster' ? 'yes' : 'no');

// 10. switch
// used for multiple if checks, type checks, enum-like value check, 
const browser = 'IE';
switch (browser) {
    case 'IE':
        console.log('go away!');
        break;
    case 'Chrome':
        console.log('love you!');
        break;
    case 'Firefox':
        console.log('love you!');
        break;
    default:
        console.log('same all!');
        break;
}

// 11. loops 
let i = 3;
while (i > 0) {
    console.log(`while: ${i}`);
    i--;
}

do {
    console.log(`do while: ${i}`);
    i--
} while (i > 0);

for (i = 3; i > 0; i--) {
    console.log(`for: ${i}`);
}

for (let i = 3; i > 0; i = i - 2) {
    console.log(`inline variable for: ${i}`);
}

for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        console.log(`i: ${i}, j: ${j}`);
    }
}

// break, continue
for (let i = 0; i <= 10; i++) {
    if (i % 2 !== 0) {
        continue;
    }
    console.log(`q1. ${i}`);
}

for (let i = 0; i <= 10; i++) {
    console.log(i);
    if (i === 8) {
        break;
    }
}