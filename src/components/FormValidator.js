export default class FormValidator {
  constructor(config, formElement) {
    this._config = config;
    this._formElement = formElement;
    this._inputList = this._formElement.querySelectorAll(this._config.inputSelector);
    this._submitButton = this._formElement.querySelector(this._config.submitButtonSelector);
    // this._validSubmitButton = this._formElement.querySelector(this._config.validSubmitButtonClass);
  }

  //Добавляю класс с ошибкой
  _showInputError(input, validationMessage, activeErrorClass) {
    const errorTextElement = this._formElement.querySelector(
      `${this._config.errorClass}${input.name}`
    );
    input.classList.add(this._config.errorSelector);
    errorTextElement.textContent = validationMessage;
    errorTextElement.classList.add(activeErrorClass);
  }

  // Удаляю класс с ошибкой
  _hideInputError(input, activeErrorClass) {
    const errorTextElement = this._formElement.querySelector(
      `${this._config.errorClass}${input.name}`
    );
    input.classList.remove(this._config.errorSelector);
    errorTextElement.classList.remove(activeErrorClass);
    errorTextElement.textContent = '';
  }

  // Текст ошибки в зависимости от валидности поля ввода
  _checkInputValidity(input) {
    if (!input.validity.valid) {
      this._showInputError(input, input.validationMessage);
    } else {
      this._hideInputError(input);
    }
  }

  // Валидность поля ввода (some - хотя бы один)
  _hasInvaalidInput() {
    return Array.from(this._inputList).some(input => !input.validity.valid);
  }

  //Отключение и включение кнопки
  _toggleButtonState() {
    if (this._hasInvaalidInput()) {
      this._submitButton.setAttribute('disabled', true);
    } else {
      this._submitButton.removeAttribute('disabled');
    }
  }

  // Принимает элемент формы
  _setEventListeners() {
    this._inputList.forEach(input => {
      input.addEventListener('input', () => {
        this._checkInputValidity(input);
        this._toggleButtonState();
      });
    });
  }

  enableValidation() {
    this._setEventListeners();
  }

  //Перепроверка валидности
  clearInputError() {
    this._inputList.forEach(inputElement => {
      this._hideInputError(inputElement);
    });
    this._toggleButtonState();
  }
}
