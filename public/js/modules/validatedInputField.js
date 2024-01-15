/* eslint-disable no-undef,class-methods-use-this */

export default class ValidatedInputField {
  constructor({ inputFieldClass, parentClass, errorMessage }) {
    if (this.constructor === ValidatedInputField) {
      throw new Error('Cannot instantiate from abstract base class');
    }
    this.input = document.querySelector(inputFieldClass);
    this.parent = document.querySelector(parentClass);
    this.errorMessage = errorMessage;
    this.isValid = false;
    this.errorElement = this.buildErrorElement();
  }

  buildErrorElement() {
    const errorElement = document.createElement('span');
    errorElement.classList.add('error-message');
    errorElement.innerText = this.errorMessage;
    this.parent.insertBefore(errorElement, this.input.nextElementSibling);
    return errorElement;
  }

  setErrorState() {
    this.isValid = false;
    this.errorElement.style.display = 'block';
  }

  unsetErrorState() {
    this.isValid = true;
    this.errorElement.style.display = 'none';
  }

  evaluateField() {
    throw new Error('Abstract method must be implemented');
  }

  evaluateKeyPress(event, keyCode) {
    // event.preventDefault();
    if (event.keyCode === keyCode) {
      this.evaluateField();
    }
  }

  registerEvents() {
    this.input.addEventListener('keyup', (event) => this.evaluateKeyPress(event, 13)); // Enter key
    this.input.addEventListener('keydown', (event) => this.evaluateKeyPress(event, 9)); // Tab key
    this.input.addEventListener('focusout', () => this.evaluateField());
  }
}
