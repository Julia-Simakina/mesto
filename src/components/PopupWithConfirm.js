import Popup from './Popup';

export default class PopupWithConfirm extends Popup {
  constructor({ popupSelector }) {
    super(popupSelector);
    this._form = this._popup.querySelector('.popup__form');
  }

  changeSubmitHandle(removing) {
    this._handleSubmit = removing;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('click', evt => {
      evt.preventDefault();
      this._handleSubmit();
    });
  }
}
