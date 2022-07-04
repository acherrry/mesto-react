import React from "react";

import "../index.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);

  const [selectedCard, setSelectedCard] = React.useState(null);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(cardItem) {
    setSelectedCard(cardItem);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(null);
  }

  return (
    <div className="body">
      <div className="page">
        <Header />

        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
        />

        <Footer />

        <PopupWithForm
          name="edit-profile"
          title="Редактировать профиль"
          ariaLabelButtonText="Сохранить"
          buttonText="Сохранить"
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
        >
          <label className="popup__field">
            <input
              required
              className="popup__input"
              type="text"
              id="user-name"
              name="user-name"
              minLength="2"
              maxLength="40"
              placeholder="Имя"
            />
            <span className="popup__error" id="user-name-error"></span>
          </label>
          <label className="popup__field">
            <input
              required
              className="popup__input"
              type="text"
              id="user-info"
              name="user-info"
              minLength="2"
              maxLength="200"
              placeholder="О себе"
            />
            <span className="popup__error" id="user-info-error"></span>
          </label>
        </PopupWithForm>

        <PopupWithForm
          name="add-new-item"
          title="Новое место"
          ariaLabelButtonText="Создать"
          buttonText="Создать"
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
        >
          <label className="popup__field">
            <input
              required
              className="popup__input"
              type="text"
              id="place-name"
              name="place-name"
              minLength="2"
              maxLength="30"
              placeholder="Название"
            />
            <span className="popup__error" id="place-name-error"></span>
          </label>
          <label className="popup__field">
            <input
              required
              className="popup__input"
              type="url"
              id="place-link"
              name="place-link"
              placeholder="Ссылка на картинку"
            />
            <span className="popup__error" id="place-link-error"></span>
          </label>
        </PopupWithForm>

        <PopupWithForm
          name="update-avatar-form"
          title="Обновить аватар"
          ariaLabelButtonText="Сохранить"
          buttonText="Сохранить"
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
        >
          <label className="popup__field">
            <input
              required
              className="popup__input"
              type="url"
              id="user-photo-link"
              name="user-photo-link"
              placeholder="Ссылка на новый аватар"
            />
            <span className="popup__error" id="user-photo-link-error"></span>
          </label>
        </PopupWithForm>

        <PopupWithForm
          name="deletion-confirmation"
          title="Вы уверены?"
          ariaLabelButtonText="Да"
          buttonText="Да"
        ></PopupWithForm>

        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      </div>
    </div>
  );
}

export default App;