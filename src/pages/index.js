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
  config,
  popupEditAvatar,
  formEditAvatar,
  buttonEditAvatar,
  avatar
} from '../utils/constants.js';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import { api } from '../components/Api.js';
import PopupWithConfirm from '../components/PopupWithConfirm.js';

let userId;
Promise.all([api.getInitialCards(), api.getProfile()])
  .then(([cards, userData]) => {
    userInfo.setUser({
      name: userData.name,
      description: userData.about,
      avatar: userData.avatar
    });
    userId = userData._id;
    cardsList.renderItems(cards);
  })
  .catch(err => {
    console.log(`Ошибка: ${err}`);
  });

// api.getProfile().then(res => {
//   userInfo.setUserInfo({
//     name: res.name,
//     description: res.about
//   });
//   userId = res._id;
// });

// api.getInitialCards().then(cards => {
//   cards.forEach(data => {
//     const card = createCard(data);
//     cardsList.addItem(card);
//   });
// });
function editProfileFormInputs({ name, description }) {
  nameInput.value = name;
  jobInput.value = description;
}

//* --------------СОЗДАНИЕ НОВОЙ КАРТОЧКИ--------------- *
const createCard = item => {
  const card = new Card(
    {
      item: item,
      handleCardClick: (name, link) => {
        viewImagePopup.open(name, link);
      },
      handleDeleteClick: id => {
        popupDeleteConfirm.open();
        popupDeleteConfirm.changeSubmitHandle(() => {
          api.deleteCard(id).then(() => {
            popupDeleteConfirm.close();
            card.handleDeleteCard();
          });
        });
      },
      userId: userId,
      handleLikeClick: id => {
        if (card.isLiked()) {
          api.deleteLike(id).then(res => {
            card.setLikes(res.likes);
          });
        } else {
          api.addLike(id).then(res => {
            card.setLikes(res.likes);
          });
        }
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
  aboutSelector: '.profile__subtitle',
  avatarSelector: '.profile__avatar'
});

//Попап редактирования профиля
const popupEditProfile = new PopupWithForm({
  popupSelector: '.popup_type_edit',
  submitForm: data => {
    popupEditProfile.loadingButtonText(true);
    api
      .editProfile(data.username, data.job)
      .then(() => {
        userInfo.setUserInfo({
          name: data.username,
          description: data.job
        });
        popupEditProfile.close();
      })
      .catch(err => {
        console.log(`Ошибка ${err}`);
      })
      .finally(() => {
        popupEditProfile.loadingButtonText(false);
      });
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

//Попап "Вы уверены?" при удалении карточки
const popupDeleteConfirm = new PopupWithConfirm({
  popupSelector: '.popup_type_delete-card'
});

popupDeleteConfirm.setEventListeners();

// Создание попапа редактирования аватара пользователя
const editAvatarPopup = new PopupWithForm({
  popupSelector: '.popup_type_avatar',
  submitForm: data => {
    editAvatarPopup.loadingButtonText(true);
    api
      .editAvatar(data)
      .then(() => {
        userInfo.setUserAvatar(data.avatar);
        // avatar.src = data.avatar;
        editAvatarPopup.close();
      })
      .catch(err => {
        console.log(`Ошибка: ${err}`);
      })
      .finally(() => {
        editAvatarPopup.loadingButtonText(false);
      });
  }
});
editAvatarPopup.setEventListeners();

// Обработчик кнопки Edit аватара пользователя
buttonEditAvatar.addEventListener('click', () => {
  formEditAvatarValidator.clearInputError();
  editAvatarPopup.open();
});

// Создание попапа добавления новой карточки
const popupAddCard = new PopupWithForm({
  popupSelector: '.popup_type_new-card',
  submitForm: data => {
    popupAddCard.loadingButtonText(true);
    api
      .addCard(data.name, data.link)
      .then(formData => {
        cardsList.addItem(createCard(formData));
        popupAddCard.close();
      })
      .catch(err => {
        console.log(`Ошибка: ${err}`);
      })
      .finally(() => {
        popupAddCard.loadingButtonText(false);
      });
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
    renderer: item => {
      cardsList.addItem(createCard(item));
    }
  },
  '.elements__list'
);
// cardsList.renderItems();

const newCardFormPopup = document.querySelector('.popup__form-new-card');

const viewImagePopup = new PopupWithImage('.popup_type_image');
viewImagePopup.setEventListeners();

// валидация формы редактирования профиля
const profileFormValidator = new FormValidator(config, formEditProfile);
profileFormValidator.enableValidation();

// валидация формы добавления новой карточки
const cardFormValidator = new FormValidator(config, newCardFormPopup);
cardFormValidator.enableValidation();
// Валидация формы редактирования аватара пользователя
const formEditAvatarValidator = new FormValidator(config, formEditAvatar);
formEditAvatarValidator.enableValidation();
