import './index.css'
import Controller from './controller.js'
import Model from './model';
import View from './view';
const myLibrary = []



const app = new Controller(new Model(), new View());
app.model.addBook("Born a Crime", "Trevor Noah", 234, false);

console.table('books', app.model.books);
// Book constructor
function Book(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
    this.info = function() {
        return `${this.title} by ${this.author}, ${pages} pages, ${this.status ? "read" : "not read yet"}.`;
    };
}

function addBookToLibrary(e) {
    e.preventDefault();
    const author = document.querySelector('#author').value;
    const title = document.querySelector('#title').value;
    const pages = parseInt(document.querySelector('#pages').value);
    let status = document.querySelector('#status').value;
    status === "read" ? status = true: status = false;
    const newBook = new Book(title, author, pages, status);
    myLibrary.push(newBook);
    updateTable(newBook)
    modal.style.display = "none";
}

// Create new book instances
const theHobbit = new Book("The Hobbit", "J.R.R Tolkien", 295, true);
const tfa = new Book("Things Fall Apart", "Chinua Achebe", 564, false);
const arrowOfGod = new Book("Arrow of God", "Chinua Achebe", 738, true);

// Add them to array
myLibrary.push(theHobbit);
myLibrary.push(tfa);
myLibrary.push(arrowOfGod);

// Onclick of submit button, add book to library
const submitBtn = document.querySelector("button[type='submit']");
submitBtn.addEventListener('click', addBookToLibrary);


const addBook = document.querySelector('.add-book');
const modal = document.querySelector('#modal');
addBook.addEventListener('click', (e) => {
    modal.style.display = 'block';
});

const table = document.querySelector("table");

myLibrary.forEach(book => {
    updateTable(book)
});

function resetTable() {
    table.innerHTML = `<tr>
                              <th>Author</th>
                              <th>Title</th>
                              <th>Pages</th>
                              <th>Status</th>
                           </tr>`;
    myLibrary.forEach(book => {
        updateTable(book);
    });
}

function createDeleteButton(book) {
    const deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('type', 'button');
    deleteBtn.setAttribute('id', `${book.title}`);
    deleteBtn.classList.add('delete');
    deleteBtn.innerText = "Delete";

    deleteBtn.addEventListener('click', e => {
        myLibrary.filter((book, index, array) => {
            if (book.title === deleteBtn.id) {
                array.splice(index, 1);
                return false;
            }

            return true;
        });

        resetTable()
    });

    return deleteBtn;
}

function createReadButton(book) {
    const readBtn = document.createElement('button');
    readBtn.setAttribute('type', 'button');
    if (book.status) {
        readBtn.classList.add("status", "read");
        readBtn.innerText = "Read";
    } else {
        readBtn.classList.add("status", "not-read");
        readBtn.innerText = "Not Read";
    }

    readBtn.addEventListener('click', e => {
        if (readBtn.innerText === "Read") {
            readBtn.classList.replace("read", "not-read");
            readBtn.innerText = "Not Read"
        } else if (readBtn.innerText === "Not Read") {
            readBtn.classList.replace("not-read", "read");
            readBtn.innerText = "Read";
        }
    });
    return readBtn;
}

function createTableRow(book) {
    // Create row element
    const tableRow = document.createElement('tr');

    // Create td element and add author
    const authorData = document.createElement('td');
    authorData.innerText = book.author;

    // Create td and add title
    const titleData = document.createElement('td');
    titleData.innerText = book.title;

    // Add pages to td element
    const pagesData = document.createElement('td');
    pagesData.innerText = book.pages;

    // Render button depending on read status
    const statusData = document.createElement('td');
    const readBtn = createReadButton(book);
    statusData.appendChild(readBtn);

    const deleteData = document.createElement('td');

    const deleteButton = createDeleteButton(book);

    deleteData.appendChild(deleteButton);

    tableRow.appendChild(authorData);
    tableRow.appendChild(titleData);
    tableRow.appendChild(pagesData);
    tableRow.appendChild(statusData);
    tableRow.appendChild(deleteData);

    return tableRow;
}

function updateTable(book) {

    const tableRow = createTableRow(book);
    
    table.appendChild(tableRow);
}