// РЕДАКТИРОВАНИЕ ПРОФИЛЯ
const profileEditPopup = document.querySelector('.popup_type_edit');
const editPopupBtn = document.querySelector('.profile__edit-button');
const closeEditPopupBtn = document.querySelector('#edit-btn');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');

// НОВАЯ КАРТОЧКА
const newCardPopup = document.querySelector('.popup_type_new-card');
const newCardBtn = document.querySelector('.profile__add-button');
const closeNewCardBtn = document.querySelector('#place-btn');

// Находим форму в DOM
const formElement = document.querySelector('.form');
// Находим поля формы в DOM
const nameInput = document.querySelector('.form__input_type_name');
const jobInput = document.querySelector('.form__input_type_job');

const placeNameInput = document.querySelector('.form__input_type_place-name');
const placeUrlInput = document.querySelector('.form__input_type_place-url');
//Добавляю начальные карточки
const initialCards = [
  {
    name: 'Москва',
    link: './image/bolshoi.jpg',
    alt: 'Большой театр в Москве'
  },
  {
    name: 'Мадейра',
    link: './image/madeira.jpg',
    alt: 'Белый лебедь'
  },
  {
    name: 'Одесса',
    link: './image/odessa.jpg',
    alt: 'Советская застройка'
  },

  {
    name: 'Орландо',
    link: './image/orlando.jpg',
    alt: 'Балерины'
  },
  {
    name: 'Лейк-Плэсид ',
    link: './image/lake-placid.jpg',
    alt: 'Озеолв деревне Лейк-Плэсид, США'
  },

  {
    name: 'Сидней',
    link: './image/sydney.jpg',
    alt: 'Возздушные шары'
  }
];

//TEMPLETE
const elementsList = document.querySelector('.elements__list');
const newElement = document.querySelector('.element-template');

//* --------------СОЗДАНИЕ НОВОЙ КАРТОЧКИ--------------- *

const createCard = card => {
  // Копирую содержимое тега template
  const newCard = newElement.content.cloneNode(true);

  //Новая карточка
  const elementsName = newCard.querySelector('.elements__description-name');
  elementsName.textContent = card.name;

  const elementImage = newCard.querySelector('.elements__image');
  elementImage.setAttribute('src', card.link);
  elementImage.setAttribute('alt', card.alt);

  //Обнуление инпутов, после добавления карточки
  placeNameInput.value = '';
  placeUrlInput.value = '';

  //Лайк/не лайк
  const cardLikeBtn = newCard.querySelector('.elements__description-like');
  cardLikeBtn.addEventListener('click', function (evt) {
    const buttonLike = evt.target;
    buttonLike.classList.toggle('elements__description-like_active');
  });

  //Удаление карточки
  const deleteBtn = newCard.querySelector('.elements__delete');
  deleteBtn.addEventListener('click', function () {
    const elementsItem = deleteBtn.closest('.elements__item');
    elementsItem.remove();
  });

  //Модальное окно с полным изображением при клике
  const popupOpenImage = document.querySelector('.popup_type_image');
  const cardImage = newCard.querySelector('.elements__image');
  const popupCloseImage = popupOpenImage.querySelector('.popup__close');
  const popupImage = popupOpenImage.querySelector('.popup__img');
  const popupImageTitle = popupOpenImage.querySelector('.popup__caption');

  function showPopupImage(evt) {
    openPopup(popupOpenImage);
    popupImage.src = evt.target.getAttribute('src');
    popupCloseImage.addEventListener('click', () => closePopup(popupOpenImage));
    popupImageTitle.innerText = elementsName.textContent;
  }
  cardImage.addEventListener('click', showPopupImage);

  return newCard;
};

initialCards.forEach(function (item) {
  const card = createCard(item);
  elementsList.append(card);
});

//* ------------ОТКРЫТИЕ ПОПАПА------------- *
function openPopup(popup) {
  popup.classList.add('popup_opened');
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileSubtitle.textContent;
}
//* ------------ЗАКРЫТИЕ ПОПАПА------------- *
function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function handleFormSubmit(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  // Так мы можем определить свою логику отправки.

  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;
  closePopup(profileEditPopup);
}

editPopupBtn.addEventListener('click', () => openPopup(profileEditPopup));
closeEditPopupBtn.addEventListener('click', () => closePopup(profileEditPopup));

formElement.addEventListener('submit', handleFormSubmit);

newCardBtn.addEventListener('click', () => openPopup(newCardPopup));
closeNewCardBtn.addEventListener('click', () => closePopup(newCardPopup));

const newCardForm = document.querySelector('.popup__form-new-card');
newCardForm.addEventListener('submit', handleCardFormSubmit);

function handleCardFormSubmit(evt) {
  evt.preventDefault();
  const userNewCard = createCard({
    name: placeNameInput.value,
    link: placeUrlInput.value
  });
  elementsList.prepend(userNewCard);
  closePopup(newCardPopup);
}
