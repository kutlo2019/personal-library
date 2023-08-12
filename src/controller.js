export class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.onBookListChanged(this.model.books)

    this.view.bindAddBook(this.handleAddBook);
    this.view.bindDeleteBook(this.handleDeleteBook);
    this.view.bindToggleRead(this.handleToggleRead);
    // Comment: this.view.bindEditBook(this.handleEditBook);
    this.model.bindBookListChanged(this.onBookListChanged);
  }

  onBookListChanged = (books) => {
    this.view.displayBooks(books);
  }

  handleAddBook = (title, author, pages, status) => {
    this.model.addBook(title, author, pages, status)
  }
  
  handleEditBook = (title) => {
    this.model.editBook(title)
  }
  
  handleDeleteBook = (title) => {
    this.model.deleteBook(title)
  }
  
  handleToggleRead = (title) => {
    this.model.toggleRead(title)
  }
}