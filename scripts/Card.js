export default class Card {
  constructor(item, cardSelector, showPopupImage, handleCardClick) {
    this._link = item.link;
    this._name = item.name;
    this._cardSelector = cardSelector;
    this._showPopupImage = showPopupImage;
    this._handleCardClick = handleCardClick;
  }

  _getTemplate() {
    const newElement = document
      .querySelector(this._cardSelector)
      .content.querySelector('.elements__item')
      .cloneNode(true);

    return newElement;
  }

  _handleLikeCard() {
    this.cardLikeBtn.classList.toggle('elements__description-like_active');
  }

  _handleDeleteCard() {
    this.element.remove();
    this.element = null;
  }

  // Метод создания карточки
  generateCard() {
    this.element = this._getTemplate();
    const elementImage = this.element.querySelector('.elements__image');
    elementImage.src = this._link;
    elementImage.alt = this._name;

    this.cardLikeBtn = this.element.querySelector('.elements__description-like');
    this.buttonDelete = this.element.querySelector('.elements__delete');

    const elementTitle = this.element.querySelector('.elements__description-name');
    elementTitle.textContent = this._name;

    this._setEventListeners();

    return this.element;
  }

  // Метод слушателей
  _setEventListeners() {
    // Слушатель лайка
    this.cardLikeBtn.addEventListener('click', () => {
      this._handleLikeCard();
    });

    // Обработчик открытия попапа просмотра изображения
    this.element.querySelector('.elements__image').addEventListener('click', () => {
      this._showPopupImage(this._link, this._name);
    });

    // Слушатель кнопки удаления карточки
    this.buttonDelete.addEventListener('click', () => {
      this._handleDeleteCard();

      //Открывать попап с картинкой при клике на карточку
      elementImage.addEventListener('click', () => {
        this._handleCardClick(this._name, this._link);
      });
    });
  }
}
