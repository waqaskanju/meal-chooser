const createCard = (id, title, description) => {
  const cardContainer = document.querySelector('.row row-cols-2 row-cols-md-3 g-4');

  const col = document.createElement('div');
  col.classList.add('col');
  col.setAttribute('id', `${id}`);
  cardContainer.appendChild(col);

  const card = document.createElement('div');
  card.classList.add('card');
  card.setAttribute('style', 'width: 18rem');
  col.appendChild(card);

  const image = document.createElement('img');
  image.classList.add('card-img-top');
  card.appendChild(image);

  const cardBody = document.createElement('div');
  card.appendChild(cardBody);

  const cardTitle = document.createElement('h5');
  cardTitle.classList.add('card-title');
  cardTitle.innerHTML = `${title}`;
  cardBody.appendChild(cardTitle);

  const cardDescription = createElement('p');
  cardDescription.classList.add('card-text');
  cardDescription.innerHTML = `${description}`;
  cardBody.appendChild(cardDescription);

  const commentsButton = document.createElement('a');
  commentsButton.setAttribute('href', '#');
  commentsButton.classList.add('btn btn-primary');
  commentsButton.innerHTML = 'Comments';
  cardBody.appendChild(commentsButton);

  const reservationButton = document.createElement('a');
  reservationButton.setAttribute('href', '#');
  reservationButton.classList.add('btn btn-primary');
  reservationButton.innerHTML = 'Comments';
  cardBody.appendChild(reservationButton);
};

export default createCard ;
