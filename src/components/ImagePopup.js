import React from 'react';

function ImagePopup(props) {
  return (
    <div className={JSON.stringify(props.card) === '{}' ? "popup popup_review-place" : "popup popup_review-place popup_is-opened"}>
      <div className="popup__content popup__content_place">
        <button className="popup__close" type="button" onClick={props.onClose}></button>
        <img className="popup__img" alt={props.card.carditem ? props.card.carditem.name : ""} src={props.card.carditem ? props.card.carditem.link : "/"}/>
        <p className="popup__text"></p>
      </div>
    </div>
  );
}

export default ImagePopup;