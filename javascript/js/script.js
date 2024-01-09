// let x = "hello";
// let y = "world!";

// alert(x + y);

// let a = parseInt(prompt('введите a'));
// let b = parseInt(prompt('введите b'));
// let sum = a + b;
// alert('сумма = ' + a + b);

// if (a === b) {
// 	console.log('equals')
// } else if (a < b) {
// 	console.log('OK');
// }

// console.log(Math.pow(b, 2));


function task1() {
	let x = parseInt(prompt('Insert x'));
	console.log(x ** 2 + 2 * x - 1);
}

function task2() {
	let a = parseInt(prompt('Insert a'));
	let b = parseInt(prompt('Insert b'));

	if (a % b == 0) {
		alert('Divisible');
	} else {
		alert('Not Divisible');
	}
}

function task3() {
	alert('Hello');
}

let array = [2, 3, 4, 7];
let array1 = new Array();

console.log(array[1]);

let months = ['January', 'February'];
months.push('March');
console.log(months);

months.unshift('December');
console.log(months);

months.pop();
console.log(months);

months.shift();
console.log(months);

console.log(months.indexOf('February'));
console.log(months.includes('February'));

let friends = ['Abylay', 'Dina', 'Arman'];

let person = {
	name: 'Almaz',
	age: 20,
	address: 'Almaty, Abay str.',
	friends: friends
}

console.log(person.name);
console.log(person.friends);

months.push(person);
console.log(months);

function loop_task_1() {
	let n = parseInt(prompt('введите размер массива'));
	let numArray = [];

	for (let i = 0; i < n; i++) {
		let num = parseInt(prompt('введите число'));
		numArray.push(num);
	}

	console.log(numArray);

	for (let i = n-1; i >= 0; i--) {
		console.log(numArray[i]);
	}
}

loop_task_1();