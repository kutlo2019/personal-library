export default class View {
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

    this.app.append(this.title, this.table, this.button, this.modal)
    
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

    formField.append(formFieldLabel, formInput);

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