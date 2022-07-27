# Hook

## 개요

<aside>
💡 Hook은 React 버전 16.8부터 React 요소로 새로 추가되었다. Hook을 이용하여 기존 Class 바탕의 코드를 작성할 필요 없이 상태 값과 여러 React의 기능을 사용할 수 있다.

</aside>

```jsx
import React, { useState } from 'react';

function Example() {
  // "count"라는 새로운 상태 값을 정의합니다.
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

`useState` 는 우리가 Hook에서 처음 배우게 될 함수다. 위의 예제는 아래에서 자세히 설명한다.

### Hook이란?

Hook은 특별한 함수다. 예를 들어 `useState` 는 state를 함수 컴포넌트 안에서 사용할 수 있게 해준다. 이러한 함수를 Hook이라 한다.

### Hook의 특징

- 선택적 사용
- 100% 이전 버전과의 호환성
- 클래스 없이 React 기능들을 사용하는 방법을 제시함 → 클래스형 컴포넌트에서 함수형 컴포넌트로 넘어가게 된 계기

---

## Using the State Hook

```jsx
import React, { useState } from 'react';

function Example() {
  // ...
}
```

### 언제 Hook을 사용해야 할까?

함수 컴포넌트를 사용하던 중 state를 추가하고 싶을 때 Hook을 이용하면 된다.

## state 변수 선언하기

함수 컴포넌트는 `this` 를 가질 수 없기 때문에 `this.state` 를 할당하거나 읽을 수 없다. 대신, `useState` Hook을 직접 컴포넌트에 호출한다.

- JS의 `this` 키워드는 다른 언어와 달라서 많은 개발자들에게 혼동을 준다. 리액트에서는 이러한 이유로 클래스형 컴포넌트보다 함수형 컴포넌트 사용을 권장한다.

```jsx
import React, { useState } from 'react';

