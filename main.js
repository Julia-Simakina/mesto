(()=>{"use strict";var e="",t=[{title:"Москва",link:e+"42b20a600f8d717eef83.jpg"},{title:"Мадейра",link:e+"be17ebea58bd87580b78.jpg"},{title:"Одесса",link:e+"c6726e66d3339462cb56.jpg"},{title:"Орландо",link:e+"44add78ec85973b92b95.jpg"},{title:"Лейк-Плэсид ",link:e+"cfda0189285275707676.jpg"},{title:"Сидней",link:e+"56318e68a8e3a6f03f75.jpg"}],n=document.querySelector(".profile__edit-button"),r=(document.querySelector(".popup_type_new-card"),document.querySelector(".profile__add-button")),o=document.querySelector(".popup_type_image"),i=(o.querySelector(".popup__img"),o.querySelector(".popup__caption"),document.querySelector(".popup__form")),u=document.querySelector(".form__input_type_name"),c=document.querySelector(".form__input_type_job"),l={formSelector:".form",inputSelector:".form__input",errorClass:".popup__input-error_type_",errorSelector:"popup__input-error_type",submitButtonSelector:".form__save",validSubmitButtonClass:"form__save_valid"};function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==a(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==a(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===a(o)?o:String(o)),r)}var o}var p=function(){function e(t,n){var r=t.item,o=t.handleCardClick;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._link=r.link,this._name=r.title,this._cardSelector=n,this._handleCardClick=o}var t,n;return t=e,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardSelector).content.querySelector(".elements__item").cloneNode(!0)}},{key:"_handleLikeCard",value:function(){this.cardLikeBtn.classList.toggle("elements__description-like_active")}},{key:"_handleDeleteCard",value:function(){this.element.remove(),this.element=null}},{key:"generateCard",value:function(){return this.element=this._getTemplate(),this.elementImage=this.element.querySelector(".elements__image"),this.elementImage.src=this._link,this.elementImage.alt=this._name,this.cardLikeBtn=this.element.querySelector(".elements__description-like"),this.buttonDelete=this.element.querySelector(".elements__delete"),this.element.querySelector(".elements__description-name").textContent=this._name,this._setEventListeners(),this.element}},{key:"_setEventListeners",value:function(){var e=this;this.cardLikeBtn.addEventListener("click",(function(){e._handleLikeCard()})),this.elementImage.addEventListener("click",(function(){e._handleCardClick(e._link,e._name)})),this.buttonDelete.addEventListener("click",(function(){e._handleDeleteCard()}))}}])&&s(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function f(e){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(e)}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==f(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==f(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===f(o)?o:String(o)),r)}var o}var m=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._config=t,this._formElement=n,this._inputList=this._formElement.querySelectorAll(this._config.inputSelector),this._submitButton=this._formElement.querySelector(this._config.submitButtonSelector)}var t,n;return t=e,(n=[{key:"_showInputError",value:function(e,t,n){var r=this._formElement.querySelector("".concat(this._config.errorClass).concat(e.name));e.classList.add(this._config.errorSelector),r.textContent=t,r.classList.add(n)}},{key:"_hideInputError",value:function(e,t){var n=this._formElement.querySelector("".concat(this._config.errorClass).concat(e.name));e.classList.remove(this._config.errorSelector),n.classList.remove(t),n.textContent=""}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e,e.validationMessage)}},{key:"_hasInvaalidInput",value:function(){return Array.from(this._inputList).some((function(e){return!e.validity.valid}))}},{key:"_toggleButtonState",value:function(){this._hasInvaalidInput()?this._submitButton.setAttribute("disabled",!0):this._submitButton.removeAttribute("disabled")}},{key:"_setEventListeners",value:function(){var e=this;this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e._toggleButtonState()}))}))}},{key:"enableValidation",value:function(){this._setEventListeners()}},{key:"clearInputError",value:function(){var e=this;this._inputList.forEach((function(t){e._hideInputError(t)})),this._toggleButtonState()}}])&&y(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function v(e){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},v(e)}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==v(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==v(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===v(o)?o:String(o)),r)}var o}var d=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._closeButton=this._popup.querySelector(".popup__close"),this._closeEsk=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keyup",this._closeEsk)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._closeEsk)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._closeButton.addEventListener("click",(function(){e.close()})),this._popup.addEventListener("mousedown",(function(t){t.target.classList.contains("popup")&&e.close()}))}}])&&b(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function _(e){return _="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_(e)}function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==_(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==_(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===_(o)?o:String(o)),r)}var o}function S(){return S="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=w(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},S.apply(this,arguments)}function g(e,t){return g=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},g(e,t)}function w(e){return w=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},w(e)}var k=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&g(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=w(r);if(o){var n=w(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===_(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e){var t,n=e.popupSelector,r=e.submitForm;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,n))._submitForm=r,t._popupForm=t._popup.querySelector(".popup__form"),t._inputList=t._popupForm.querySelectorAll(".form__input"),t}return t=u,(n=[{key:"_getInputValues",value:function(){var e=this;return this._inputValues={},this._inputList.forEach((function(t){e._inputValues[t.id]=t.value})),this._inputValues}},{key:"setEventListeners",value:function(){var e=this;S(w(u.prototype),"setEventListeners",this).call(this),this._popupForm.addEventListener("submit",(function(t){t.preventDefault(),e._submitForm(e._getInputValues()),e.close()}))}},{key:"close",value:function(){S(w(u.prototype),"close",this).call(this),this._popupForm.reset()}}])&&h(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(d);function E(e){return E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},E(e)}function j(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==E(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==E(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===E(o)?o:String(o)),r)}var o}function O(){return O="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=L(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},O.apply(this,arguments)}function P(e,t){return P=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},P(e,t)}function L(e){return L=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},L(e)}var C=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&P(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=L(r);if(o){var n=L(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===E(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._popupImg=t._popup.querySelector(".popup__img"),t._popupTitle=t._popup.querySelector(".popup__caption"),t}return t=u,(n=[{key:"open",value:function(e,t){this._popupImg.src=e,this._popupImg.alt=t,this._popupTitle.innerText=t,O(L(u.prototype),"open",this).call(this)}}])&&j(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(d);function I(e){return I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},I(e)}function q(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==I(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==I(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===I(o)?o:String(o)),r)}var o}var T=function(){function e(t,n){var r=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderedItems=r,this._renderer=o,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"renderItems",value:function(){var e=this;this._renderedItems.reverse().forEach((function(t){return e._renderer(t)}))}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&q(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function B(e){return B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},B(e)}function R(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==B(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==B(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===B(o)?o:String(o)),r)}var o}var x=function(e){return new p({item:e,handleCardClick:function(e,t){U.open(e,t)}},".element-template").generateCard()},V=new(function(){function e(t){var n=t.nameSelector,r=t.aboutSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._userName=document.querySelector(n),this._userAbout=document.querySelector(r)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._userName.textContent,description:this._userAbout.textContent}}},{key:"setUserInfo",value:function(e){var t=e.name,n=e.description;this._userName.textContent=t,this._userAbout.textContent=n}}])&&R(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}())({nameSelector:".profile__title",aboutSelector:".profile__subtitle"}),D=new k({popupSelector:".popup_type_edit",submitForm:function(e){console.log(e),V.setUserInfo({name:e.name,description:e.job}),D.close()}});D.setEventListeners(),n.addEventListener("click",(function(){var e,t,n,r=V.getUserInfo();t=(e={name:r.name,description:r.description}).name,n=e.description,u.value=t,c.value=n,D.open()}));var F=new k({popupSelector:".popup_type_new-card",submitForm:function(e){console.log(e),A.addItem(x(e)),F.close()}});F.setEventListeners(),r.addEventListener("click",(function(){M.clearInputError(),F.open()}));var A=new T({items:t,renderer:function(e){A.addItem(x(e))}},".elements__list");A.renderItems();var N=document.querySelector(".popup__form-new-card"),U=new C(".popup_type_image");U.setEventListeners(),new m(l,i).enableValidation();var M=new m(l,N);M.enableValidation()})();