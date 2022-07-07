console.log(3 / 2);
console.log(Math.floor(3 / 2));
console.log("\n");
console.log(0.1 + 0.2 == 0.30000000000000004); // true
console.log("\n");
console.log(Math.sin(3.5));
console.log(2 * Math.PI * 10);
console.log("\n");
console.log(`${parseInt('123', 10)}`);
console.log(`${parseInt('123', 2)}`);
console.log(`${parseInt('0123', 10)}`);
console.log(`${parseFloat('1234.5')}`);
console.log("\n");
console.log(+ '42');
console.log("\n");
console.log(parseInt('hello', 10));
console.log("\n");
console.log(NaN + 5);
console.log("\n");
console.log(Number.isNaN(NaN)); // true
console.log(Number.isNaN('hello')); // false
console.log(Number.isNaN('1')); // false
console.log(Number.isNaN(undefined)); // false
console.log(Number.isNaN({})); // false
console.log(Number.isNaN([1])); // false
console.log(Number.isNaN([1,2])); // false
console.log("\n");
console.log(isNaN('hello')); // true
console.log(isNaN('1')); // false
console.log(isNaN(undefined)); // true
console.log(isNaN({})); // true
console.log(isNaN([1])) // false
console.log(isNaN([1,2])) // true
console.log("\n");
console.log(1 / 0);
console.log(-1 / 0);
console.log("\n");
console.log(isFinite(1 / 0));     // false
console.log(isFinite(-Infinity)); // false
console.log(isFinite(NaN));       // false
console.log("\n");
console.log('hello'.length);
console.log("\n");
console.log('hello'.charAt(0)); // "h"
console.log('hello, world'.replace('hello', 'goodbye')); // "goodbye, world"
console.log('hello'.toUpperCase()); // "HELLO"
console.log("\n");
console.log(Boolean('')); // false
console.log(Boolean(234)); // true
console.log("\n");
console.log('hello' + 'world');
console.log("\n");