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
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// strict equality, no type conversion 웬만하면 이걸로 써라
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// object equality by reference
const jeon1 = {name: 'jeon'};
const jeon2 = {name: 'jeon'};
const jeon3 = jeon1;
console.log(jeon1 == jeon2); // f
console.log(jeon1 === jeon2); // f
console.log(jeon1 === jeon3); // t

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