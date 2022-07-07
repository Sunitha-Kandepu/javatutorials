# js파일을 html파일에서 로드하는 방법

1. 기본형
    
    ```html
    <head>
    ...
    <script src="test.js"></script>
    ...
    </head>
    ```
    
    - js fetch/실행 → html 파싱
    - 문제점: js의 파일 크기가 너무 클 경우 로딩이 지연된다.
2. body 끝
    
    ```html
    <body>
    ...
    <script src="test.js"></script>
    </body>
    ```
    
    - html 파싱 → js fetch/실행
    - 문제점: js에 의존적인 페이지의 경우 문제가 발생할 수 있다.
3. head + async
    
    ```html
    <head>
    ...
    <script async src="test.js"></script>
    ...
    </head>
    ```
    
    - js fetch/실행과 html 파싱을 병렬로 진행
    - async는 boolean 타입이다.
    - 문제점: html 파싱이 완료되지 않았을 경우 문제가 발생할 수 있음
    - 문제점2: js파일이 여러 개일 경우 순서대로 실행된다는 것을 보장받을 수 없다.
4. **head + defer**
    
    ```html
    <head>
    ...
    <script defer src="test.js"></script>
    ...
    </head>
    ```
    
    - js fetch → html 파싱 → js 실행
    - 위에서 나타나는 단점들을 상쇄해준다.
    - 가장 좋은 옵션이다.

# use strict

```jsx
'use strict';
```

- Vanilla js 작성시 js 파일 맨 위에 작성하면 좋다.
- 지나치게 유연한 js의 특성을 제한하는 역할을 한다.
    
    ```jsx
    'use strict';
    
    a = 6; // 선언되지 않은 변수이기 때문에 에러 발생
    ```
    
    ![스크린샷 2022-06-27 오후 3.55.10.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/59b58ad5-db8b-41c1-9478-163f1dac70f0/스크린샷_2022-06-27_오후_3.55.10.png)
    

# Variable

- scope
    - global scope: App 생명주기 동안 메모리에 유지됨 → 이용 최소
    - block scope: block 안에서만 접근 가능
- let
    - ES6에서 정의된 변수
    - 현재 사용하는 변수
    - Mutable data type
- var
    - 절대 안쓰임
    - 지나치게 유연한 사용법
    - block scope가 없다.
    - 연관 키워드: hoisting(끌어 올려주다.)
        - 선언된 지점과 상관 없이 항상 선언을 맨 위로 올려주는 것을 말한다.
- constant
    - 상수
    - Immutable data type: 웬만하면 값을 할당한 이후 값을 변경하지 말아라.
    - security
    - thread safety: 자원 관리 보호
    - reduce human mistakes: 웬만하면 const로 개발하는게 좋은 습관
- Variable types
    - JS에서는 타입을 구체적으로 명시해줄 필요 없음. 그저 let과 const를 이용하면 된다. → Dynamic typing
    - number
        - Infinity
        - -Infinity
        - NaN
        - bigint
    - string
        - + 연산 가능
        - templlate literals (string)
    - boolean
        - false: 0, null, undefined, NaN, ‘’
        - true: any other value
    - null
    - undefined
    - symbol
        - `Symbol();`
        - `Symbol.for();`
    - object
    - function
- Dynamic typing Lang
    - 프로토타입을 만들 때 좋은 언어
    - 그러나 개발자가 실수할 가능성이 높음
    - 런타임에서 데이터 타입이 결정된다.

# Operator

```jsx
// 1. String concatenation
console.log('my' + ' cat');
console.log('1' + 2);
console.log(`string literals:

