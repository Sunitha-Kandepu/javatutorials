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