const formEl = document.querySelector('.feedback-form');

formEl.addEventListener('submit', onInputValue);

function onInputValue(evt) {
  evt.preventDefault();
  const task = {};
  new FormData(evt.currentTarget).forEach((value, name) => {
    task[name] = value;
  });
  return task;
}
