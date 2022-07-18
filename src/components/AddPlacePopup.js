import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
  const [place, setPlace] = React.useState("");
  const [urlPlace, setUrlPlace] = React.useState("");

  React.useEffect(() => {
    setPlace("");
    setUrlPlace("");
  }, [onClose]);

  function handleChangePlace(e) {
    setPlace(e.target.value);
  }

  function handleChangeUrlPlace(e) {
    setUrlPlace(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    onAddPlace({
      name: place,
      link: urlPlace,
    });
  }

  return (
    <PopupWithForm
      name="add-new-item"
      title="Новое место"
      ariaLabelButtonText="Создать"
      buttonText="Создать"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
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
          value={place}
          onChange={handleChangePlace}
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
          value={urlPlace}
          onChange={handleChangeUrlPlace}
        />
        <span className="popup__error" id="place-link-error"></span>
      </label>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
