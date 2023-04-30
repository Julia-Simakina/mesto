// РЕДАКТИРОВАНИЕ ПРОФИЛЯ
const profileEditPopupBtn = document.querySelector('.profile__edit-button');

// НОВАЯ КАРТОЧКА
const newCardPopup = document.querySelector('.popup_type_new-card');
const addCardPopupBtn = document.querySelector('.profile__add-button');

//Модальное окно с полным изображением при клике
const popupOpenImage = document.querySelector('.popup_type_image');
const popupImage = popupOpenImage.querySelector('.popup__img');
const popupImageTitle = popupOpenImage.querySelector('.popup__caption');

// Находим форму редактирования профиля в DOM
const formEditProfile = document.querySelector('.popup__form');
// Находим поля формы редактирования профиля в DOM
const nameInput = document.querySelector('.form__input_type_name');
const jobInput = document.querySelector('.form__input_type_job');

const config = {
  formSelector: '.form',
  inputSelector: '.form__input',
  errorClass: '.popup__input-error_type_',
  errorSelector: 'popup__input-error_type',
  submitButtonSelector: '.form__save',
  validSubmitButtonClass: 'form__save_valid'
};

export {
  profileEditPopupBtn,
  newCardPopup,
  addCardPopupBtn,
  popupOpenImage,
  popupImage,
  popupImageTitle,
  formEditProfile,
  nameInput,
  jobInput,
  config
};
