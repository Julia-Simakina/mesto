import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor({ popupSelector, submitForm }) {
    super(popupSelector);
    this._submitForm = submitForm;
    this._popupForm = this._popup.querySelector('.popup__form');
    this._inputList = this._popupForm.querySelectorAll('.form__input');
  }

  _getInputValues() {
    this._inputValues = {};
    // добавляем в этот объект значения всех полей
    this._inputList.forEach(input => {
      this._inputValues[input.id] = input.value;
    });
    // возвращаем объект значений
    return this._inputValues;
  }
  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener('submit', evt => {
      evt.preventDefault();
      this._submitForm(this._getInputValues());
      this.close();
    });
  }
  close() {
    super.close();
    this._popupForm.reset();
  }
}
