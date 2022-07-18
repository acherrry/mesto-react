import React from "react";

function PopupWithForm({
  isOpen,
  onClose,
  children,
  name,
  title,
  ariaLabelButtonText,
  buttonText,
  onSubmit,
}) {
  return (
    <div
      className={
        isOpen
          ? `popup popup_type_${name} popup_is-opened`
          : `popup popup_type_${name}`
      }
    >
      <div className="popup__content">
        <button
          className="popup__close"
          type="button"
          onClick={onClose}
        ></button>
        <h2 className="popup__title">{title}</h2>
        <form
          className="popup__form"
          onSubmit={onSubmit}
          name={name}
          noValidate
        >
          {children}
          <button
            className="popup__save"
            type="submit"
            aria-label={ariaLabelButtonText}
          >
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
