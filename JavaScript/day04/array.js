'use strict';

// Array

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits = ['apple', 'banana'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits['0']);
console.log(fruits['1']);
console.log(fruits[fruits.length - 1]);

// 3. Looping over an array
// print all fruits
// a. for
for (let i = 0; i < fruits.length; i++) {
	console.log(fruits[i]);
}
// b for in
for (let key in fruits) {
	console.log(fruits[key]);
}
// c for of
for (let value of fruits) {
	console.log(value);
}
// d forEach
fruits.forEach((fruits) => console.log(fruits));


// 4. Addtion, deletion, copy
// push: add an item to the end
fruits.push('strawberry', 'blueberry');
console.log(fruits);

// pop: remove an item from the end
fruits.pop();
fruits.pop();
console.log(fruits);

// unshift: add an item to the benigging
fruits.unshift('strawberry', 'lemon');
console.log(fruits);

// shift: remove an item from the benigging
fruits.shift();
fruits.shift();
console.log(fruits);

// note!! shift, unshift are slower than pop, push
// splice: remove an item by index position
fruits.push('strawberry', 'blueberry', 'lemon');
console.log(fruits);
fruits.splice(1, 1);
console.log(fruits);
fruits.splice(1, 0, 'green apple', 'watermelon');
console.log(fruits);

// combine two arrays
const fruits2 = ['pear', 'coconut']
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// 5. Searching 
// indexOf: find the index
console.clear();
console.log(fruits);
console.log(fruits.indexOf('apple'));
console.log(fruits.indexOf('watermelon'));
console.log(fruits.indexOf('coconut'));

// includes
console.log(fruits.includes('apple'));
console.log(fruits.includes('watermelon'));
console.log(fruits.includes('coconut'));

// lastIndexOf
console.clear();
fruits.push('apple');
console.log(fruits);
console.log(fruits.indexOf('apple'));
console.log(fruits.lastIndexOf('apple'));

// PlayGround
console.clear();
const arr = ['A', 'B', 'C'];
console.log(`arr.length: ${arr.length}`);
const numArr = [1, 2, 3, 4, 5, 6];
const s1 = numArr.toString();
console.log(`numArr.toString: ${s1}`);
const day = new Date(2022, 5, 28, 11, 15, 50);
console.log(`numArr.toLocaleString: ${day.toLocaleString()}`);
console.log(`numArr.toLocaleString: ${day.toLocaleDateString()}`);
console.log(`numArr.toLocaleString: ${day.toLocaleTimeString()}`);
console.log(arr.concat(numArr));
console.log(arr.concat(numArr, '**'));
console.log(arr.concat('**', numArr, '**'));
console.log(numArr.join(' | '));
console.log(numArr.slice(1, 5));
const isBelowThreshold = (currentValue) => currentValue < 10;
console.log(numArr.every(isBelowThreshold));
console.log(numArr.some((element) => element % 2 === 0));
const numArr2 = numArr.map(x => x * 2);
console.log(numArr2);
const arr3 = ['a', 'abc', 'abcde', 'abcdefg'];
console.log(arr3.filter(arr3 => arr3.length >= 3));
console.log(numArr);
let initialValue = 0;
console.log(numArr.reduce((previousValue, currentValue) => previousValue + currentValue));
const arr4 = [[0, 1], [2, 3], [4, 5]];
const result = arr4.reduceRight((accumulator, currentValue) => accumulator.concat(currentValue));
console.log(result);