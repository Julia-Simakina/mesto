export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._closeButton = this._popup.querySelector('.popup__close');
    //использовала bind, чтобы не потерять контекст
    this._closeEsk = this._handleEscClose.bind(this);
  }

  // метод открытия попапов
  open() {
    this._popup.classList.add('popup_opened');
    document.addEventListener('keyup', this._closeEsk);
  }

  // метод закрытия попапов
  close() {
    this._popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._closeEsk);
  }

  //Закрытие попапа на esk
  _handleEscClose(evt) {
    if (evt.key === 'Escape') {
      this.close();
    }
  }
  setEventListeners() {
    this._closeButton.addEventListener('click', () => {
      this.close();
    });

    //Закрытие на оверлей
    this._popup.addEventListener('mousedown', evt => {
      if (evt.target.classList.contains('popup')) {
        this.close();
      }
    });
  }
}
