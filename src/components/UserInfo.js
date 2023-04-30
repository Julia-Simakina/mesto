export default class UserInfo {
  constructor({ nameSelector, aboutSelector }) {
    this._userName = document.querySelector(nameSelector);
    this._userAbout = document.querySelector(aboutSelector);
  }
  // возвращает объект с данными пользователя
  getUserInfo() {
    const profileInfo = {
      name: this._userName.textContent,
      description: this._userAbout.textContent
    };
    return profileInfo;
  }
  // принимает новые данные пользователя и добавляет их на страницу
  setUserInfo({ name, description }) {
    this._userName.textContent = name;
    this._userAbout.textContent = description;
  }
}
