# JavaScript 재입문하기 (JS 튜토리얼)

## 역사

JS는 1995년 Netscape의 엔지니어 Brenden Eich에 의해 만들어졌고, 1996년 초에 Netscape2와 함께 처음 릴리즈 되었다. 이것은 원래 LiveScript로 불리기로 되어 있었지만, Java 언어의 성공에 편승해보려는 마케팅 결정에 따라 이름이 바뀌게 된다. 이 결정은 역사상 유래가 없는 혼란의 근원이 되어 버린다.

## 특징

- 대부분의 프로그래밍 언어와는 달리, JavaScript 언어는 입출력 개념이 없다.
    - 호스트 환경 아래에서 스크립트 언어로서 동작하도록 디자인 되어 있다. 따라서 외부 세계와 통신하기 위해 호스트 환경이 제공하는 메커니즘에 의존한다. 대부분의 경우 일반적인 호스트 환경은 브라우저이지만 JS 인터프리터는 다양한 엔진에서 발견할 수 있고 node.js 와 같은 서버 측 환경에서도 찾을 수 있다.
- JS는 유형 및 연산자, 표준 내장 객체 및 메서드가 있는 다중 패러다임, 동적 언어이다.
- JS의 구문은 Java와 C언어를 기반으로 한다.
- JS는 클래스 대신 객체 프로토 타입을 사용하여 객체 지향 프로그래밍을 지원한다. (프로토 타입 상속 및 ES2015 classes.JavaScript는 함수형 프로그래밍도 지원한다. 함수는 객체이며, 함수는 실행 가능한 코드를 유지하고 다른 객체와 마찬가지로 전달될 수 있다.)
- JS의 타입은 다음과 같다.
    - `Number`
    - `BigInt`
    - `String`
    - `Boolean`
    - `Object`
        - `Function`
        - `Array`
        - `Date`
        - `RegExp`
    - `Symbol (ES2015 추가)`
    - `undefined`
    - `null`

## Number

- 범위: [-(2^53 − 1)] ~ [2^53 − 1]
- JS에는 정수와 같은 것이 존재하지 않아 조심해야 한다.
    
    ```jsx
    console.log(3 / 2);             // 1.5
    console.log(Math.floor(3 / 2)); // 1
    0.1 + 0.2 == 0.30000000000000004;
    // 실제로 정수 값은 32비트 정수로 처리되며,
    // 일부 구현은 32비트 정수가 아닌 숫자에 유효한 명령어를 수행할 때까지 이러한 방식으로 저장한다.
    // 이는 비트 단위 작업에 중요할 수 있다.
    ```
    
- `Math` 라고 불리는 내장 객체가 있다.
    
    ```jsx
    Math.sin(3.5);
    var circumference = 2 * Math.PI * r;
    ```
    
- `parseInt()` : 함수를 사용해 문자열을 정수로 변환할 수 있다. (두 번째 파라미터는 진법이다.)
    
    ```jsx
    parseInt('123', 10); // 123
    parseInt('010', 10); // 10
    parseInt('11', 2); // 3
    ```
    
- `parseFloat()` : 부동 소수점 숫자를 파싱할 수 있다. 해당 함수는 10진수를 사용합니다.
    
    ```jsx
    parseInt('123', 10); // 123
    parseInt('010', 10); // 10
    parseInt('11', 2); // 3
    ```
    
- 단항 연산자 `+` 를 사용하여 값을 숫자로 변환할 수도 있다.
    
    ```jsx
    + '42';   // 42
    + '010';  // 10
    + '0x10'; // 16
    ```
    
- 문자열이 수가 아닌 경우 `NaN` 을 리턴한다.
    
    ```jsx
    parseInt('hello', 10); // NaN
    ```
    
- `NaN` 은 독성을 갖고 있다. 어떤 수학 연산의 입력값으로써 주어지면 그 결과 역시 `NaN` 가 되기 때문이다.
    
    ```jsx
    NaN + 5; // NaN
    ```
    
