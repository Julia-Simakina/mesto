export default class Card {
  constructor({ item, handleCardClick, handleDeleteClick, userId, handleLikeClick }, cardSelector) {
    this._link = item.link;
    this._name = item.name;
    this._likes = item.likes;
    this._id = item._id;
    this._userId = userId;
    this._ownerId = item.owner._id;

    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._handleDeleteClick = handleDeleteClick;
    this._handleLikeClick = handleLikeClick;
  }

  _getTemplate() {
    const newElement = document
      .querySelector(this._cardSelector)
      .content.querySelector('.elements__item')
      .cloneNode(true);

    return newElement;
  }

  _handleLikeIcon() {
    this.cardLikeBtn.classList.toggle('elements__description-like_active');
  }

  handleDeleteCard() {
    this.element.remove();
    this.element = null;
  }

  // Метод создания карточки
  generateCard() {
    this.element = this._getTemplate();
    this.elementImage = this.element.querySelector('.elements__image');
    this.elementImage.src = this._link;
    this.elementImage.alt = this._name;

    this.cardLikeBtn = this.element.querySelector('.elements__description-like');
    this.buttonDelete = this.element.querySelector('.elements__delete');

    this.likeCountElement = this.element.querySelector('.elements__description-like-number');
    this.likeCountElement.textContent = this._likes.length;

    const elementTitle = this.element.querySelector('.elements__description-name');
    elementTitle.textContent = this._name;
    this._setEventListeners();

    if (this._ownerId !== this._userId) {
      this.buttonDelete.style.display = 'none';
    }

    const userWhoLikedCard = this._likes.find(user => user._id === this._userId);
    if (userWhoLikedCard) {
      this._handleLikeIcon();
    }
    return this.element;
  }

  // Метод слушателей
  _setEventListeners() {
    // Слушатель лайка
    this.cardLikeBtn.addEventListener('click', () => {
      this._handleLikeClick(this._id);
    });

    // Обработчик открытия попапа просмотра изображения
    this.elementImage.addEventListener('click', () => {
      this._handleCardClick(this._link, this._name);
    });

    // Слушатель кнопки удаления карточки
    this.buttonDelete.addEventListener('click', () => {
      this._handleDeleteClick(this._id);
    });
  }
}
