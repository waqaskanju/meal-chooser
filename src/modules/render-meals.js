import createCard from './card-element.js';
import { getLikes } from './get-likes.js';
import getMealData from './get-meals.js';

const showMeals = () => {
  const cardData = getMealData();
  const cardLikes = getLikes();
  cardLikes.then((valuee) => {
    console.log(valuee);
  })
  console.log(cardLikes)
  cardData.then((value) => {
    if (value.meals) {
      for (let i = 1; i <= 6; i += 1) {
        const image = value.meals[i].strMealThumb;
        const title = value.meals[i].strMeal;
        const id = value.meals[i].idMeal;
        createCard(image, title, id, getLikes(id));

      }
    }
  });
};

export default showMeals;
