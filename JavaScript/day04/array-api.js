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