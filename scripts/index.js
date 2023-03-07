// РЕДАКТИРОВАНИЕ ПРОФИЛЯ
const profileEditPopup = document.querySelector('.popup_type_edit');
const profileEditPopupBtn = document.querySelector('.profile__edit-button');
const profileEditClosePopupBtn = document.querySelector('#edit-btn');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');

// НОВАЯ КАРТОЧКА
const newCardPopup = document.querySelector('.popup_type_new-card');
const newCardBtn = document.querySelector('.profile__add-button');
const newCardCloseBtn = document.querySelector('#place-btn');

//Модальное окно с полным изображением при клике
const popupOpenImage = document.querySelector('.popup_type_image');
const popupImage = popupOpenImage.querySelector('.popup__img');
const popupImageTitle = popupOpenImage.querySelector('.popup__caption');

// Находим форму редактирования профиля в DOM
const formEditProfile = profileEditPopup.querySelector('.popup__form');
// Находим поля формы редактирования профиля в DOM
const nameInput = document.querySelector('.form__input_type_name');
const jobInput = document.querySelector('.form__input_type_job');

const placeNameInput = document.querySelector('.form__input_type_place-name');
const placeUrlInput = document.querySelector('.form__input_type_place-url');

//* ------Закрытие попапов на крестик----- *
const buttonCloseList = document.querySelectorAll('.popup__close');
buttonCloseList.forEach(btn => {
  const popup = btn.closest('.popup');
  btn.addEventListener('click', () => closePopup(popup));
});

//Добавляю начальные карточки
//TEMPLETE
const elementsContainer = document.querySelector('.elements__list');
const newElement = document
  .querySelector('.element-template')
  .content.querySelector('.elements__item');

//* --------------СОЗДАНИЕ НОВОЙ КАРТОЧКИ--------------- *

const createCard = card => {
  // Копирую содержимое тега template
  const newCard = newElement.cloneNode(true);

  //Новая карточка
  const elementsName = newCard.querySelector('.elements__description-name');
  elementsName.textContent = card.name;

  const elementImage = newCard.querySelector('.elements__image');
  elementImage.setAttribute('src', card.link);
  elementImage.setAttribute('alt', card.alt);

  //Лайк/не лайк
  const cardLikeBtn = newCard.querySelector('.elements__description-like');
  cardLikeBtn.addEventListener('click', () => {
    cardLikeBtn.classList.toggle('elements__description-like_active');
  });

  //Удаление карточки
  const buttonDelete = newCard.querySelector('.elements__delete');
  buttonDelete.addEventListener('click', function () {
    const elementsItem = buttonDelete.closest('.elements__item');
    elementsItem.remove();
  });

  function showPopupImage() {
    openPopup(popupOpenImage);
    popupImage.src = card.link;
    popupImageTitle.innerText = elementsName.textContent;
  }
  elementImage.addEventListener('click', showPopupImage);

  return newCard;
};

initialCards.forEach(function (item) {
  const card = createCard(item);
  elementsContainer.append(card);
});

//* ------------ОТКРЫТИЕ ПОПАПА------------- *
function openPopup(popup) {
  popup.classList.add('popup_opened');
}
//* ------------ЗАКРЫТИЕ ПОПАПА------------- *
function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

//Открытие попапа редактирования профиля
function openPropfilePopup() {
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileSubtitle.textContent;
  openPopup(profileEditPopup);
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

profileEditPopupBtn.addEventListener('click', () => openPropfilePopup());

formEditProfile.addEventListener('submit', handleFormSubmit);

newCardBtn.addEventListener('click', () => openPopup(newCardPopup));

const newCardForm = document.querySelector('.popup__form-new-card');
newCardForm.addEventListener('submit', handleCardFormSubmit);

function handleCardFormSubmit(evt) {
  evt.preventDefault();
  const userNewCard = createCard({
    name: placeNameInput.value,
    link: placeUrlInput.value
  });
  elementsContainer.prepend(userNewCard);

  //Обнуление инпутов, после добавления карточки
  placeNameInput.value = '';
  placeUrlInput.value = '';

  closePopup(newCardPopup);
}
