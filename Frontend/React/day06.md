# PropTypes

- 부모로부터 전달받은 prop의 데이터 타입을 검사한다.
    
    → 자식에서 명시한 데이터 타입 ≠ 부모에서 넘겨주는 데이터 타입일 경우 콘솔에 에러 경고문 출력
    
- JS의 유연한 특성 때문에 필요하다.
- PropTypes를 이용한 타입 정의만으로도 좋은 문서가 될 수 있다. 협업할 경우 혹은 파일이 커질 경우 코드를 뜯어보지 않더라도 타입을 알기 쉽다.

---

# promise와 async/await

- JS의 비동기처리를 해결하기 위한 요소들
- API 통신 중 발생되는 문제를 해결할 수 있다. (데이터를 요청하고 받기 전에 데이터를 출력하는 문제를 해결)

## Promise(ES6)

- 비동기 처리에 활용되는 객체다.

### Promise의 3가지 상태

- Pending(대기) - 비동기 로직 처리의 미완료 상태
- Fulfilled(이행) - 비동기 로직 처리가 완료된 상태로 Promise 결과값 반환 상태
- Rejected(실패) - 비동기 로직 처리의 실패 또는 오류 상태

### Pending

```jsx
new Promise();

new Promise((resolve, reject) => {});
```

위와 같이 `Promise` 객체를 생성하면 대기 상태이다. 인자는 `resolve`(실행)과 `reject`(실패)를 갖는다.

### Fulfilled

```jsx
function getData() {
	return new Promise((resolve, reject) => {
		let data = 10;
		resolve(data); // resolve를 이용해 promise 실행
	})
}

getData().then((resolvedData) => console.log(resolvedData));
```

- `resolve` 에 인자를 넣어주면 `Promise` 가 실행된다.
- `then` 을 사용해 결과값을 받을 수 있다. (`resolvedData`)

### Rejected

```jsx
function getData() {
	return new Promise((resolve, reject) => {
		reject(new Error("this is rejected!")); // reject를 이용해 고의적 실패 실행
	})
}

getData().catch((err) => console.log(err));
```

- `Promise` 의 객체인 `reject` 인자는 호출시 실패 상태가 된다.
- `catch` 를 이용해 결과값과 예외를 확인할 수 있다.

### 내 코드

```jsx
function getCurPos() {
		return new Promise((resolve, reject) => {
			navigator.geolocation.getCurrentPosition(pos => {
				center.lat = pos.coords.latitude;
				center.lng = pos.coords.longitude;
				resolve(center);
			})
		})
	}
	getCurPos().then(center => console.log(center));
```

잘 된당

## async/await(ES7)

기존의 Promise 보다 더욱 깔끔하게 코드 작성 가능

## Async

```jsx
async function() {
	return "id";
}

const user = async() => {
	return "id";
}

// 위 두 코드는 같은 코드로 볼 수 있다.
```

- 함수 앞에 `async` 키워드를 붙여서 `async` 함수로 만든다.
- `async` 함수는 `Fulfiled Promise` 를 반환한다.
- 따라서 위 코드는 아래 코드와 동일하다고 볼 수 있다.

```jsx
user().then(("id") => console.log("id")); 
```

---

# Const

상수긴 하지만 배열이나 오브젝트 같은 놈들의 요소들은 수정이 가능하다.

또한 위의 과정을 거치며 원본 데이터도 변한다 ………….. 불완전한 상수다.

---

# 즉시 실행 함수(IIFE)

```jsx
// 즉시 실행 함수
	(async function() {
		const result = await navigator.geolocation.getCurrentPosition(pos => {
			center.lat = pos.coords.latitude;
			center.lng = pos.coords.longitude;
			return center.lat;
		});
	})();
```