- 따라서 `Number.isNaN()` 함수를 사용하여 `NaN` 여부를 안정적으로 검사할 수 있다.
    
    ```jsx
    Number.isNaN(NaN); // true
    Number.isNaN('hello'); // false
    Number.isNaN('1'); // false
    Number.isNaN(undefined); // false
    Number.isNaN({}); // false
    Number.isNaN([1]) // false
    Number.isNaN([1,2]) // false
    ```
    
- `isNaN()` 함수는 직관적이지 않은 동작을 한다. 고로 쓰지 마라
    
    ```jsx
    isNaN('hello'); // true
    isNaN('1'); // false
    isNaN(undefined); // true
    isNaN({}); // true
    isNaN([1]) // false
    isNaN([1,2]) // true
    ```
    
- `Infinity, -Infinity`
    
    ```jsx
    1 / 0; //  Infinity
    -1 / 0; // -Infinity
    ```
    
- `isFinite()` 를 사용하여 `Infinity`, `-infinity` 및 `NaN` 값을 테스트 할 수 있다.
    
    ```jsx
    isFinite(1 / 0);     // false
    isFinite(-Infinity); // false
    isFinite(NaN);       // false
    ```
    

<aside>
💡 `parseInt()` 와 `parseFloat()` 함수는 숫자가 아닌 문자가 나올 때까지 문자열을 파싱하고, 그 지점까지 파싱된 숫자를 반환한다.
그러나,
`+` 연산자는 중간에 유효하지 않은 문자가 있으면 그대로 문자열을 `NaN` 으로 그냥 변환한다.

</aside>

## String

JS의 문자열은 유니코드 문자들이 연결되어 만들어진 것이다.

- 문자열의 길이를 알고 싶다면 `length` 속성에 접근하면 된다.
    
    ```jsx
    'hello'.length; // 5
    ```
    
- 문자열은 객체이자 메서드까지 있는 확실한 녀석이다.
    
    ```jsx
    'hello'.charAt(0); // "h"
    'hello, world'.replace('hello', 'goodbye'); // "goodbye, world"
    'hello'.toUpperCase(); // "HELLO"
    ```
    

## 이외의 타입들

### null 과 undefined

- `null` : 값이 없음을 나타내는 값
- `undefined` : 초기화되지 않은 값
- JS는 위 두 값을 구분한다.
- JS에서는 변수에 값을 주지 않고 선언하는 것이 가능하다. 이럴 경우, 변수의 타입은 `undefined` 가 된다. `undefined` 값은 실제 상수이다.

### 부울 타입

- `false` : `false, 0, 빈문자열(""), NaN, null, undefined`
- `true` : 다른 모든 값

```jsx
console.log(Boolean('')); // false
console.log(Boolean(234)); // true
```

- `&&` : 논리합
- `||` : 논리곱
- `!` : 부정

## 변수(Variables)

- `var`
- `let`
- `const`

### let

- 스코프: 블록 레벨 변수
    
    ```jsx
    // myLetVariable는 여기에서 보이지 *않습니다*
    
    for (let myLetVariable = 0; myLetVariable < 5; myLetVariable++) {
      // myLetVariable는 여기에서만 사용할 수 있습니다
    }
    
    // myLetVariable는 여기에서 보이지 *않습니다*
    ```
    

### const

- 스코프: 블록 레벨 변수
- 값이 변경되지 않을 변수 (**상수**)
    
    ```jsx
    const Pi = 3.14; // 변수 Pi 설정
    Pi = 1; // 상수 변수는 변경 할 수 없기 때문에 애러 발생.
    ```
    

### var

- 스코프: `var` 변수가 선언된 함수
    
    ```jsx
    // myVarVariable는 여기에서 사용 할 수 *있습니다*
    
    for (var myVarVariable = 0; myVarVariable < 5; myVarVariable++) {
      // myVarVariable는 함수 전체에서 사용 할 수 있습니다
    }
    
    // myVarVariable는 여기에서 사용 할 수 *있습니다*
    ```
    
