// use sctrict
'use strict';

// scope, let
let globalName = 'globalName'; // global scope
{
	let name = 'jeonjeunghoon';
	console.log(name);
	name = 'hello';
	console.log(name);
	console.log(globalName);
}
console.log(name); // block scope
console.log(globalName);

// var
console.log(age);
age = 4;
var age;
console.log(age);

// constant
const daysInWeek = 7;
const maxNumber = 5;
console.log(daysInWeek);

// variable types
// number
const num1 = 1 / 0;
const num2 = -1/ 0;
const num3 = 'Not a Number' / 2;
const num4 = 'N' / 2;
const num5 =  1234567890123456789012345678901234567890n; // -2**53 ~ 2 ** 53
console.log(`num1: ${num1}\ntype: ${typeof num1}`); // templlate literals (string)
console.log(`num2: ${num2}\ntype: ${typeof num2}`);
console.log(`num3: ${num3}\ntype: ${typeof num3}`);
console.log(`num4: ${num4}\ntype: ${typeof num4}`);
console.log(`num5: ${num5}\ntype: ${typeof num5}`);

// string
const s1 = 'hello';
const s2 = 'World!';
const s3 = s1 + ' ' + s2;
console.log(`s1: ${s1}\ntype: ${typeof s1}`);
console.log(`s3: ${s3}\ntype: ${typeof s3}`);

// boolean
const b1 = true;
const b2 = false;
let b3;
const b4 = NaN;
const b5 = ''
const b6 = null;
console.log(`b1: ${b1}\ntype: ${typeof b1}`);
console.log(`b2: ${b2}\ntype: ${typeof b2}`);
console.log(`b3: ${b3}\ntype: ${typeof b3}`);
console.log(`b4: ${b4}\ntype: ${typeof b4}`);
console.log(`b5: ${b5}\ntype: ${typeof b5}`);
console.log(`b6: ${b6}\ntype: ${typeof b6}`);

// symbol
const sb1 = Symbol('id');
const sb2 = Symbol('id');
const sb3 = Symbol.for('id');
const sb4 = Symbol.for('id');
console.log(sb1 === sb2);
console.log(sb3 === sb1);
console.log(sb3 === sb2);
console.log(sb3 === sb4);

// object
const jeon = {name: 'jeon', age: '28'};
console.log(`jeon: ${jeon}\ntype: ${typeof jeon}`);
jeon.name = 'hello'
console.log(`jeon.name: ${jeon.name}\ntype: ${typeof jeon.name}\njeon.age: ${jeon.age}\ntype: ${typeof jeon.age}`)

// dynamic typing
let text = 'hello';
console.log(text[0]);
console.log(text.charAt(0));
console.log(`text: ${text}\ntype: ${typeof text}`);
text = 1;
console.log(`text: ${text}\ntype: ${typeof text}`);
text = '7' + 5;
console.log(`text: ${text}\ntype: ${typeof text}`);
text = '8' / 2;
console.log(`text: ${text}\ntype: ${typeof text}`);