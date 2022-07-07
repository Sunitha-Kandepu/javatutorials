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