# 비동기적 동작과 콜백함수

# 소개

JavaScript는 기본적으로 싱글스레드로 동작한다. 그러나 비동기적으로 프로그램이 동작하기도 한다. 어떻게 가능한걸까?

# JavaScript의 기본적인 동작 원리

JS는 기본적으로 코드 순서대로(동기적으로) 프로그램이 실행된다.

다음의 예제를 통해 자세히 알아보겠다.

```jsx
console.log('Hello');
console.log('Wolrd');
```

프로그램이 실행되는 절차는 다음과 같다. (기본적으로 JS는 스택 영역에 실행할 코드를 저장하고 실행한다.)

1. `main()`를 스택에 `push`
2. `console.log('Hello')`를 스택에 `push`
3. `console.log('Hello')` 실행 후 스택에서 `pop`
4. `console.log('World')`를 스택에 `push`
5. `console.log('World')` 실행 후 스택에서 `pop`
6. `main()`을 스택에서 `pop`
7. 프로그램 종료

매우 순서대로 프로그램이 실행되는 모습을 알 수 있다.

![스크린샷 2022-06-18 오후 1.09.17.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f74888ee-7610-4ea9-bfc9-cf01dcd0d275/스크린샷_2022-06-18_오후_1.09.17.png)

# JavaScript의 비동기적 동작

그러나 JS는 비동기적 동작을 지원한다.

*동기와 비동기적 동작을 차이를 나타내는 그림*

![Async.jpeg](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/06a6d28d-11c6-49d8-9122-f2496fecfbcc/Async.jpeg)

동기적 동작: 시작된 하나의 작업이 끝날 때까지 다른 작업을 시작하지 않고 기다렸다가 동작하는 방식 (싱글스레드라 생각하면 편함)

비동기적 동작: 시작된 작업의 완료 여부와 관계없이 새로운 작업을 시작하는 방식 (멀티스레드라 생각하면 편함)

## 왜 비동기적 동작을 지원할까?

- 네트워크 응답 처리: 사용자가 서버에 요청을 보냈을 때, 응답이 처리될 때까지 무작정 기다릴 수 없다.
- 사용자 이벤트 처리: 이벤트는 예측이 불가능하다. 따라서 비동기적으로 동작
- 파일을 읽고 쓰는 등의 파일 시스템 작업
- 말고도 예시가 꽤 많을 것이다 . . .

## 비동기적 동작을 보여주는 예시

다음과 같은 동작을 하는 프로그램을 작성해본다.

1. Hello 출력
2. 3초 대기
3. World 출력
4. !!!!! 출력

### 코드

```jsx
console.log("Hello");

// 아래는 콜백 함수다.
setTimeout(function() { // 3초 대기 후 코드 실행
	console.log("World");
}, 3000);

console.log("!!!!!");
```

### 코드 실행 결과

![스크린샷 2022-06-18 오후 1.14.08.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/8aeae338-4ede-44b9-8d85-4b8e2f7bf75d/스크린샷_2022-06-18_오후_1.14.08.png)

우리의 기대와 다른 출력 결과가 나왔다.

```
우리의 기대

Hello
(3초 대기 ...)
World
!!!!!
```

### 싱글스레드인 JS가 어떻게 블로킹 없이 비동기 동작을 하는걸까?

- 블로킹: 작업을 하나씩만 해결 가능
- 논블로킹: 블로킹의 반대 개념으로 멀티태스킹과 비슷하게 생각

위의 현상을 설명하기 위해 다음 그림을 보자

# JavaScript Runtime

*자바스크립트 런타임*

[js내부.webp](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/83d769e9-f3c7-4d7b-811b-c11e2027cfc0/js내부.webp)

- **런타임**이란 코드가 실행되는 **환경**이다.
    - JS 런타임은 보통 **웹브라우저, Node.js**가 대표적
- 내부엔 크게 세 가지 영역이 있다.
    - **JavaScript Engine** (Heap, Stack의 영역으로 대표적으로 크롬의 V8)
        - **Callback Queue**
    - **Web APIs**
    - **Event Loop**

### **JavaScript Engine**

- 코드를 해석, 실행하는 역할
- 싱글스레드
- **Callback Queue**도 여기에 포함되어 있다

### **Wep APIs**

- 웹 브라우저에서 제공하는 기능들(Ajax, setTimeout, 이벤트 핸들러)을 실행
- JavaScript Engine의 쓰레드와는 다른 쓰레드(브라우저가 제공하는)에서 동작한다.

### **Callback Queue**

- 콜백함수들을 저장하는 큐
- Task Queue라고 부르기도 함
- 여기에 저장된 콜백 함수들은 스택이 비는 순간 스택에 푸시됨

### **Event Loop**

- 스택과 콜백큐를 체크하는 루프
- Callback Queue에 저장된 콜백 함수가 있을 때 스택이 비어있으면 푸시함
- 큐와 스택을 검사하는 작업을 **Tick** 이라 부른다.

## 비동기적 동작 방식

1. `Stack`에 `코드A` `push`
2. `A`가 `Web APIs 기능`이면 `pop`
    1. `A`를 `Web APIs`에 전달
    2. `Web APIs` 기능 실행
    3. 대기 완료 후 `A`를 `Callback Queue`로 전달
    4. `Event Loop`가 `Stack`이 비어있는 것을 확인하면 `A`를 스택에 `push`
    5. `A`를 실행 후 `pop`
    6. 프로그램 종료

