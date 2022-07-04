import React from "react";

function Card({ card, onCardClick }) {
  function handleClick() {
    return onCardClick(card);
  }

  return (
    <div className="place">
      <a
        className="place__img"
        style={{ backgroundImage: `url(${card.link})` }}
        onClick={handleClick}
      ></a>
      <div className="place__info">
        <h2 className="place__name">{card.name}</h2>
        <div className="place__like">
          <button
            className="place__like-button"
            type="button"
            aria-label="Выразить оценку - нравится"
          ></button>
          <p className="place__number-of-likes">{card.likes.length}</p>
        </div>
      </div>
      <button
        className="place__delete-button"
        type="button"
        aria-label="Удалить"
      ></button>
    </div>
  );
}

export default Card;