- `let` 과 `const` 와 같은 제한이 없고 유연하다.
    
    ```jsx
    var a;
    var name = 'Simon';
    ```
    

변수에 값을 지정하지 않고 변수를 선언하면, 타입은 `undefined` 로 지정된다.

## 연산자

- `+`
- `-`
- `*`
- `/`
- `%`
- `=`
- `+=`
- `-=`
- `++`
- `--`

### +

- 문자열 + 문자열 : 문자열
    
    ```jsx
    console.log('hello' + 'world'); // hellowolrd
    ```
    
- 문자열 + 숫자 : 문자열
    
    ```jsx
    '3' + 4 + 5;  // "345"
     3 + 4 + '5'; // "75"
    
    // 위에서 본
    // + '42'
    // 와 같은 맥락
    ```
    

### ==

이중 등호 연산자는 서로 다른 타입을 비교할 경우 **타입 강제 변환**을 수행하기 때문에 다음과 같이 기대하지 않은 결과를 만들어내기도 한다.

```jsx
123 == '123'; // true
1 == true;    // true
```

타입 강제 변환을 하지 않게 하려면, `===` (삼중 등호 연산자)를 사용해야 한다.

```jsx
123 === '123'; // false
1 === true;    // false
```

이와 비슷하게 `!=` 와 `!==` 연산자가 있다.

## 제어 구조

JS는 C계열의 다른 언어들과 비슷한 제어 구조를 가지고 있다.

### if

```jsx
var name = 'kittens';
if (name === 'puppies') {
  name += ' woof';
} else if (name === 'kittens') {
  name += ' meow';
} else {
  name += '!';
}
name === 'kittens meow';
```

### while / do while

```jsx
while (true) {
  // 무한루프!
}

var input;
do {
  input = get_input();
} while (inputIsNotValid(input));
```

### for

```jsx
for (var i = 0; i < 5; i++) {
  // 내부 동작을 5번 반복합니다
}
```

### for of

```jsx
for (let value of array) {
  // value로 작업을 실행합니다
}
```

### for in

```jsx
for (let property in object) {
  // object의 항목(property)으로 작업을 실행합니다
}
```

### switch

```jsx
switch (action) {
  case 'draw':
    drawIt();
    break;
  case 'eat':
    eatIt();
    break;
  default:
    doNothing();
}
```

- `switch` 부분과 `case` 부분의 표현식은 `===` 연산자로 비교한다.
- `default` 절은 선택사항이다.

## 객체 (Object)

JS의 객체는 간단히 이름-값 쌍(name-value pairs)의 모음이다. Java의 HashMaps와 비슷하다.

이름: 문자열

값: 객체를 포함하여 모든 값

### 빈 객체 생성

```jsx
var obj = new Object();
```

혹은

### 객체 리터럴 구문으로 생성하기

```jsx
var obj = {};
```

- 위 방법보다 더 편리하다.
- JSON 구문의 핵심이다.

객체의 전체적인 구조를 초기화 할 수 있다.

```jsx
const obj = {
  name: 'Carrot',
  _for: 'Max', // 'for'는 예약어이므로, '_for'를 대신 사용합니다.
  details: {
    color: 'orange',
    size: 12
  }
};
```

속성에 연속적으로 접근할 수 있다.

```jsx
obj.details.color; // orange
obj["details"]["size"]; // 12
```

아래 예제는 객체 프로토타입(`Person`)과 인스턴스(`You`)를 사용한다.

```jsx
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// 객체를 정의합니다.
var you = new Person('You', 24);
// "You"라는 이름의 24세인 새로운 사람을 생성 중입니다.
```

일단 생성되면, 객체의 속성에 다음의 두 가지 방법들 중 한 가지로 접근할 수 있다.

```jsx
// 점 표기법(dot notation)
obj.name = "Simon"
var name = obj.name;
```

그리고 …

```jsx
// 대괄호 표기법(bracket notation)
obj["name"] = "Simon";
var name = obj["name"];
// key를 정의하기 위해 변수도 쓸수 있습니다.
var user = prompt('what is your key?')
obj[user] = prompt('what is its value?')
```