''''
1 + 2 = ${1 + 2}`);
console.log("jeon's book");

// 2. Numeric
console.log(1 + 1);
console.log(10 - 5);
console.log(10 / 2);
console.log(10 * 2);
console.log(10 % 3);
console.log(10 ** 2);

// 3. Increment and decrement
let counter = 2;
const preIncrement = ++counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);
const postIncrement = counter++;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);

// 4. Assignment
let x = 3;
let y = 6;
x += y;
x -= y;
x *= y;
x /= y;
x %= y;
x **= y;

// 5. Comparision
console.log(10 < 6);
console.log(10 <= 10);
console.log(10 > 6);
console.log(10 >= 6);
console.log(10 === 6);
console.log(10 !== 6);

// 6. Logical ||, &&, !
const value1 = true;
const value2 = 4 < 2;

// ||
console.log(`or: ${value1 || value2 || check()}`); // 가벼운 순서대로 코드 배치하는게 효율

// &&
console.log(`and: ${value1 && value2 && check()}`); // 마찬가지로 헤비한 오퍼레이션은 맨 뒤로
function check() {
	for (let i = 0; i < 10; i++) {
		console.log(`${i} ...`);
	}
	return true;
}

// !
console.log(!value1);

// 7. Equality
const stringFive = '5';
const numberFive = 5;

// loose equlity, with type conversion
console.log(stringFive == numberFive); // T
console.log(stringFive != numberFive); // F

// strict equality, no type conversion 웬만하면 이걸로 써라
console.log(stringFive === numberFive); // F
console.log(stringFive !== numberFive); // T

// object equality by reference
const jeon1 = {name: 'jeon'};
const jeon2 = {name: 'jeon'};
const jeon3 = jeon1;
console.log(jeon1 == jeon2); // F
console.log(jeon1 === jeon2); // F
console.log(jeon1 === jeon3); // T

// equality - puzzler
console.log(0 == false); // T
console.log(0 === false); // F
console.log('' == false); // T
console.log('' === false); // F
console.log(null == undefined); // T 특이한 경우
console.log(null === undefined); // F

// 8. Conditional: if
// if, else if, else
const name = 'coder';
if (name === 'jeon') {
	console.log('Welcome Jeon!');
} else if (name === 'coder') {
	console.log('You are amazing coder');
} else {
	console.log('unkwnon');
}

// 9. Ternary: ?
// condition ? value1 : value2
console.log(name === 'jeon' ? 'yes' : 'no');

// 10. Switch
const browser = 'IE';
switch (browser) {
	case 'IE':
		console.log('go away!');
		break;
	case 'Chrome':
	case 'Firefox':
		console.log('love you');
		break;
	default:
		console.log('same all!');
		break;
}

// 11. Loops
let i = 3;
while (i > 0) {
	console.log(`while: ${i}`);
	i--;
}

do {
	console.log(`do while: ${i}`);
	i--;
} while (i > 0);

for (i = 3; i > 0; i--) {
	console.log(`for: ${i}`);
}

for (let i = 3; i > 0; i = i - 2) {
	console.log(`inline variable for: ${i}`);
}

for (let i = 0; i < 10; i++) {
	if (i % 2 === 0 && i !== 0) {
		console.log(i);
	} else {
		continue;
	}
}

for (let i = 0; i < 10; i++) {
	if (i > 8)
		break;
	console.log(i);
}
```

# Function

```jsx
"use strict";

// 1. Function
// === subprogram
// one function === one thing
// nameing: doSomething, command, verb
// function is object in JS

// 2. Parameters
// primitive parameters: passed by value
// object parameters: passed by reference

function changeName(obj) { // passed by reference
	obj.name = 'coder';
}
const jeon = {name: 'jeon'};
console.log(jeon);
changeName(jeon);
console.log(jeon);

// 3. Default parameters (added in ES6)
function showMessage(message, from = 'unknown') { // from: 디폴트 파라미터
	console.log(`${message} by ${from}`);
}
showMessage('Hi!');

// 4. Rest parameters
function printAll(...args) {
	for (let i = 0; i < args.length; i++) {
		console.log(args[i]);
	}

	for (const arg of args) {
		console.log(arg);
	}

	args.forEach((arg) => console.log(arg));
}
printAll('dream', 'coding', 'jeon');

// 5. Local scope
// 밖에서는 안이 보이지 않고, 안에서는 밖이 보인다.
let globalMessage = 'global';
function printMessage() {
	let message = 'hello';
	console.log(message); // local
	console.log(globalMessage);
	function printAnother() {
		console.log(message);
		let childMessage = 'hello';
	}
	// console.log(childMessage); 오류
}
printMessage();

// 6. Return

function hello() {
	console.log('hello');
	return undefined;
}

function sum(a, b) {
	return a + b;
}
const result = sum(1, 2); // 3
console.log(`sum: ${sum(1, 2)}`);

// 7. Early return, early exit 현업팁
// bad
function upgradeUser(user) {
	if (user.point > 10) {
		// long upgrade logic ...
	}
}
// good
function upgradeUser(user) {
	if (user.point <= 10) {
		return;
	}
	// long upgrade logic ...
}

// First-class Function
// functions are treated like any other variable
// can be assigned as a value to variable
// can be passed as an argument to other functions.
// can be returned by another function

// 1. Function expression
// a function declaration can be called earlier than it is defined. (hoisted)
// a function expression is created when the execution reaches it.
const print = function() { // anonymous function
	console.log('print');
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 4));

// 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo) {
	if (answer === 'love you') {
		printYes();
	} else {
		printNo();
	}
}

// anonymous function
const printYes = function() {
	console.log('Yes');
};

// named function
// better debugging in debugger's stack traces
// recursions
const printNo = function print() {
	console.log('No');
	// print();
};
randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

// Arrow funtion
// always anonymous
// const simplePrint = function () {
//	console.log('simplePrint!');
// };
const simplePrint = () => console.log('simplePrint!');
simplePrint();
const add = (a, b) => a + b;
console.log(add(1, 10));
const simpleMultiply = (a, b) => {
	// do something more;
	return a * b;
};

// IIFE: Immediately Invoked Funtion Expression
(function hello() {
	console.log('IIFE');
})();

// function calculate(command, a, b)
// command: add, substract, divide, multiply, remainder
const calculate = (command, a, b) => {
	switch (command) {
		case 'add':
			return a + b;
		case 'substract':
			return a - b;
		case 'divide':
			return a / b;
		case 'multiply':
			return a * b;
		case 'remainder':
			return a % b;
	}
	console.log('Wrong command!');
	return 0;
};
console.log(calculate('add', 10, 10));
console.log(calculate('substract', 10, 10));
console.log(calculate('divide', 10, 10));
console.log(calculate('multiply', 10, 10));
console.log(calculate('remainder', 10, 10));
console.log(calculate('power', 10, 10));
```

# Class

```jsx
'use strict';

// JS classes
// - introduced in ES6
// - syntactical sugar over prototype-based inheritance

// 1. Class declarations
class Person {
	// constructor
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	speak() {
		console.log(`${this.name}: hello!`);
	}
}

const jeon = new Person('jeon', 28);
console.log(jeon.name);
console.log(jeon.age);
jeon.speak();

// 2. Getter Setter
class user {
	constructor(firstName, lastName, age) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.age = age;
	}

	get age() {
		return this._age;
	}

	set age(value) {
		// if (value < 0) {
		// 	throw Error('age can not be negative!');
		// }
		this._age = value < 0 ? 0 : value;
	}
}
const user1 = new user('Steve', 'Job', -1);
console.log(user1.age);

// 3. Fields (public private)
// Too soon!
class Experiment {
	publicField = 2;
	#privateField = 0;
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);

// 4. Static properties and methods
// Too soon!
class Article {
	static publisher = 'Dream Coding';
	constructor(articleNumber) {
		this.articleNumber = articleNumber;
	}

	static printPublisher() {
		console.log(Article.publisher);
	}
}
const article1 = new Article(1);
const article2 = new Article(2);
console.log(article1.publisher);
console.log(Article.publisher);
Article.printPublisher();

// 5. Inheritance
// a way for one class to extend another class.
class Shape {
	constructor(width, height, color) {
		this.width = width;
		this.height = height;
		this.color = color;
	}

	draw() {
		console.log(`drawing ${this.color} color of`);
	}

	getArea() {
		return this.width * this.height;
	}
}

class Rectangle extends Shape {}
class Triangle extends Shape {
	draw = () => { // Overriding
		super.draw();
		console.log('▲');
	};
	getArea = () => { // Overriding
		return (this.width * this.height) / 2;
	};
}
const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());
const triangle = new Triangle(20, 20, 'blue');
triangle.draw();
console.log(triangle.getArea());

// 6. Class checking instanceOf
console.log(rectangle instanceof Rectangle); // T
console.log(triangle instanceof Rectangle); // F
console.log(triangle instanceof Triangle); // T
console.log(triangle instanceof Shape); // T
console.log(triangle instanceof Object); // T
```
