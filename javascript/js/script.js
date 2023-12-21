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
task2();
