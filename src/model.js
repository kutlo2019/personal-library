class Book {
  constructor(title, author, pages, readStatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
  }
}

export default class Model {
  constructor() {
    this.books = [
      new Book("The Hobbit", "J.R.R Tolkien", 295, true),
      new Book("Things Fall Apart", "Chinua Achebe", 564, false),
      new Book("Arrow of God", "Chinua Achebe", 738, true)
    ]
  }

  addBook(title, author, pages, readStatus) {
    const book = new Book(title, author, pages, readStatus);
    
    this.books.push(book);
  }

  editBook(title) {
    this.books = this.books.map(book => 
      book.title === title ? new Book(title, book.author, book.pages, book.readStatus) : book);
  }

  deleteBook(title) {
    this.books = this.books.filter(book => book.title !== title);
  }

  toggleRead(title) {
    this.books = this.books.map(book => book.title === title ? new Book(book.title, book.author, book.pages, !book.readStatus) : book);
  }
}