다음 예시를 통해 자세하게 설명해보겠다.

### 예시2

```jsx
console.log("Hello");
setTimeout(function() { // 0초 대기 후 코드 실행
	console.log("World");
}, 0);
console.log("!!!!!");
console.log("!!!!!");
console.log("!!!!!");
console.log("!!!!!");
console.log("!!!!!");
console.log("!!!!!");
console.log("!!!!!");
console.log("!!!!!");
console.log("!!!!!");
console.log("!!!!!");
console.log("!!!!!");
console.log("!!!!!");
console.log("!!!!!");
console.log("!!!!!");
console.log("!!!!!");
console.log("!!!!!");
console.log("!!!!!");
console.log("!!!!!");
console.log("!!!!!");
console.log("!!!!!");
console.log("!!!!!");
```

1. `main()` `push`
2. `console.log("Hello");` `push`
    1. 실행, `pop`
3. `setTimeout(...)` `push`
    1. `setTimeout(...)` `pop`
    2. `setTimeout()`의 인자를 전달 (`function(){...}, 3000` -> `Web APIs`)
    3. 설정된 대기시간까지 대기 (Web APIs에 들어온 순간부터 타이머 시작)
    4. 대기 완료 후 `function()`를 `Callback Queue`로 전달
4. (`console.log(”!!!!!”);` `push`, 실행, `pop` )* 20번
5. `main()` `pop`
6. `Event Loop`가 `Stack`이 비어있는 것을 확인 → `function()` `push`
7. 실행, `pop`
8. 프로그램 종료

![스크린샷 2022-06-18 오후 1.12.49.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/9e078f85-182c-48c3-b274-5c091dfccd78/스크린샷_2022-06-18_오후_1.12.49.png)

따라서 위와 같이 `World` 가 제일 마지막에 출력되는 모습

## 보면 좋은 자료

아래 링크에 들어가보면 위의 내용을 아주 잘 설명해준 동영상이 있다.

[](http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D)

# 비동기 처리

WebAPI를 사용할 때 동기적 실행을 원할 때가 있을 것이다.

우리는 다음 예제를 정상적으로 동작하게 할 것이다.

### 코드

```jsx
function printWorld(callbackParam) {
	console.log(callbackParam)
}

function callWorld() {
	let value;

	console.log("[Wait 3 sec . . .]");

	setTimeout(function() {
		value = "World";
	}, 3000);

	return value;
}

// main 영역
console.log("Hello");
const callbackParam = callWorld();
printWorld(callbackParam);
```

### 결과

![스크린샷 2022-06-18 오후 2.26.00.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/525c8323-912b-4122-a803-ff5dad29b4bc/스크린샷_2022-06-18_오후_2.26.00.png)

`undefined` 가 출력되며 원하는 결과가 출력되지 않는다.

비동기적으로 동작하여 `callWolrd()`의 반환값이 `callbackParam`에 전달되기 전에 `printWorld()`함수에 들어가 실행하게 되어 `undefined`가 출력된다.

### 원하던 결과

![스크린샷 2022-06-18 오후 2.32.40.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/8567d1a9-2b4e-4c49-90a3-c845b2b0f6da/스크린샷_2022-06-18_오후_2.32.40.png)

# 콜백 함수

- 간단히 말하면 함수(funcA) 안에서 실행하는 또 다른 함수(funcB) 이다.
    - funcA(funcB, …)
    - 익명함수로도 전달 가능하다.
    - 따라서 사실 위에서 계속 사용한 **setTimeout(…)**은 콜백 함수이다.
- 매개변수로 넘겨받은 함수는 일단 넘겨받고, 때가 되면 나중에 호출한다는 의미에서 콜백 함수
- 재사용과 관리가 용이하다는 장점으로 사용한다.

```jsx
// 콜백 함수
function printWorld(callbackParam) {
	console.log(callbackParam)
}

// 콜백 사용
function callWorld(callback) {
	let value;

	console.log("[Wait 3 sec . . .]");

	setTimeout(function() {
		value = "World";
		callback(value); // printWorld() 실행
	}, 3000);
}

console.log("Hello");
callWorld(printWorld);
```

### 콜백 지옥 (Callback Hell)

- 그러나 콜백 함수는 위와 같이 가독성이 매우 안 좋아지는 상황이 발생할 수도 있다. (에러처리도 꽤나 힘들어진다.)

```jsx
a(function (resultsFromA) {
  b(resultsFromA, function (resultsFromB) {
    c(resultsFromB, function (resultsFromC) {
      d(resultsFromC, function (resultsFromD) {
        e(resultsFromD, function (resultsFromE) {
          f(resultsFromE, function (resultsFromF) {
            console.log(resultFromF);
          })    
        })
      })
    })
  })
});
```

이에 대한 해결책으로 ES6부터는 `Promise 객체`가 있다.
    
# JavaScript
    
    - 사용자와 상호작용하기 위해 태어난 언어
    - HTML 위에서 동작하는 언어
    - HTML을 동적으로 행동하는 것처럼 도와주는 언어
    - 콘솔을 이용해 JS를 사용하면 페이지 기반으로 동작한다 → 데이터를 손쉽게 마이닝 가능
    
# 깨달음
    
    - { 문제를 인식 → 문제를 검색 → 문제를 해결 } 인-검-해 이것이 코딩
    - 중복을 제거하는데 집중해
