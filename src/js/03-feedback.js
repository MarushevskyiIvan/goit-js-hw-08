const throttle = require('lodash.throttle');

const formEl = document.querySelector('.feedback-form');
const textareaEl = document.querySelector('.feedback-form textarea');
const emailEl = document.querySelector('.feedback-form input');

formEl.addEventListener('submit', onFormSubmit);
formEl.addEventListener('input', throttle(saveFormValue, 500));

const KEY = 'feedback-form-state';
let formData = JSON.parse(localStorage.getItem(KEY)) || {};

populateForm();

function saveFormValue(evt) {
  formData[evt.target.name] = evt.target.value;

  localStorage.setItem(KEY, JSON.stringify(formData));
}

function populateForm() {
  const saveMessage = JSON.parse(localStorage.getItem(KEY));

  if (saveMessage) {
    emailEl.value = saveMessage.email || '';
    textareaEl.value = saveMessage.message || '';
  }
}

function onFormSubmit(evt) {
  evt.preventDefault();
  console.log(formData);
  evt.target.reset();
  localStorage.removeItem(KEY);
  formData = {};
}