이들은 의미적으로 똑같다. 두 번째 방법은 속성의 이름을 실행 시간(run-time)에 계산할 수 있는 문자열로 전달한다. 그러나 이 방법을 사용하면 일부 JS엔진과 압축기 최적화를 적용할 수 없다. 하지만 예약 키워드로 정의된 이름으로 속성을 설정하거나 얻어낼 수 있다.

```jsx
obj.for = "Simon"; // 구문 오류, for 가 예약어이기 때문입니다
obj["for"] = "Simon"; // 정상 동작
```

## 배열

JS에서 배열은 실제로는 특별한 타입의 객체다.

일반 객체와 많이 비슷하게 동작하지만 이 객체는 `length` 라는 한가지 마법적인 속성을 가진다. 이는 항상 배열에서 가장 큰 인덱스보다 하나 더 큰 값을 가진다.

배열을 생성하는 예전 방법

```jsx
var a = new Array();
a[0] = "dog";
a[1] = "cat";
a[2] = "hen";
a.length // 3
```

더 편리한 배열 표기법

```jsx
var a = ['dog', 'cat', 'hen'];
a.length; // 3
```

`array.length` 는 배열에 들어있는 항목의 개수가 아니다.

```jsx
var a = ['dog', 'cat', 'hen'];
a[100] = 'fox';
a.length; // 101
```

- `length` 속성 = 최대 인덱스 + 1

존재하지 않는 배열 인덱스 참조

```jsx
typeof a[90]; // undefined
```

### 배열 반복법

1. `for`
    
    ```jsx
    for (let i = 0; i < a.length; i++) {
      // a[i] 로 무언가를 수행
    }
    ```
    
2. `for … of`
    
    ```jsx
    for (const currentValue of a) {
        // currentValue로 무언가를 수행
    }
    ```
    
3. `forEach`
    
    ```jsx
    for (let i = 0; i < a.length; i++) {
      // a[i] 로 무언가를 수행
    }
    ```
    

# Hello React!

공식 문서에서 아래 코드가 가장 단순한 예시라고 한다.

```jsx
ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('root')
);

// Hello, world! 가 화면에 출력된다.
```

- React는 JavaScript의 라이브러리이다. 따라서 JS언어에 대한 기본적인 이해가 필요하다.

# DOM

## DOM이란?

- HTML과 언어(JS …)를 서로 이어주는 역할이다.
- Document Object Model의 줄임말로 문서 객체 모델을 의미한다.
- DOM은 웹페이지를 이루는 태그들을 자바스크립트가 이용할 수 있게 브라우저가 트리 구조로 만든 객체 모델을 의미한다.

## JS가 HTML에 접근하는 원리

- Document라는 전역 객체를 통해 접근한다.
- window라는 객체는 document객체의 상위에 위치한다.

```jsx
document.write('요롷게');
```

# 가상 돔(Virtual DOM)

## 발생 배경

웹 기술의 발전에 따라 웹의 렌더링이 잦아지면서 가상 돔이 발생하게 되었다.

- 웹 렌더링: 브라우저 로딩 과정 중 스타일 이후의 과정(스타일 → 레이아웃 → 페인트 → 합성)을 렌더링이라고 한다.

## 동작 원리

실제 DOM에 접근하여 조작하는 대신, 이를 추상화한 자바스크립트 객체를 구성하여 사용

- DOM의 상태를 메모리에 저장하고, 변경 전과 후의 상태를 비교한 뒤 최소한의 내용만 반영하는 기능

---

# 리액트 컴포넌트

## 컴포넌트

UI를 재사용 가능한 개별적인 여러 조각으로 나누고, 각 조각을 개별적으로 살펴볼 수 있다.

- JavaScript 함수와 유사하다.
- props 라고 하는 임의의 입력을 받은 후, 화면에 어떻게 표시되는지를 기술하는 React element를 반환한다.

## 컴포넌트 렌더링

```jsx
const element = <Welcome name="Sara" />;
```

