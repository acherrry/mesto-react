import React from 'react';

function Card(props) {
  function handleClick() {
    return(
      props.onCardClick(props.card)
    );
  } 

  return(
    <li className="place">
    <a className="place__img" style={{ backgroundImage: `url(${props.card.link})` }} onClick={handleClick}></a>
    <div className="place__info">
      <h2 className="place__name">{props.card.name}</h2>
      <div className="place__like">
        <button className="place__like-button" type="button" aria-label="Выразить оценку - нравится"></button>
        <p className="place__number-of-likes">{props.card.likes.length}</p>
      </div>
    </div>
    <button className="place__delete-button" type="button" aria-label="Удалить"></button>
  </li>
  );
}

export default Card;