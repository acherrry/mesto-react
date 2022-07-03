import React from 'react';

import { api } from '../utils/Api';
import Card from './Card';

function Main(props) {
  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');

  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getUserInfo(), api.getCards()])
        .then(([result, cardsArray]) => {
          setUserName(result.name);
          setUserDescription(result.about);
          setUserAvatar(result.avatar);
          setCards(cardsArray);
        })
        .catch(err => {
          console.log(err);
        })
  }, []);

  return (
    <main className="content">
    <section className="profile">
      <div className="profile__info">
        <a className="profile__avatar" onClick={props.onEditAvatar} style={{ backgroundImage: `url(${userAvatar})` }}>
        </a>
        <div className="profile__personal-data">
          <h1 className="profile__name">{userName}</h1>
          <button className="profile__edit-button" type="button" aria-label="Редактировать" onClick={props.onEditProfile}></button>
          <p className="profile__status">{userDescription}</p>
        </div>
      </div>
      <button className="profile__add-button" type="button" aria-label="Добавить" onClick={props.onAddPlace}></button>
    </section>

    <section className="places">
      <ul className="places__list">
        <>
          { cards.map((item) => {
            return(
              <Card card={item} key={item._id} onCardClick={props.onCardClick}/>
            )
          })
          }
        </>
      </ul> 
    </section>
  </main>
  );
}

export default Main;