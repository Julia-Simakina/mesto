class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  getProfile() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers
    })
      .then(res => (res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`)))
      .catch(console.log);
  }
  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
      headers: this._headers
    })
      .then(res => (res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`)))
      .catch(console.log);
  }

  editProfile(name, about) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({ name, about })
    })
      .then(res => (res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`)))
      .catch(console.log);
  }

  addCard(name, link) {
    return fetch(`${this._baseUrl}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({ name, link })
    })
      .then(res => (res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`)))
      .catch(console.log);
  }
}

export const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-65',
  headers: {
    authorization: '88a0905a-02f1-4cce-a559-1e982b5f7199',
    'Content-Type': 'application/json'
  }
});