React element는 사용자 정의 컴포넌트로도 나타낼 수 있다.

- React가 사용자 정의 컴포넌트로 작성한 element를 발견하면 JSX 어트리뷰트와 자식을 해당 컴포넌트에 단일 객체로 전달한다. 이 객체를 props라고 한다.

## 컴포넌트의 이름

**컴포넌트의 이름은 항상 대문자로 시작한다.**

- React는 소문자로 시작하는 컴포넌트를 DOM 태그로 처리한다.

## 컴포넌트 합성

컴포넌트는 자신의 출력에 다른 컴포넌트를 참조할 수 있다.

- 예를 들어 `Welcome`을 여러 번 렌더링하는 `App` 컴포넌트를 만들 수 있다.
    
    ```jsx
    function Welcome(props) {
      return <h1>Hello, {props.name}</h1>;
    }
    
    function App() {
      return (
        <div>
          <Welcome name="Sara" />
          <Welcome name="Cahal" />
          <Welcome name="Edite" />
        </div>
      );
    }
    
    ReactDOM.render(
      <App />,
      document.getElementById('root')
    );
    ```
    
    - 일반적으로 새 React앱은 최상위에 단일 App 컴포넌트를 가지고 있다.

## 컴포넌트 추출

컴포넌트를 여러 개의 작은 컴포넌트로 나누는 것을 권장한다. (모듈화)

```jsx
function Comment(props) {
  return (
    <div className="Comment">
      <div className="UserInfo">
        <img className="Avatar"
          src={props.author.avatarUrl}
          alt={props.author.name}
        />
        <div className="UserInfo-name">
          {props.author.name}
        </div>
      </div>
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}
```

- 이 컴포넌트는 `author`(객체), `text`(문자열), `date`(날짜)를 props로 받은 후 소셜미디어 웹 사이트의 코멘트를 나타낸다.
- 이 컴포넌트는 구성요소들이 모두 중첩 구조로 이루어져 있어서 변경하기 어려울 수 있으며, 각 구성요소를 개별적으로 재사용하기도 힘들다.
- 따라서 이 컴포넌트에서 몇 가지 컴포넌트를 추출하겠다.

`Avatar` 컴포넌트 추출

```jsx
function Avatar(props) {
  return (
    <img className="Avatar"
      src={props.user.avatarUrl}
      alt={props.user.name}
    />
  );
}
```

- `Avatar`는 자신이 `Comment` 내에서 렌더링된다는 것을 알 필요가 없다. 따라서 props의 이름을 `author`에서 더욱 일반화된 `user`로 변경하였다.
- **props의 이름은 사용될 context가 아닌 컴포넌트 자체의 관점에서 짓는 것을 권장한다.**

```jsx
function Comment(props) {
  return (
    <div className="Comment">
      <div className="UserInfo">
        <Avatar user={props.author} /> // Avatar 컴포넌트 추가
        <div className="UserInfo-name">
          {props.author.name}
        </div>
      </div>
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}
```

`Comment`가 살짝 단순해졌다.

`UserInfo` 추출

```jsx
function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avatar user={props.user} />
      <div className="UserInfo-name">
        {props.user.name}
      </div>
    </div>
  );
}
```

`UserInfo` 추출 후 `Comment`

```jsx
function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo user={props.author} />
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}
```

- 이처럼 재사용 가능한 컴포넌트들을 만드는 것은 프로그래밍에 큰 도움이 될 것이다.
- UI 일부가 여러 번 사용되거나(`Button, Panel, Avatar`), UI 일부가 자체적으로 복잡한(`App, FeedStory, Comment`) 경우에는 별도의 컴포넌트로 만드는 것이 좋다.

## props는 읽기 전용이다.

함수 컴포넌트나 클래스 컴포넌트 모두 **컴포넌트의 자체 props를 수정해서는 안된다.**

다음 `sum` 함수를 살펴보자

```jsx
function sum(a, b) {
	return a + b;
} 
```

