import throttle from 'lodash.throttle';


const refs = {
    form: document.querySelector('.feedback-form'),
    mail: document.querySelector('[name="email"]'),
    textarea: document.querySelector('[name="message"]'),
}

const KEY_OF_DATAOBJECT = "feedback-form-state";


let formData = {};



refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onTextareaInput, 500));


if (localStorage.getItem(KEY_OF_DATAOBJECT)) {
  formData = JSON.parse(localStorage.getItem(KEY_OF_DATAOBJECT));
  refs.mail.value = formData.email;
  refs.textarea.value = formData.message;
}

function onTextareaInput(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(KEY_OF_DATAOBJECT, JSON.stringify(formData));

}
function onFormSubmit(e) {
  e.preventDefault();
 e.currentTarget.reset();
  localStorage.removeItem(KEY_OF_DATAOBJECT);
}
