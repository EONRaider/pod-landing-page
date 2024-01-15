/* eslint-disable no-undef */
import ValidatedEmailField from './modules/validatedEmailField.js';
import SignUp from './modules/signUp.js';

const email = new ValidatedEmailField({
  inputFieldClass: '.email-input__field',
  parentClass: '.email-input',
  errorMessage: 'Oops! Please check your email',
});

new SignUp({ submitButtonClass: '.email-input__button' })
  .addField(email)
  .start();
