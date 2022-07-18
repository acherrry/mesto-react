import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const avatarInputRef = React.useRef();

  React.useEffect(() => {
    avatarInputRef.current.value = "";
  }, [onClose]);

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateAvatar({
      avatar: avatarInputRef.current.value,
    });
  }

  return (
    <PopupWithForm
      name="update-avatar-form"
      title="Обновить аватар"
      ariaLabelButtonText="Сохранить"
      buttonText="Сохранить"
      isOpen={isOpen}
      onClose={onClose}
      onUpdateAvatar={handleSubmit}
      onSubmit={handleSubmit}
    >
      <label className="popup__field">
        <input
          required
          className="popup__input"
          type="url"
          id="user-photo-link"
          name="user-photo-link"
          placeholder="Ссылка на новый аватар"
          ref={avatarInputRef}
        />
        <span className="popup__error" id="user-photo-link-error"></span>
      </label>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
