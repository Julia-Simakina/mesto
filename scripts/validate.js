//Добавляю класс с ошибкой
function showInputError(
  input,
  errorSelector,
  errorTextElement,
  validationMessage,
  activeErrorClass
) {
  input.classList.add(errorSelector);
  errorTextElement.textContent = validationMessage;
  errorTextElement.classList.add(activeErrorClass);
}

// Удаляю класс с ошибкой
function hideInputError(input, errorSelector, errorTextElement, activeErrorClass) {
  input.classList.remove(errorSelector);
  errorTextElement.classList.remove(activeErrorClass);
  errorTextElement.textContent = '';
}

//Неактивная кнопка
function disableButton(submitButton, validSubmitButtonClass) {
  submitButton.classList.remove(validSubmitButtonClass);
  submitButton.disabled = true;
}
//Активная кнопка
function enableButton(submitButton, validSubmitButtonClass) {
  submitButton.classList.add(validSubmitButtonClass);
  submitButton.disabled = false;
}
// Текст ошибки в зависимости от валидности поля ввода
function checkInputValidity(input, errorSelector, errorClass, activeErrorClass) {
  const errorTextElement = document.querySelector(`${errorClass}${input.name}`);

  if (!input.validity.valid) {
    showInputError(
      input,
      errorSelector,
      errorTextElement,
      input.validationMessage,
      activeErrorClass
    );
  } else {
    hideInputError(input, errorSelector, errorTextElement);
  }
}

// Валидность поля ввода (some - хотя бы один)
function hasInvaalidInput(inputList) {
  return Array.from(inputList).some(input => !input.validity.valid);
}

// Отключение и включение кнопки
function toggleButtonState(submitButton, validSubmitButtonClass, inputList) {
  if (!hasInvaalidInput(inputList)) {
    enableButton(submitButton, validSubmitButtonClass);
  } else {
    disableButton(submitButton, validSubmitButtonClass);
  }
}

// Слушатели элементов формы
function setEventListeners(
  form,
  inputList,
  errorSelector,
  errorClass,
  activeErrorClass,
  validSubmitButtonClass,
  submitButton
) {
  form.addEventListener('submit', e => {
    e.preventDefault();
  });

  inputList.forEach(input => {
    input.addEventListener('input', e => {
      checkInputValidity(input, errorSelector, errorClass, activeErrorClass);
      toggleButtonState(submitButton, validSubmitButtonClass, inputList);
    });
  });
}

// Обработка всех форм на странице
function enableValidation(config) {
  const formList = document.querySelectorAll(config.formSelector);
  formList.forEach(form => {
    const inputList = form.querySelectorAll(config.inputSelector);
    const submitButton = form.querySelector(config.submitButtonSelector);

    // function blockButton(button) {
    //   button.setAttribute('disabled', true);
    // }
    //не получилось. надо узнать,как вызвать эту функцию в index.js

    setEventListeners(
      form,
      inputList,
      config.errorSelector,
      config.errorClass,
      config.activeErrorClass,
      config.validSubmitButtonClass,
      submitButton
    );
  });
}

enableValidation({
  formSelector: '.form',
  inputSelector: '.form__input',
  errorClass: '.popup__input-error_type_',
  errorSelector: 'popup__input-error_type',
  submitButtonSelector: '.form__save',
  validSubmitButtonClass: 'form__save_valid'
});
