// 1. function declaration
// function name(param1, param2) {body...return;}
// function is object in JS
function printHello() {
    console.log('Hello');
}
printHello();

function log(message) {
    console.log(message);
}
log("Hello");
log(1234);

// 2. parameters
// premitive parameters: passed by value
// object parameters: passed by reference
function changeName(obj) {
    obj.name = 'coder';
}
const hamster = { name: 'hamster' };
changeName(hamster);
console.log(hamster);

// 3. default parameters (ES6)
// 값 지정하지 않으면 'unknown' 출력
function showMessage(message, from = 'unknown') {
    console.log(`${message} by ${from}`);
}
showMessage('hi');  

// 4. rest parameters (ES6)
// ...args 배열 형태로 전달
function printAll(...args) {
    for (let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }
}
printAll('hamster', 'capybara', 'cat');

// 5. local scope
// 밖에서는 안이 보이지 않고 안에서만 밖을 볼 수 있다.
let globalMessage = 'global';
function printMessage() {
    let message = 'hello';
    console.log(message);
    console.log(globalMessage);
    function printAnother() {
        console.log(message);
        let childMessage = 'hello';
    }
}
printMessage();

// 6. return value
function sum(a, b) {
    return a + b;
}
const result = sum(1, 2);
console.log(`sum: ${sum(1, 2)}`);

// 7. early return, early exit
// 조건이 맞지 않을 때는 빨리 리턴해서 함수를 종료

// first-class function
// 1. function expression 함수 표현식
// 함수 선언되기 이전에 호출 가능 (hoisting)
// anonymous function
const print = function () {
    console.log('print');
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));

// 2. callback function using function expression
function randomQuiz(answer, printYes, printNo) {
    if (answer === 'capybara') {
        printYes();
    } else {
        printNo();
    }
}
// anonymous function
const printYes = function () {  
    console.log('yes!');
};
// named function
const printNo = function print () {
    console.log('no!');
};
randomQuiz('wrong', printYes, printNo);
randomQuiz('capybara', printYes, printNo);

// arrow function (항상 익명함수)
const simplePrint = () => console.log('simplePrint');
const add = (a, b) => a + b;
const simplyMultipy = (a, b) => {
    return a * b;
}

// IIFE: immediately invoked function expression
// 선언하면서 바로 실행
(function hello() {
    console.log("IIFE");
})();

const calculate = (command, a, b) => {
    if (command === 'add') {
        return a + b;
    } else if (command === 'substract') {
        return a - b;
    } else if (command === 'divide') {
        return a / b;
    } else if (command === 'multipy') {
        return a * b;
    } else if (command === 'remainder') {
        return a % b;
    }
}