import { setLikes } from './get-likes.js';

const cardContainer = document.querySelector('.card-container');

const createCard = (image, title, id, cardLikes, category, instruction, area, video) => {
  const col = document.createElement('div');
  col.classList.add('col');
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

  likeIcon.addEventListener('click', async () => {
    await setLikes(id);
    window.location.reload();
  });

  const numberOfLikes = document.createElement('span');
  numberOfLikes.setAttribute('id', 'likesitem1');
  numberOfLikes.classList.add('number-of-likes');
  numberOfLikes.innerHTML = `${cardLikes} likes`;
  cardBody.appendChild(numberOfLikes);

  const commentsButton = document.createElement('a');
  commentsButton.setAttribute('href', '#');
  commentsButton.setAttribute('data-bs-toggle', 'modal');
  commentsButton.setAttribute('data-bs-target', '#commentModal');
  commentsButton.addEventListener('click', () => {
    const popupTitle = document.getElementById('commentModalLabel');
    const mealCategory = document.getElementById('category');
    mealCategory.innerText = category;
    const mealArea = document.getElementById('area');
    mealArea.innerText = area;
    const mealTags = document.getElementById('Tag');
    mealTags.innerHTML = instruction;
    const mealVideo = document.getElementById('video');
    mealVideo.innerText = title;
    mealVideo.href = video;
    const modelImageContainer = document.getElementById('modal-image-container');
    modelImageContainer.innerHTML = '';
    const myImage = document.createElement('img');
    myImage.src = image;
    modelImageContainer.appendChild(myImage);
    popupTitle.innerHTML = title;
  });
  commentsButton.classList.add('btn', 'btn-primary');
  commentsButton.innerHTML = 'Comments';
  card.appendChild(commentsButton);

  const reservationButton = document.createElement('a');
  reservationButton.setAttribute('href', '#');
  reservationButton.classList.add('btn', 'btn-primary');
  reservationButton.innerHTML = 'Reservation';
  card.appendChild(reservationButton);
};

export default createCard;