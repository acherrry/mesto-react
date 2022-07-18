import React from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  const currentUser = React.useContext(CurrentUserContext);
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeInfo(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateUser({
      name,
      about: description,
    });
  }

  return (
    <PopupWithForm
      name="edit-profile"
      title="Редактировать профиль"
      ariaLabelButtonText="Сохранить"
      buttonText="Сохранить"
      isOpen={isOpen}
      onClose={onClose}
      onUpdateUser={handleSubmit}
      onSubmit={handleSubmit}
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
          value={name}
          onChange={handleChangeName}
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
          value={description}
          onChange={handleChangeInfo}
        />
        <span className="popup__error" id="user-info-error"></span>
      </label>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
