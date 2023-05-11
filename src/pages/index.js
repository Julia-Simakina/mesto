import './index.css';
import { initialCards } from '../utils/initialCards.js';
import {
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
} from '../utils/constants.js';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import { api } from '../components/Api.js';

api.getProfile().then(res => {
  console.log('ответ', res);
  userInfo.setUserInfo({
    name: res.name,
    description: res.about
  });
});

api.getInitialCards().then(cards => {
  cards.forEach(data => {
    const card = createCard(data);
    cardsList.addItem(card);
  });
});
function editProfileFormInputs({ name, description }) {
  nameInput.value = name;
  jobInput.value = description;
}

//* --------------СОЗДАНИЕ НОВОЙ КАРТОЧКИ--------------- *
const createCard = item => {
  const card = new Card(
    {
      item: item,
      handleCardClick: (title, link) => {
        viewImagePopup.open(title, link);
      }
    },
    '.element-template'
  );
  const cardElement = card.generateCard();
  return cardElement;
};

//Информация о пользователе
const userInfo = new UserInfo({
  nameSelector: '.profile__title',
  aboutSelector: '.profile__subtitle'
});

//Попап редактирования профиля
const popupEditProfile = new PopupWithForm({
  popupSelector: '.popup_type_edit',
  submitForm: data => {
    console.log(data);
    userInfo.setUserInfo({
      name: data.name,
      description: data.job
    });
    api.editProfile(data.name, data.job);
    popupEditProfile.close();
  }
});
popupEditProfile.setEventListeners();

profileEditPopupBtn.addEventListener('click', () => {
  const info = userInfo.getUserInfo();
  editProfileFormInputs({
    name: info.name,
    description: info.description
  });

  popupEditProfile.open();
});

// Создание попапа добавления новой карточки
const popupAddCard = new PopupWithForm({
  popupSelector: '.popup_type_new-card',
  submitForm: data => {
    api.addCard(data.title, data.link);
    cardsList.addItem(createCard(data));
    popupAddCard.close();
  }
});
// добавляем слушатели этому попапу:
popupAddCard.setEventListeners();

addCardPopupBtn.addEventListener('click', () => {
  //Сделать кнопку снова неактивной и очистить инпуты
  cardFormValidator.clearInputError();
  popupAddCard.open();
});

//Создание начальных карточек
const cardsList = new Section(
  {
    items: [],
    renderer: item => {
      cardsList.addItem(createCard(item));
    }
  },
  '.elements__list'
);
cardsList.renderItems();

const newCardFormPopup = document.querySelector('.popup__form-new-card');

const viewImagePopup = new PopupWithImage('.popup_type_image');
viewImagePopup.setEventListeners();

// валидация формы редактирования профиля
const profileFormValidator = new FormValidator(config, formEditProfile);
profileFormValidator.enableValidation();

// валидация формы добавления новой карточки
const cardFormValidator = new FormValidator(config, newCardFormPopup);
cardFormValidator.enableValidation();