- 이런 함수를 **순수 함수**라고 한다.
- 입력값을 바꾸려 하지 않고 항상 동일한 입력 값에 대해 동일한 결과를 반환하기 때문이다.

반면에 다음 함수는 자신의 입력값을 변경하기 때문에 순수 함수가 아니다.

```jsx
function withdraw(account, amount) {
	account.total -= amount;
}
```

- React는 매우 유연하지만 한 가지 엄격한 규칙이 있다.
- **모든 React 컴포넌트는 자신의 props를 다룰 때 반드시 순수 함수처럼 동작해야 한다.**
- 위 규칙을 위반하지 않고 자신의 출력값을 변경할 수 있는 방법인 `state` 가 존재한다.

## 함수 컴포넌트 VS 클래스 컴포넌트

### 함수 컴포넌트

```jsx
function Welcome(props) {
	return <h1>Hello, {props.name}</h1>;
}
```

데이터를 가진 하나의 props 객체 인자를 받은 후 React element를 반환한다.

### 클래스 컴포넌트

```jsx
class Welcome extends React.Component {
	render() {
		return <h1>Hello, {this.props.name}</h1>;
	}
}
```

React의 관점에서 볼 때 위 두 가지 유형의 컴포넌트는 동일하다.

### 무엇을 사용해야 하나?

2019년 v16.8부터 함수형 컴포넌트에 `hook`이 지원되며 **현재 공식적으로 함수형 컴포넌트와 훅을 함께 사용할 것을 권장한다.**

---

# 구글맵 API 연동

## index.html

```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Router
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MapAPI from './components/MapAPI';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
	{/* 

	BrowserRouter:
	HTML은 여러 페이지를 이용해 화연을 표현한다.
	그러나 리액트는 하나의 페이지 안에서만 동적으로 화면을 바꿔가며 표현한다.
	따라서 새 페이지를 로드할 때의 부하가 없고, 기존 방식보다 매우 효율적이다. 
	
	*/}
	<BrowserRouter>
		{/*

		Routes:
		Route들을 구성하는 부모 요소
		
		*/}
		<Routes>
			{/*
			
			Route:
			랜더링할 컴포넌트를 지정한다.

			Route 작성 예시:
			<Route path="경로" element={경로접근 시 렌더링할 컴포넌트} />
			
			*/}
			<Route path="/" element={<App />} />
			<Route path="MapAPI" element={<MapAPI />} />
		</Routes>
	</BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
```

## MapAPI

```jsx
import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from "google-maps-react";

// class MapAPI extends Component {
// 	render() {
// 		return (
// 			<div className='MapAPI'>
// 				<Map
// 					google={this.props.google} // 뭘까
// 					zoom={15} // 화면 줌
// 					initialCenter={{ lat: 37.3379297, lng: 127.9269225 }} // 뚜에이오 위도 경도
// 				></Map>
// 			</div>
// 		);
// 	}
// }

const MapAPI = () => {
	return (
		<div className='MapAPI'>
			<Map
				google={this.props.google} // 뭘까
				zoom={15} // 화면 줌
				initialCenter={{ lat: 37.3379297, lng: 127.9269225 }} // 뚜에이오 위도 경도
			></Map>
		</div>
	);
}

export default GoogleApiWrapper({
	apiKey: "AIzaSyACbIPocp-CLvcsG7CyYmV69q1Vp6k7vf0", // 내 API키
})(MapAPI);
```

## App.js

```jsx
import './App.css';
import { Link } from 'react-router-dom';

const MapNav = () => {
	return (
		<nav>
			<h3>MAP Link</h3>
			{/*

			리액트는 a tag를 사용하지 않는다.
			리액트 앱이 가진 상태가 초기화되고 랜더링된 컴포넌트들이 모두 날라가버린다.
			대신 Link tag를 사용한다.
			
			*/}
			<Link to="MapAPI">Map</Link>
		</nav>
	);
}

function App() {
  return (
    <div className="App">
		<h1>App page</h1>
		<MapNav></MapNav>
    </div>
  );
}

export default App;
```
