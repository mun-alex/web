let books = [
	{'id':'bookBtn0', 'name':'Iron Flame', 'author':'Rebecca Yarros', 'image':'1.jpg', 'isSelected':'false'}, 
	{'id':'bookBtn1', 'name':'The heaven & earth grocery store', 'author':'James McBride', 'image':'2.jpg', 'isSelected':'false'},
	{'id':'bookBtn2', 'name':'The spy coast', 'author':'Tess Gerritsen', 'image':'3.jpg', 'isSelected':'false'},
	{'id':'bookBtn3', 'name':'Happiness falls', 'author':'Angie Kim', 'image':'4.jpg', 'isSelected':'false'},
	{'id':'bookBtn4', 'name':'Hello beautiful', 'author':'Ann Napolitano', 'image':'5.jpg', 'isSelected':'false'},
	{'id':'bookBtn5', 'name':'Almost surely', 'author':'Amina Akhtar', 'image':'6.jpg', 'isSelected':'false'}
]

localStorage.setItem('books', JSON.stringify(books));

let nodeBooks = document.getElementById('books');
console.log(nodeBooks);

for (let i=0; i < books.length; i++) {
	let newBook = document.createElement('div');
	newBook.setAttribute('class', 'book text-align mb-20');
	newBook.setAttribute('id', 'book' + i)
	
	newBook.innerHTML = 

	'<img src="img/' + books[i].image + '" width="100%" class = "d-block mb-20">' + 
	'<button id="bookBtn' + i + '" onclick="addBook(this.id)">Почитать</button>';
	// console.log(newBook);
	nodeBooks.append(newBook);

	if (books[i].isSelected === 'true') {
		let btn = document.getElementById("bookBtn" + i);
		btn.setAttribute('disabled', false);
	}
}

function setDefaultStyle() {
	let book = document.getElementById('book3');
	book.style.border = '1px solid grey';
}

function changeBookStyle() {
	let book = document.getElementById('book3');
	book.style.border = '2px solid green';
}

let book = document.getElementById('book3');
console.log(book);

document.getElementById('book3').addEventListener("mouseover", changeBookStyle, false);
document.getElementById('book3').addEventListener("mouseout", setDefaultStyle, false);

function addBook(bookId) {
	let booksForReading;

	if (localStorage.getItem('booksForReading') === null) {
		booksForReading = [];
	} else {
		booksForReading = JSON.parse(localStorage.getItem('booksForReading'));
		console.log(booksForReading);
	}

	let selectedBook;

	for (let i=0; i<books.length; i++) {
		if (books[i].id === bookId) {
			selectedBook = books[i];
			books[i].isSelected = 'true';
			let btn = document.getElementById('bookBtn' + i);
			btn.setAttribute('disabled', 'true');
			break;
		}
	}

	booksForReading.push(selectedBook);
	console.log(booksForReading);
	localStorage.setItem('booksForReading', JSON.stringify(booksForReading));
}