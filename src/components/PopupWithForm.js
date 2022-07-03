import React from 'react';

function PopupWithForm(props) {
  return(
    <div className={props.isOpen ? `popup popup_type_${props.name} popup_is-opened` : `popup popup_type_${props.name}`}>
      <div className="popup__content">
        <button className="popup__close" type="button" onClick={props.onClose}></button>
        <h2 className="popup__title">{props.title}</h2>
        <form className="popup__form" name={props.name} noValidate>
          {props.children}
          <button className="popup__save" type="submit" aria-label={props.ariaLabelButtonText}>{props.buttonText}</button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;