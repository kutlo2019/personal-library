let myLibrary = []

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

function updateTable(book) {
    const tableRow = document.createElement('tr');

    // add author to table
    const authorData = document.createElement('td');
    authorData.innerText = book.author;

    // add title to table
    const titleData = document.createElement('td');
    titleData.innerText = book.title;

    // add pages to table
    const pagesData = document.createElement('td');
    pagesData.innerText = book.pages;

    // Render button depending on read status
    const statusData = document.createElement('td');
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
    statusData.appendChild(readBtn);

    const deleteData = document.createElement('td');

    const deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('type', 'button');
    deleteBtn.setAttribute('id', `${book.title}`);
    deleteBtn.classList.add('delete');
    deleteBtn.innerText = "Delete"
    deleteData.appendChild(deleteBtn);

    tableRow.appendChild(authorData);
    tableRow.appendChild(titleData);
    tableRow.appendChild(pagesData);
    tableRow.appendChild(statusData);
    tableRow.appendChild(deleteData);
    
    table.appendChild(tableRow);

    // Add event listener to the delete button
    const deleteButton = document.getElementById(`${book.title}`);
    deleteButton.addEventListener('click', e => {
        myLibrary = myLibrary.filter((book, index, array) => {
            if (book.title === deleteButton.id) {
                array.splice(index, 1);
                return false;
            }
            return true;
        });
        table.innerHTML = `<tr>
                              <th>Author</th>
                              <th>Title</th>
                              <th>Pages</th>
                              <th>Status</th>
                           </tr>`;
        myLibrary.forEach(book => {
            updateTable(book);
        });
    });
}

myLibrary.forEach(book => {
    updateTable(book)
});