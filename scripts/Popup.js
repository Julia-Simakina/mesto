class Popup {
  constructor(popupSelector) {
    this._popup = popupSelector;
    this._closeButton = document.querySelectorAll('.popup__close');
    //использовала bind, чтобы не потерять контекст
    this._closeEsk = this._handleEscClose.bind(this);
  }

  // метод открытия попапов
  open() {
    this._popup.classList.add('popup_opened');
    document.addEventListener('keydown', this._escapeClose);
  }

  // метод закрытия попапов
  close() {
    this._popup.classList.remove('popup_opened');
    document.removeEventListener('keyup', this._escapeClose);
  }

  //Закрытие попапа на esk
  _handleEscClose() {
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
