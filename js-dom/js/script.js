function querySel() {
	let element = document.querySelector('.selector');
	console.log(element);
	element.style.border = '2px solid red';
}

function querySelAll() {
	let elements = document.querySelectorAll('.selector');
	console.log(elements);

	// for (let i=0; i<elements.length; i++) {
	// 	elements[i].setAttribute('placeholder', 'hello!');
	// }

	elements.forEach(element => {
		element.setAttribute('placeholder', 'hello!');
	})
}

function getById() {
	let element = document.getElementById(5);
	element.setAttribute('disabled', 'true');
}

function getByName() {
	let elements = document.getElementsByName('login');
	console.log(elements);

	// for (let i=0; i<elements.length; i++) {
	// 	elements[i].style.background = 'yellow';
	// }

	elements.forEach(element => {
		element.style.background = 'yellow';
	})
}

function getByTag() {
	let elements = document.getElementsByTagName('button');
	console.log(elements);

	for (let i=0; i<elements.length; i++) {
		elements[i].style.background = 'green';
	}
}

function addButton() {
	let newElement = document.createElement('button');
	newElement.setAttribute('class', 'd-block ml-20 mb-20');
	newElement.innerText = 'newButton';
	newElement.style.background = 'red';

	// let node = document.getElementById('buttons');
	// node.prepend(newElement);

	let node = document.getElementById('main');
	node.after(newElement);
}

function removeElement() {
	let node = document.getElementById('selectors');
	node.remove();
}

function signIn() {

	let users = [{"login":"Daulet", "password":"qwerty"}]


	let login = document.getElementById('login');
	console.log(login);
	console.log(login.value);

	let password = document.getElementById("password");
	console.log(password.value);
}