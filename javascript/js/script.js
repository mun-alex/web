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

function task5() {
	let n = parseInt(prompt('введите количество школьников'));
	let k = parseInt(prompt('введите количество яблок'));

	console.log(Math.floor(k / n));
}

function task6() {
	let v = parseInt(prompt('ввдите среднюю скорость'));
	let s = parseInt(prompt('ввдите расстояние'));

	if (s / v < 2.25) {
		console.log('YES, YOU CAN REACH');
	} else {
		console.log('NO, YOU CAN NOT REACH');
	}
}

function task7() {
	let count = parseInt(prompt('введите количество'));
	let sum = count * 120;

	if (sum > 4000) {
		sum *= 0.9;
	}

	console.log(sum);
}

function task8() {
	let amount = parseInt(prompt('введите количество денег'));
	let currency = parseInt(prompt('1 - CONVERT TO USD \n2 - CONVERT TO EUR \n3 - CONVERT TO GGBP'));

	switch(currency) {
	case 1:
		console.log((amount / 380).toFixed(2));
		break;
	case 2:
		console.log((amount / 430).toFixed(2));
		break;
	case 3:
		console.log((amount / 480).toFixed(2));
	}
}

task8();

