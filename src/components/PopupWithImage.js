import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    // картинка в режиме просмотра изображения
    this._popupImg = this._popup.querySelector('.popup__img');
    // название картинкив режиме просмотра изображения
    this._popupTitle = this._popup.querySelector('.popup__caption');
  }

  //метод открытия попапа просмотра изображения
  open(image, title) {
    this._popupImg.src = image;
    this._popupImg.alt = title;
    this._popupTitle.innerText = title;
    super.open();
  }
}
