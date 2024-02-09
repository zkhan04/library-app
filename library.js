const bookCollection = document.querySelector('.book-collection');
const bookForm = document.querySelector('form');
const titleField = document.querySelector('#title-input');
const authorField = document.querySelector('#author-input');
const pagesField = document.querySelector('#pages-input');
const readCheckbox = document.querySelector('#read-input');
const readBox = document.querySelectorAll('.read-box');

bookForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let title = titleField.value;
    let author = authorField.value;
    let pages = parseInt(pagesField.value);
    let read = readCheckbox.checked;

    let book = new Book(title, author, pages, read);
    myLibrary.concat(book);
    addBook(book);
})

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

const myLibrary = [new Book('Brave New World', 'Aldous Huxley', 215, true)];

function addBook(book) {
    // creating elements for book card, title, author and pages
    let bookCard = document.createElement('div');
    let titleElement = document.createElement('div');
    let authorElement = document.createElement('div');
    let pagesElement = document.createElement('div');
    let newReadDiv = document.createElement('div');
    let newReadLabel = document.createElement('label');
    let newReadBox = document.createElement('input');
    newReadBox.type = 'checkbox';
    let removeButton = document.createElement('button');

    // setting text content
    titleElement.textContent = book.title;
    authorElement.textContent = book.author;
    pagesElement.textContent = book.pages;
    newReadLabel.textContent = 'Read: ';
    removeButton.textContent = 'Remove';

    // adding classes for styling
    bookCard.classList.add('book');
    titleElement.classList.add('title');
    authorElement.classList.add('author');
    pagesElement.classList.add('pages');
    newReadBox.classList.add('read-box');
    removeButton.classList.add('remove-button');

    if (book.read) {
        bookCard.classList.add('read');
        newReadBox.checked = true;
    } else { bookCard.classList.add('unread');}

    // event handlers
    newReadBox.addEventListener('click', e => {
        if (book.read) {
            book.read = false;
            bookCard.classList.remove('read')
            bookCard.classList.add('unread')
        } else {
            book.read = true;
            bookCard.classList.remove('unread');
            bookCard.classList.add('read');
        }
    })

    removeButton.addEventListener('click', (e) => {
        myLibrary.pop(book);
        bookCollection.removeChild(bookCard);
    })

    newReadDiv.appendChild(newReadLabel);
    newReadDiv.appendChild(newReadBox);
    bookCard.appendChild(titleElement);
    bookCard.appendChild(authorElement);
    bookCard.appendChild(pagesElement);
    bookCard.appendChild(newReadDiv);
    bookCard.appendChild(removeButton);
    bookCollection.appendChild(bookCard);
}

function displayLibrary(){
    myLibrary.forEach((book) => {
        addBook(book);
    })
}

displayLibrary();






