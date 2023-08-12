export class View {
  constructor() {
    // The root element
    this.app = this.getElement('#root');

    // The title of the app
    this.title = this.createElement('h1');
    this.title.textContent = 'Personal Library';

    this.modal = this.createElement('div', 'modal');
    this.modal.id = 'modal';

    this.formTitle = this.createElement('h2');
    this.formTitle = "Add a Book"
    this.form = this.createElement('form');

    // Create author form field
    this.authorField = this.createFormField("author")

    // Create the book title form field
    this.titleField = this.createFormField("title");

    // Create the book pages form field
    this.pagesField = this.createFormField("pages");

    // Create the read status form field
    this.readField = this.createFormField("status");

    this.fullWidth = this.createElement('div', 'full-width');
    this.addButton = this.createElement('button');
    this.addButton.textContent = "Add";
    this.addButton.setAttribute('type', 'submit');
    this.clearButtton = this.createElement('button');
    this.clearButtton.textContent = "Clear"
    this.clearButtton.setAttribute('type', 'reset');
    this.fullWidth.append(this.addButton, this.clearButtton);


    this.form.append(
      this.authorField, 
      this.titleField, 
      this.pagesField,
      this.readField,
      this.fullWidth
    );

    this.modal.append(this.formTitle, this.form);

    this.booksTable = this.createElement('table');
    this.row = this.createElement('tr');
    this.authHeader = this.createElement('th');
    this.authHeader.textContent = 'Author';
    this.titleHeader = this.createElement('th');
    this.titleHeader.textContent = 'Title';
    this.pagesHeader = this.createElement('th');
    this.pagesHeader.textContent = 'Pages';
    this.statusHeader = this.createElement('th');
    this.statusHeader.textContent = 'Status';

    this.row.append(
      this.authHeader,
      this.titleHeader,
      this.pagesHeader,
      this.statusHeader
    );

    this.booksTable.append(this.row);

    this.button = this.createElement('button', 'add-book');
    this.button.type = "button";
    this.button.textContent = 'Add Book';

    this.button.addEventListener('click', e => {
      e.preventDefault();
      this.modal.style.display = 'block';
    });

    this.app.append(this.title, this.booksTable, this.button, this.modal)
    
  }

  bindAddBook(handler) {
    this.form.addEventListener('submit', event => {
      event.preventDefault();
      const title = document.getElementById('title');
      const author = document.getElementById('author');
      const pages = document.getElementById('pages');
      const readStatus = document.getElementById('status')

      if (readStatus.value === "Read") {
        handler(title.value, author.value, pages.value, true);
      } else {
        handler(title.value, author.value, pages.value, false);
      }
      
    });
  }

  bindDeleteBook(handler) {
    this.booksTable.addEventListener('click', event => {
      if (event.target.className === 'delete') {
        handler(event.target.id);
      }
    });
  }

  bindToggleRead(handler) {
    this.booksTable.addEventListener('click', event => {
      if (event.target.className === 'status') {
        handler('title')
      }
    })
  }

  displayBooks(books) {
    while (this.booksTable.children[1]) {
      this.booksTable.removeChild(this.booksTable.children[1])
    }

    if (books.length === 0) {
      const p = this.createElement('p');
      p.textContent = "No booksTable to Show";
      this.booksTable.append(p);
    } else {
      books.forEach(book => {
        // Create row element
        const tableRow = this.createElement('tr');

        // Create td element and add author
        const authorData = this.createElement('td');
        authorData.innerText = book.author;

        // Create td and add title
        const titleData = this.createElement('td');
        titleData.innerText = book.title;

        // Add pages to td element
        const pagesData = this.createElement('td');
        pagesData.innerText = book.pages;

        // Render button depending on read status
        const statusData = this.createElement('td');
        const readBtn = this.createReadButton(book);
        statusData.appendChild(readBtn);

        const deleteData = this.createElement('td');

        const deleteButton = this.createDeleteButton(book);

        deleteData.appendChild(deleteButton);

        tableRow.append(
          authorData,
          titleData,
          pagesData,
          statusData,
          deleteData
        );

        this.booksTable.append(tableRow);
      });
    }
  }

  createDeleteButton(book) {
    const deleteBtn = this.createElement('button');
    deleteBtn.setAttribute('type', 'button');
    deleteBtn.setAttribute('id', `${book.title}`);
    deleteBtn.classList.add('delete');
    deleteBtn.innerText = "Delete";

    return deleteBtn;
}

  createReadButton(book) {
    const readBtn = this.createElement('button');
    readBtn.setAttribute('type', 'button');
    if (book.readStatus) {
        readBtn.classList.add("status", "read");
        readBtn.innerText = "Read";
    } else {
        readBtn.classList.add("status", "not-read");
        readBtn.innerText = "Not Read";
    }

    readBtn.addEventListener('click', e => {
      e.preventDefault();
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

  // Create a form field
  createFormField(fieldText) {
    // Create the book title form field
    const formField = this.createElement('div', 'form-item');
    const formFieldLabel = this.createElement('label');
    formFieldLabel.setAttribute("for", fieldText);
    formFieldLabel.textContent = fieldText.toUpperCase();

    let formInput;

    if (fieldText === "status") {
      formInput = this.createElement('select');
      formInput.setAttribute("type" , "select");
      const readOption = this.createElement('option');
      readOption.text = "Read";
      const unreadOption = this.createElement('option');
      unreadOption.text = "Not Read";
      formInput.add(readOption);
      formInput.add(unreadOption);
    } 
    
    if (fieldText === "pages") {
      formInput = this.createElement('input');
      formInput.type = "number";
      formInput.min = "0";
    } 
    
    if (fieldText === "author" || fieldText === "title"){
      formInput = this.createElement('input');
      formInput.type = "text";
    }

    formInput.id = fieldText;
    formInput.name = fieldText;
    formInput.required = true;

    formField.append(formFieldLabel, this.createElement('br'), formInput);

    return formField;

  }

  createLabel(text) {
    const formField = this.createElement('div', 'form-item');
    const formFieldLabel = this.createElement('label');
    formFieldLabel.setAttribute("for", text);
    formFieldLabel.textContent = text.toUpperCase();

    return formField;
  }

  // Create an element with an optional CSS class
  createElement(tag, className) {
    const element = document.createElement(tag);
    if (className) element.classList.add(className);

    return element;
  }

  // Retrieve an element from the DOM
  getElement(selector) {
    const element = document.querySelector(selector);

    return element;
  }
}