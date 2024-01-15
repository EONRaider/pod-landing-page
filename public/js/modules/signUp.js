/* eslint-disable no-undef */

export default class SignUp {
  constructor({ submitButtonClass }) {
    this.submit = document.querySelector(submitButtonClass);
    this.field = undefined;
  }

  addField(field) {
    this.field = field;
    return this;
  }

  registerField() {
    this.field.registerEvents();
  }

  registerSubmitButton() {
    this.submit.addEventListener('click', (event) => {
      event.preventDefault();
      if (this.field.isValid) {
        // eslint-disable-next-line no-alert
        alert('User successfully signed up! Press OK to restart the form.');
        window.location.reload();
      }
    });
  }

  start() {
    this.registerField();
    this.registerSubmitButton();
  }
}
