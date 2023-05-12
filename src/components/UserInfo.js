export default class UserInfo {
  constructor({ nameSelector, aboutSelector, avatarSelector }) {
    this._userName = document.querySelector(nameSelector);
    this._userAbout = document.querySelector(aboutSelector);
    this._avatar = document.querySelector(avatarSelector);
  }
  // возвращает объект с данными пользователя
  getUserInfo() {
    const profileInfo = {
      name: this._userName.textContent,
      description: this._userAbout.textContent
      // avatar: this._avatar.src
    };
    return profileInfo;
  }
  // принимает новые данные пользователя и добавляет их на страницу
  setUserInfo({ name, description, avatar }) {
    this._userName.textContent = name;
    this._userAbout.textContent = description;
    this._avatar.src = avatar;
  }
}
