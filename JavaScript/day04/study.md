# Objects

```jsx
'use-strict';

// Objects
// one of the JavaScript's data types.
// a collection of related data and/or functionality.
// Nearly all objects in JavaScript are instances of Object
// object = { key : value };

// 1. Literals and properties
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

const print = (person) => {
	console.log(person.name);
	console.log(person.age);
}

const jeon = { name: 'jeon', age: 4 };
print(jeon);

// with JavaScript magic (dynamically typed language)
// can add properties later
jeon.hasJob = true;
console.log(jeon.hasJob);

// can delete properties later
delete jeon.hasJob;
console.log(jeon.hasJob);

// 2. Computed properties
// key should be always string
// 동적으로 키에 관한 벨류를 받아올 때 유용하게 쓰일 수 있다.
console.log(jeon.name);
console.log(jeon['name']);
jeon['hasJob'] = true;
console.log(jeon.hasJob);

function printValue(obj, key) {
	console.log(`Good: ${obj[key]}`);
	console.log(`Bad:   ${obj.key}`);
}

printValue(jeon, 'name');
printValue(jeon, 'age');

// 3. Property value shorthand
const person1 = { name: 'bob', age: 2 };
const person2 = { name: 'steve', age: 3 };
const person3 = { name: 'dave', age: 4 };
const person4 = makePerson('jeon', 28);
const person5 = new Person('elile', 30);
console.log(person4);
console.log(person5);

function makePerson(name, age) {
	return {
		name,
		age,
	};
}

// 4. Constructor Function
function Person(name, age) {
	// this = {};
	this.name = name;
	this.age = age;
	// return this;
}

// 5. in operator: property existence check (key in obj)
console.log('name' in jeon);
console.log('age' in jeon);
console.log('random' in jeon);
console.log(jeon.random);

// 6. for..in vs for..of
// for (key in obj)
for (key in jeon) {
	console.log(key);
}

// for (value of iterable)
const array = [1, 2, 4, 5];
for (value of array) {
	console.log(value);
}

// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3 ... ])
const user = { name: 'jeon', age: '20' };
const user2 = user;
console.log(user);

// old way
const user3 = {};
for (key in user) {
	user3[key] = user[key];
}
console.log(user3);

const user4 = {};
Object.assign(user4, user);
console.log(user4);

// another example
const fruit1 = { color: 'red' };
const fruit2 = { color: 'blue', size: 'big' };
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);
console.log(mixed.size);
```

# Quick Sort

```jsx
'use strict';

let arr = [5, 3, 2, 0, 9, 10, 39, 1, 91, -12, -11, -10, -9];
quicksort(arr, 0, arr.length - 1);
for (const value of arr) {
	console.log(value);
}

function swap(array, left, right) {
	const temp = array[right];
	array[right] = array[left];
	array[left] = temp;
}

function l_partition(array, i, j) {
	const pivot = i;

	while (i < j) {
		while (array[pivot] < array[j]) {
			j--;
		}
		while (i < j && array[pivot] >= array[i]) {
			i++;
		}
		swap(array, i, j);
	}
	swap(array, pivot, i);
	return i;
}

function r_partition(array, i, j) {
	const pivot = j;

	while (i < j) {
		while (i < j && array[pivot] >= array[i]) {
			i++;
		}
		while (i < j && array[pivot] < array[j]) {
			j--;
		}
		swap(array, i, j);
	}
	swap(array, pivot, i);
	return i;
}

function m_partition(array, i, j) {
	const pivot = Math.ceil((i + j) / 2);

	while (i < j) {
		while (i < j && array[pivot] >= array[i]) {
			i++;
		}
		while (array[pivot] <= array[j]) {
			j--;
		}
	}
	swap(array, pivot, j);
	return j;
}

function quicksort(array, start, end) {
	if (start >= end) {
		return ;
	}
	const l_pivot = l_partition(array, start, end);
	const r_pivot = r_partition(array, start, end);
	const m_pivot = m_partition(array, start, end);
	quicksort(array, start, m_pivot - 1);
	quicksort(array, m_pivot + 1, end);
}
```

# Array

```jsx
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
```

# Array-Api

```jsx
'use-strict';

// Q1 make a string out of an array
{
	const fruits = ['apple', 'banana', 'orange'];
	const newStr = fruits.join('');
	console.log(newStr);
}

// Q2 make an array out of a string
{
	const fruits = 'apple, kiwi, banana, cherry';
	const newArr = fruits.split(', ');
	console.log(newArr);
}

// Q3 make this array look like this: [5, 4, 3, 2, 1]
{
	const array = [1, 2, 3, 4, 5];
	const newArr = array.reverse();
	console.log(newArr);
	console.log(array);
}

// Q4 make new array without the first two elements
{
	const array = [1, 2, 3, 4, 5];
	const newArr = array.slice(2, 5);
	console.log(newArr); // Correct
	array.splice(0, 2);
	console.log(array);
}

class Student {
	constructor(name, age, enrolled, score) {
		this.name = name;
		this.age = age;
		this.enrolled = enrolled;
		this.score = score;
	}
}

const student = [
	new Student('A', 29, true, 45),
	new Student('B', 28, false, 80),
	new Student('C', 30, true, 90),
	new Student('D', 40, false, 66),
	new Student('E', 18, true, 88),
];

// Q5 find a student with the score 90
{
	const result = student.find(student => student.score === 90);
	console.log(result);
}

// Q6 make an array of enrolled students
{
	const result = student.filter(student => student.enrolled);
	for (const iterator of result) {
		console.log(iterator.name);
	}
}

// Q7 make an array containing only the student's scores
// result should be: [45, 80, 90, 66, 88]
{
	const result = student.map(student => student.score);
	console.log(result);
}

// Q8 check if there is a student with the score lower than 50
{
	const result = student.some(student => student.score < 50);
	console.log(result);
}

// Q9 compute student's average score
{
	const result = student.map(student => student.score).reduce((previousValue, currentValue) => previousValue += currentValue);
	console.log(result / student.length);

	const betterResult = student.reduce((prev, curr) => prev + curr.score, 0);
	console.log(betterResult / student.length);
}

// Q10 make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
	const result = student.map(student => student.score).join(', ');
	console.log(result);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66', 80, 88, 90'
{
	const result = student.map(student => student.score)
	.sort((a, b) => a - b)
	.join(', ');
	console.log(result);
}
```
