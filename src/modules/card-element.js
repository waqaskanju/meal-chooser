import { setLikes } from "./get-likes.js";

const cardContainer = document.querySelector('.card-container');

export const createCard = (image, title, id, cardLikes) => {
  const col = document.createElement('div');
  col.classList.add('col');
  console.log(`${id}`);
  col.setAttribute('id', `${id}`);
  cardContainer.appendChild(col);

  const card = document.createElement('div');
  card.classList.add('card');
  card.setAttribute('style', 'width: 18rem');
  col.appendChild(card);

  const thumbailImage = document.createElement('img');
  thumbailImage.classList.add('card-img-top');
  thumbailImage.setAttribute('src', `${image}`);
  card.appendChild(thumbailImage);

  const cardBody = document.createElement('div');
  cardBody.classList.add('likes-container');
  card.appendChild(cardBody);

  const cardTitle = document.createElement('h5');
  cardTitle.classList.add('card-title');
  cardTitle.innerHTML = `${title}`;
  cardBody.appendChild(cardTitle);

  const cardDescription = document.createElement('p');
  cardDescription.classList.add('card-text');
  cardBody.appendChild(cardDescription);

  const likeIcon = document.createElement('i');
  likeIcon.classList.add('like-icon', 'fa-solid', 'fa-heart-circle-plus');
  cardBody.appendChild(likeIcon);

  const sumLike = likeIcon.addEventListener('click', async () =>  {
    await setLikes(id);
    location.reload();
  });

  const numberOfLikes = document.createElement('span');
  numberOfLikes.setAttribute('id', 'likesitem1');
  numberOfLikes.classList.add('number-of-likes');
  numberOfLikes.innerHTML = `${cardLikes} likes`;
  cardBody.appendChild(numberOfLikes);

  const commentsButton = document.createElement('a');
  commentsButton.setAttribute('href', '#');
  commentsButton.classList.add('btn', 'btn-primary');
  commentsButton.innerHTML = 'Comments';
  card.appendChild(commentsButton);

  const reservationButton = document.createElement('a');
  reservationButton.setAttribute('href', '#');
  reservationButton.classList.add('btn', 'btn-primary');
  reservationButton.innerHTML = 'Reservation';
  card.appendChild(reservationButton);
};
