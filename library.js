const bookCollection = document.querySelector('.book-collection');
const bookForm = document.querySelector('form');
const titleField = document.querySelector('#title-input');
const authorField = document.querySelector('#author-input');
const pagesField = document.querySelector('#pages-input');
const readCheckbox = document.querySelector('#read-input');

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

    let newReadDiv = document.createElement('div');
    let newReadLabel = document.createElement('label');
    newReadLabel.textContent = 'Read: '
    let newReadBox = document.createElement('input');
    newReadBox.type = 'checkbox';
    newReadBox.classList.add('read-box');

    newReadDiv.appendChild(newReadLabel);
    newReadDiv.appendChild(newReadBox);

    bookCard.appendChild(titleElement);
    bookCard.appendChild(authorElement);
    bookCard.appendChild(pagesElement);
    bookCard.appendChild(newReadDiv);
    bookCollection.appendChild(bookCard);
}





