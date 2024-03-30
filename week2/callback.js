'use strict'

// 자바스크립트는 동기적이다. = hoisting 이후부터 작성한 순서에 맞추어 하나하나씩 실행됨
// hoisting: var, function에서 선언부가 제일 위로 올라감
console.log('1');
// 콜백 함수 (1초가 지난 후에 함수를 'call' 해줘)
setTimeout(() => console.log('2'), 1000);   // 브라우저에게 요청 보낸 후 기다리지 않고 아래 실행
console.log('3'); 

// 콜백의 두 가지 종류
// 1. synchronous callback (즉각적 실행, 동기)
function printImmediately(print) {
    print();
}
printImmediately(() => console.log('hello'));

// 2. asynchronous callback (언제 실행될지 예측 불가, 비동기)
function printWithDelay(print, timeout) {
    setTimeout(print, timeout);
}
printWithDelay(() => console.log('async callback'), 2000);

// 콜백 지옥 (가독성 안좋음, 디버깅 어려움)
class UserStorage {
    loginUser(id, password, onSuccess, onError) {
        setTimeout(() => {
            if (
                (id === 'hamster' && password === 'ham') ||
                (id === 'coder' && password === 'academy')
            ) {
                onSuccess(id);  // onSuccess 콜백을 불러 id를 전달해줌
            } else {
                onError(new Error('not found'));    // onError 콜백을 불러서 Error라는 객체를 만들어 not found를 전달해줌
            }
        }, 2000);
    }

    getRoles(user, onSuccess, onError) {
        setTimeout(() => {
            if (user === 'hamster') {
                onSuccess({ name: 'hamster', role: 'admin' });
            } else {
                onError(new Error('no access'));
            }
        }, 1000);
    }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage.loginUser(
    id,
    password,
    user => {
        userStorage.getRoles(
            user,
            userWithRole => {
                alert(`Hello ${user.name}, you have a ${user.role} role`);
            },
            error => {
                console.log(error);
            }
        );
    },
    error => {
        console.log('error');
    }
);
