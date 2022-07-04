import React from "react";

import { api } from "../utils/Api";
import Card from "./Card";

function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick }) {
  const [userName, setUserName] = React.useState("");
  const [userDescription, setUserDescription] = React.useState("");
  const [userAvatar, setUserAvatar] = React.useState("");

  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getUserInfo(), api.getCards()])
      .then(([result, cardsArray]) => {
        setUserName(result.name);
        setUserDescription(result.about);
        setUserAvatar(result.avatar);
        setCards(cardsArray);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const cardsElements = cards.map((item) => {
    return (
      <li key={item._id}>
        <Card card={item} onCardClick={onCardClick} />
      </li>
    );
  });

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__info">
          <a
            className="profile__avatar"
            onClick={onEditAvatar}
            style={{ backgroundImage: `url(${userAvatar})` }}
          ></a>
          <div className="profile__personal-data">
            <h1 className="profile__name">{userName}</h1>
            <button
              className="profile__edit-button"
              type="button"
              aria-label="Редактировать"
              onClick={onEditProfile}
            ></button>
            <p className="profile__status">{userDescription}</p>
          </div>
        </div>
        <button
          className="profile__add-button"
          type="button"
          aria-label="Добавить"
          onClick={onAddPlace}
        ></button>
      </section>

      <section className="places">
        <ul className="places__list">{cardsElements}</ul>
      </section>
    </main>
  );
}

export default Main;
