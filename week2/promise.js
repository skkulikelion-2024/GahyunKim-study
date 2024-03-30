'use strict'

// promise: 비동기적인 작업시 콜백 함수 대신에 사용될 수 있는 자바스크립트 객체
// state, producer/consumer

// state: pending -> fulfilled / rejected
// producer vs consumer

// 1. producer
// executor 라는 콜백 함수를 생성자로 전달해줘야 하는데, 이 콜백 함수에는 두 가지의 콜백 함수가 있음.
// 1) resolve: 기능을 정상적으로 수행해서 마지막에 최종 데이터 전달
// 2) reject: 기능 수행하다가 문제 생겼을때 호출하게 됨
// ⭐️ 새로운 promise를 만드는 순간 전달한 executor라는 콜백 함수가 바로 실행됨
const promise1 = new Promise((resolve, reject) => {
    // 헤비한 일들.. 네트워크, 파일 읽기 등을 비동기적으로 처리
    console.log('doing something');
});

// 프로미스 안에서 네트워크 통신을 하는 것처럼 딜레이를 줌
const promise2 = new Promise((resolve, reject) => {
    console.log("doing something");
    setTimeout(() => {
        resolve('cat');
        // reject(new Error('no network'));
    }, 2000);
});

// 2. consumers: then, catch, finally 이용해서 값을 받아옴
// then은 성공한 경우를 의미
// value라는 파라미터에 프로미스가 정상적으로 실행된 경우 resolve 콜백 함수에서 전달된 cat이 들어감
promise2
    .then((value) => {  // 똑같은 프로미스를 리턴하기 때문에 그 리턴된 프로미스의 catch를 다시 호출 가능 
        console.log(value);
    })
    .catch(error => {
        console.log(error);
    })
    .finally(() => {    // 성공, 실패에 상관없이 항상 실행
        console.log('finally')
    });

// 3. promise chaining 
// 1초 후에 1을 전달해주는 프로미스
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
});

// then에서는 값을 바로 전달해도 되고 또 다른 비동기인 프로미스도 전달해도 됨
fetchNumber
    .then(num => num * 2)
    .then(num => num * 3)
    .then(num => {  // 다른 서버에 보내서 다른 수로 변환된 값을 받아오게끔
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(num - 1), 1000);
        });
    })
    .then(num => console.log(num));

// 4. error handling
const getHen = () =>    // 1초 후에 닭 반환하는 프로미스 객체 생성
    new Promise((resolve, reject) => {
        setTimeout(() => resolve('🐔'), 1000);
    });
const getEgg = hen =>   // 닭 받아와서 1초 후에 달걀 반환하는 프로미스 객체 생성
    new Promise((resolve, reject) => {
        setTimeout(() => reject(new Error(`error! ${hen} => 🥚`)), 1000);
    });
const cook = egg =>     // 달걀 받아와서 1초 후에 후라이 반환하는 프로미스 객체 생성
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${egg} => 🍳`), 1000);
    });

// 함수 호출 후 .then 메서드로 처리 (각 단계에서 이전 단계의 결과 받아와서 다음 작업 수행)
// 비동기적인 작업 - 각 작업이 완료되기까지 기다리지 않고 다음 작업 계속해서 진행
getHen()    
    .then(hen => getEgg(hen))   // 받아오는 값을 다음 함수로 바로 하나 호출할 때는 생략 가능 
    .then(cook)
    .then(egg => cook(egg))     // (cook)으로도 쓸 수 있음
    .then(meal => console.log(meal));