// async & await

// 오래 걸리는 작업은 비동기적인 처리를 해줘야 한다!
// 1.async
// 코드 안의 블록들이 자동적으로 프로미스로 변환됨
async function fetchUser() {
    return 'cat';
}

const user = fetchUser();
user.then(console.log)
console.log(user);

// 2. await
// 함수 안에서만 사용 가능
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}   // 정해진 밀리초가 지나면 resolve를 호출하는 프로미스를 리턴

async function getApple() {
    await delay(2000);  // delay가 끝날 떄까지 기다려줌
    return '🍎';        // 3초 후에 사과 리턴하는 프로미스 만들어짐
}

async function getBanana() {
    await delay(1000);
    return '🍌';
}

async function pickFruits() {
    // 프로미스 만드는 순간 프로미스가 실행됨
    const applePromise = getApple();
    const bananaPromise = getBanana();
    // 동기화
    const apple = await applePromise;
    const banana = await bananaPromise;
    return `${apple} + ${banana}`;
}

pickFruits().then(console.log);

// promise APIs
function pickAllFruits() {
    // 프로미스 배열을 전달하게 되면 모든 프로미스들이 병렬적으로 받을 때까지 모아줌
    return Promise.all([getApple(), getBanana()])
        .then(fruits => fruits.join(' + '));
}
pickAllFruits().then(console.log);

function pickOnlyOne() {
    // 먼저 수행되는 것이 전달됨
    return Promise.race([getApple(), getBanana()]);
}

pickOnlyOne().then(console.log);