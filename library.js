let bookCollection = document.querySelector('.book-collection');
let bookForm = document.querySelector('form');

let titleField = document.querySelector('#title-input');
let authorField = document.querySelector('#author-input');
let pagesField = document.querySelector('#pages-input');
let readCheckbox = document.querySelector('#read-input');

bookForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let title = titleField.value;
    let author = authorField.value;
    let pages = parseInt(pagesField.value);
    let read = readCheckbox.checked;

    console.log(title + ' ' + author + ' ' + pages + ' ' + read);

    let book = new Book(title, author, pages, read);
    addBook(book);

})

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBook(book) {
    let bookCard = document.createElement('div');
    bookCard.classList.add('book');
    let titleElement = document.createElement('div');
    titleElement.textContent = book.title;
    titleElement.classList.add('title');

    let authorElement = document.createElement('div')
    authorElement.textContent = book.author;
    authorElement.classList.add('author');

    let pagesElement = document.createElement('div');
    pagesElement.textContent = book.pages;
    pagesElement.classList.add('pages');

    if (book.read) {
        bookCard.classList.add('read')
    } else {
        bookCard.classList.add('unread');
    }

    bookCard.appendChild(titleElement);
    bookCard.appendChild(authorElement);
    bookCard.appendChild(pagesElement);
    bookCollection.appendChild(bookCard);
}





