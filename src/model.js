import { Book } from "./Book";

export class Model {
  constructor() {
    this.books = [
      new Book("The Hobbit", "J.R.R Tolkien", 295, false),
      new Book("Things Fall Apart", "Chinua Achebe", 564, true),
      new Book("Arrow of God", "Chinua Achebe", 738, false)
    ]
  }

  addBook(title, author, pages, readStatus) {
    const book = new Book(title, author, pages, readStatus);
    
    this.books.push(book);
    this.onBookListChange(this.books);
  }

  editBook(title) {
    this.books = this.books.map(book => 
      book.title === title ? new Book(title, book.author, book.pages, book.readStatus) : book);

    this.onBookListChange(this.books);
  }

  deleteBook(title) {
    this.books = this.books.filter(book => book.title !== title);
    console.log(this.onBookListChange)
    this.onBookListChange(this.books);
  }

  toggleRead(title) {
    this.books = this.books.map(book => book.title === title ? new Book(book.title, book.author, book.pages, !book.readStatus) : book);

    this.onBookListChange(this.books);
  }

  bindBookListChanged(callback) {
    this.onBookListChange = callback;
  }
}