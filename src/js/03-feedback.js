const formEl = document.querySelector('.feedback-form');
const labelEl = document.querySelector('input');
const textareaEL = document.querySelector('textarea');

formEl.addEventListener('input', onFormInput);

function onFormInput(evt) {
  const value = onInputValue(evt);

  localStorFn(value);

  if (localStorage.getItem(key) !== '') {
    formEl.value = localStorage.getItem(key);
  } else {
    return;
  }
}

function onInputValue(evt) {
  const task = {};
  new FormData(evt.currentTarget).forEach((value, name) => {
    task[name] = value;
  });
  console.log(task);
  return task;
}

const key = 'feedback-form-state';

function localStorFn(data) {
  const localValue = JSON.parse(localStorage.getItem(key)) || [];
  localValue.push(data);
  localStorage.setItem(key, JSON.stringify(localValue));
}

// function getLocalValue() {
//   if (localStorage.getItem() !== '') {
//     return localStorage.get(key);
//   }else{

//   }
// }
