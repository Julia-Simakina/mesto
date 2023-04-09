import { initialCards } from './initialCards.js';
import Card from '../scripts/Card.js';
import { FormValidator } from './FormValidator.js';

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
const newCardSubmitBtn = document.querySelector('.form__save_new-card');

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

const elementsContainer = document.querySelector('.elements__list');

const config = {
  formSelector: '.form',
  inputSelector: '.form__input',
  errorClass: '.popup__input-error_type_',
  errorSelector: 'popup__input-error_type',
  submitButtonSelector: '.form__save',
  validSubmitButtonClass: 'form__save_valid'
};

//* --------------СОЗДАНИЕ НОВОЙ КАРТОЧКИ--------------- *

// const createCard = card => {
//   // Копирую содержимое тега template
//   const newCard = newElement.cloneNode(true);

//   //Новая карточка
//   const elementsName = newCard.querySelector('.elements__description-name');
//   elementsName.textContent = card.name;

//   const elementImage = newCard.querySelector('.elements__image');
//   elementImage.setAttribute('src', card.link);
//   elementImage.setAttribute('alt', card.name);

//   //Лайк/не лайк
//   const cardLikeBtn = newCard.querySelector('.elements__description-like');
//   cardLikeBtn.addEventListener('click', () => {
//     cardLikeBtn.classList.toggle('elements__description-like_active');
//   });

//   //Удаление карточки
//   const buttonDelete = newCard.querySelector('.elements__delete');
//   buttonDelete.addEventListener('click', function () {
//     const elementsItem = buttonDelete.closest('.elements__item');
//     elementsItem.remove();
//   });

//   elementImage.addEventListener('click', () => showPopupImage(card, elementsName.textContent));

//   return newCard;
// };

// initialCards.forEach(function (item) {
//   const card = createCard(item);
//   elementsContainer.append(card);
// });
// //Передаю фото и название города в открытый попап
// function showPopupImage(item, name) {
//   openPopup(popupOpenImage);
//   popupImage.src = item.link;
//   popupImage.alt = name;
//   popupImageTitle.innerText = name;
// }

//* ------------ОТКРЫТИЕ ПОПАПА------------- *
function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', handleKeyUp);
}
//* ------------ЗАКРЫТИЕ ПОПАПА------------- *
function closePopup(popup) {
  if (popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keyup', handleKeyUp);
  }
}
//* ------Закрытие попапов на крестик----- *
const buttonCloseList = document.querySelectorAll('.popup__close');
buttonCloseList.forEach(btn => {
  const popup = btn.closest('.popup');
  btn.addEventListener('click', () => closePopup(popup));
});

//Открытие попапа редактирования профиля
function openPropfilePopup() {
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileSubtitle.textContent;
  openPopup(profileEditPopup);
}

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function handleProfileEditFormSubmit(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  // Так мы можем определить свою логику отправки.

  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;
  closePopup(profileEditPopup);
}

//Закрытие попапа на esk
function handleKeyUp(evt) {
  if (evt.code !== 'Escape') return;
  closePopup(document.querySelector('.popup_opened'));
}

//Закрытие на оверлей
function closePopupByOverlay() {
  const popupList = Array.from(document.querySelectorAll('.popup'));

  popupList.forEach(popup => {
    popup.addEventListener('mousedown', evt => {
      if (evt.target.classList.contains('popup')) {
        closePopup(popup);
      }
    });
  });
}
closePopupByOverlay();

//Передаю фото и название города в открытый попап
function showPopupImage(valueLink, valueName) {
  openPopup(popupOpenImage);
  popupImage.src = valueLink;
  popupImage.alt = valueName;
  popupImageTitle.innerText = valueName;
}

const createCard = item => {
  const cardClass = new Card(item, '.element-template', showPopupImage);
  return cardClass.generateCard();
};

initialCards.forEach(item => {
  //выгружаем каждый элемент масива
  elementsContainer.append(createCard(item));
});
//__________________________

profileEditPopupBtn.addEventListener('click', () => openPropfilePopup());

formEditProfile.addEventListener('submit', handleProfileEditFormSubmit);

newCardBtn.addEventListener('click', () => openPopup(newCardPopup));

const newCardFormPopup = document.querySelector('.popup__form-new-card');
newCardFormPopup.addEventListener('submit', handleCardFormSubmit);

function handleCardFormSubmit(evt) {
  evt.preventDefault();
  const userNewCard = createCard({
    name: placeNameInput.value,
    link: placeUrlInput.value,
    alt: placeNameInput.value
  });
  elementsContainer.prepend(userNewCard);

  //Обнуление инпутов, после добавления карточки
  newCardFormPopup.reset();

  //Сделать кнопку снова неактивной
  newCardSubmitBtn.setAttribute('disabled', true);
  closePopup(newCardPopup);
}

// валидация формы редактирования профиля
const profileFormValidator = new FormValidator(config, formEditProfile);
profileFormValidator.enableValidation();

// валидация формы добавления новой карточки
const cardFormValidator = new FormValidator(config, newCardFormPopup);
cardFormValidator.enableValidation();