function Example() {
  // 새로운 state 변수를 선언하고, 이것을 count라 부르겠습니다.
  const [count, setCount] = useState(0);
```

### useState를 호출하는 것은 무엇을 하는 걸까?

→ state 변수를 선언할 수 있다. 위에 선언한 변수는 `count` 라고 부르지만 `banana` 처럼 아무 이름으로 지어도 된다. `useState` 는 클래스 컴포넌트의 `this.state` 가 제공하는 기능과 똑같다. 일반적으로 일반 변수는 함수가 끝날 때 사라지지만, state 변수는 React에 의해 **사라지지 않는다.**

### useState의 인자로 무엇을 넘겨주어야 할까?

`useState()` Hook의 인자로 넘겨주는 값은 state의 초기 값이다.함수 컴포넌트의 state는 클래스와 달리 객체일 필요는 없고, 숫자 타입과 문자 타입을 가질 수 있다. 위 예시는 사용자가 버튼을 얼마나 많이 클릭했는지 알기를 원하므로 `0` 을 해당 state의 초기 값으로 선언했다. (2개의 다른 변수를 저장하기를 원한다면 `useState()` 를 두 번 호출해야 한다.)

### useState는 무엇을 반환할까?

state 변수, 해당 변수를 갱신할 수 있는 함수 이 두 가지 쌍을 반환한다. 이것이 바로 `const [count, setCount] = useState()` 라고 쓰는 이유다. 클래스 컴포넌트의 `this.state.count` 와 `this.setState` 와 유사하다.

이제 `useState` 를 이용해 많은 것을 만들 수 있다.

`count` 라고 부르는 state 변수를 선언하고 `0` 으로 초기화한다. React는 해당 변수를 리렌더링할 때 기억하고, 가장 최근에 갱신된 값을 제공한다.

갱신 방법: `setCount()` 호출

<aside>
💡 왜 `createState` 가 아니라 `useState` 일까?

컴포넌트가 렌더링할 때 오직 한 번만 생성되기 때문에 “Create” 라는 이름은 꽤 정확하지 않을 수 있다. 컴포넌트가 다음 렌더링을 하는 동안 `useState` 는 현재 state를 준다. Hook 이름이 항상 `use` 로 시작하는 이유도 있다.

</aside>

## state 가져오기

클래스 컴포넌트는 `count` 를 보여주기 위해 `this.state.count` 를 사용한다.

```jsx
<p>You clicked {this.state.count} times</p>
```

반면 함수 컴포넌트는 `count` 를 직접 사용할 수 있다.

```jsx
<p>You clicked {count} times</p>
```

## state 갱신하기

클래스 컴포넌트는 `count` 를 갱신하기 위해 `this.setState()` 를 호출한다.

```jsx
<button onClick={() => this.setState({ count: this.state.count + 1 })}>
    Click me
</button>
```

반면 함수 컴포넌트는 `setCount` 와 `count` 변수를 가지고 있으므로 `this` 를 호출하지 않아도 된다.

```jsx
<button onClick={() => setCount(count + 1)}>
    Click me
</button>
```

## 요약

```jsx
import React, { useState } from 'react';

function Example() {
  // "count"라는 새로운 상태 값을 정의합니다.
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

- **첫 번째 줄**: `useState` Hook을 React에서 가져온다.
- **네 번째 줄**: `useState` Hook을 이용하면 state 변수와 해당 state를 갱신할 수 있는 함수가 만들어진다. 또한 `useState` 의 인자의 값으로 `0` 을 넘겨주면 `count` 값을 0으로 초기화할 수 있다.
- **아홉 번째 줄**: 사용자가 버튼 클릭을 하면 `setCount` 함수를 호출하여 state 변수를 갱신한다. React는 새로운 `count` 변수를 `Example` 컴포넌트에 넘기며 해당 컴포넌트를 리렌더링한다.

### 팁: 대괄호가 의미하는 것은 뭘까?

```jsx
const [count, setCount] = useState(0);
```

위 자바스크립트 문법은 `"배열 구조 분해"` 라고 하고, `count` 와 `setCount` 총 2개의 값을 만들고 있다.

```jsx
var countStateVariable = useState(0);
var count = countStateVariable[0] // 첫 번째 아이템
var setCount = countStateVariable[1] // 두 번째 아이템
```

`useState` 를 이용하여 변수를 선언하면 2개의 아이템 쌍이 들어있는 배열로 만들어진다. 첫 번째 아이템은 현재 변수를 의미하고, 두 번째 아이템은 해당 변수를 갱신해주는 함수이다. 배열 구조 분해라는 특별한 방법으로 변수를 선언해주었기 때문에 `[0]` 이나 `[1]` 로 배열에 접근하는 것은 좋지 않을 수 있다.

---

## Hook의 규칙

Hook은 JavaScript 함수다. Hook을 사용할 때는 두 가지 규칙을 준수해야 한다. 이러한 규칙들을 자동으로 강제하기 위한 linter 플러그인이 있다.

### 최상위(at the Top Level)에서만 Hook을 호출해야 한다.

**반복문, 조건문 혹은 중첩된 함수 내에서 Hook을 호출하면 안된다.** 대신 early return이 실행되기 전에 항상 React 함수의 최상위에서 Hook을 호출해야 한다. 이 규칙에 따르면 컴포넌트가 렌더링 될 때마다 항상 동일한 순서로 Hook이 호출되는 것이 보장된다. 이러한 점은 React가 `useState` 와 `useEffect` 가 여러 번 호출되는 중에도 Hook의 상태를 올바르게 유지할 수 있도록 해준다.

### 오직 React 함수 내에서 Hook을 호출해야 한다.

**Hook을 일반적인 JavaScript 함수에서 호출하면 안된다.** 대신 아래와 같이 호출할 수 있다.

- React 함수 컴포넌트에서 Hook을 호출하기
- Custom Hook에서 Hook을 호출하기

이 규칙을 지키면 컴포넌트의 모든 상태 관련 로직을 소스코드에서 명확하게 보이도록 할 수 있다.

### ESLint 플러그인

위 두 가지 규칙을 강제하는 eslint-plugin-react-hooks 라는 ESLint 플러그인이 있다. 이 플러그인을 프로젝트에 추가할 수 있다.

이 플러그인은 Create React App 기본적으로 포함되어 있다.

```bash
npm install eslint-plugin-react-hooks --save-dev
```

```jsx
// ESLint 설정 파일
{
  "plugins": [
    // ...
    "react-hooks"
  ],
  "rules": {
    // ...
    "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
    "react-hooks/exhaustive-deps": "warn" // Checks effect dependencies
  }
}
```

---

# 클로저(Closure)

클로저는 내부 함수가 외부 함수의 맥락(context)에 접근할 수 있는 것을 가르킨다. 클로저는 JS를 이용한 고난이도의 테크닉을 구사하는데 필수적인 개념으로 활용된다.

## 예제1: 외부 함수, 내부 함수

```jsx
function outter() {
	function inner() {
		var title = 'Hello';
		alert(title);
	}
	inner();
}
outter();

/* 

실행 결과

Hello

*/

```

`outter` 의 내부에는 함수 `inner` 가 정의되어 있다. 함수 `inner` 를 내부 함수라고 한다. 내부 함수는 외부 함수의 지역 변수에 접근할 수 있다.

```jsx
function outter() {
	var title = 'Hello';
	function inner() {
		alert(title);
	}
	inner();
}
outter();

/* 

실행 결과

Hello

*/
```

내부 함수 `inner` 에서 `title` 을 호출했을 때 외부 함수인 `outter` 의 지역 변수에 접근할 수 있다.

## 예제2: 외부 함수의 지역 변수 소멸과 내부 함수 소멸 관계

```jsx
function outter() {
	var title = 'Hello';
	return function() {
		alert(title);
	}
}
inner = outter();
inner();

/* 

실행 결과

Hello

*/
```

실행 순서

1. `outter` 를 호출하여 리턴 값을 `inner` 에 저장한다.
2. `inner` 에 저장된 익명 함수를 실행한다.

`outter` 함수의 실행이 종료된 이후에도 지역 변수 `title` 이 살아있는 것을 알 수 있다. 위의 결과로 알 수 있듯이 **외부 함수는 내부 함수가 소멸될 때까지 소멸되지 않는 특성이 있다.**

## 예제3: Private 속성처럼 사용하기

```jsx
function factory_movie(title){
    return {
        get_title : function (){
            return title;
        },
        set_title : function(_title){
            title = _title
        }
    }
}
ghost = factory_movie('Ghost in the shell');
matrix = factory_movie('Matrix');
 
alert(ghost.get_title());
alert(matrix.get_title());
 
ghost.set_title('공각기동대');
 
alert(ghost.get_title());
alert(matrix.get_title());

/*

실행 결과

Ghost in the shell
Matrix
공각기동대
Matrix

*/
```

위의 예제를 통해 알 수 있는 것은 아래와 같다.

1. **클로저는 객체의 메소드에서도 사용할 수 있다.** 위의 예제는 함수의 리턴 값으로 객체를 반환하고 있다. 이 객체는 메소드 `get_title` 과 `set_title` 을 갖고 있다. 이 메소드들은 외부 함수인 `factory_movie` 의 인자값으로 전달된 지역 변수 `title` 을 사용하고 있다.
2. **동일한 외부 함수 안에서 만들어진 내부 함수나 메소드는 외부 함수의 지역 변수를 공유한다.** 17행에서 실행된 `set_title` 은 외부 함수 `factory_movie` 의 지역 변수 `title` 의 값을 ‘공각기동대’ 로 변경했다. 19행에서 `ghost.get_title` 의 값이 ‘공각기동대'인 것은 `set_title` 과 `get_title` 이 값을 공유하고 있다는 의미이다.
3. 그런데 똑같은 외부 함수 `factory_movie` 를 공유하고 있는 `ghost` 와 `matrix` 의 `get_title` 의 결과는 서로 각각 다르다. 그것은 **외부 함수가 실행될 때마다 새로운 지역 변수를 포함하는 클로저가 생성되기 때문에 `ghost` 와 `matrix` 는 서로 완전히 독립된 객체가 된다.**
4. `factory_movie` 의 지역 변수 `title` 은 2행에서 정의된 객체의 메소드에서만 접근할 수 있는 값이다. 이 말은 `title` 의 값을 읽고 수정할 수 있는 것은 `factory_movie` 메소드를 통해서 만들어진 객체 뿐이라는 의미다. JS는 기본적으로 private 속성을 제공하지 않는다. **클로저의 이러한 특성을 이용해 private한 속성을 사용할 수 있게 된다.**

## 예제4

```jsx
var arr = []
for (var i = 0; i < 5; i++) {
	arr[i] = function() {
		return i;
	}
}
for (var index in arr) {
	console.log(arr[index]());
}

/*

실행 결과

5
5
5
5
5

*/
```

위와 같은 결과가 나오는 이유는 var type의 문제다. var의 스코프는 함수 레벨 스코프를 갖고 있다. 예시에서 첫 번째 `for` 를 빠져나온 이후 `i` 는 소멸되지 않고 `i = 5` 라는 값을 갖고 있다. 따라서 `arr[index]()` 의 결과 값은 `i` 즉, 5를 반환한다.

### 변수 타입을 수정하여 해결하기

```jsx
var arr = []
for (let i = 0; i < 5; i++) { // var -> let
	arr[i] = function() {
		return i;
	}
}
for (var index in arr) {
	console.log(arr[index]());
}

/*

실행 결과

0
1
2
3
4

*/
```

`i` 를 선언할 때 var을 사용하지 않고 let을 사용하여 선언하면 된다.

### 클로저를 활용해 해결하기

```jsx
var arr = []
for (var i = 0; i < 5; i++) {
	arr[i] = function(id) {
		return function() {
			return id;	
		}
	}(i);
}

for (var index in arr) {
	console.log(arr[index]());
}

/*

실행 결과

0
1
2
3
4

*/
```

핵심: 외부 함수에 **지역 변수 `id`에 `i` 를 할당하여 `i` 의 값을 0 ~ 4까지 저장한다. 예제 3에서 사용한 방법이다.**

이해가 되지 않는다면 위의 예시를 다음과 같이 수정하여 실행해보자

```jsx
var arr = []
for (var i = 0; i < 5; i++) {
	arr[i] = function() { // 지역 변수에 할당하지 않음
		return function() {
			return i;	// i값 리턴
		}
	}(); // 전달 인자도 없음
}

for (var index in arr) {
	console.log(arr[index]());
}

/*

실행 결과

5
5
5
5
5

*/
```

---

# Array.prototype.push() VS Array.prototype.concat()

## push 메소드

- 기능: 배열의 끝에 하나 이상의 요소를 추가한다.
- 리턴값: 배열의 새로운 길이

기존의 배열을 변경하는 메소드

## concat 메소드

- 기능: 인자로 주어진 배열이나 값들을 기존 배열에 합친다.
- 리턴값: 만들어진 새로운 배열

기존의 배열을 변경하지 않는 메소드
