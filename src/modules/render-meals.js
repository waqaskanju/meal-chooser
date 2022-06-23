import { createCard } from './card-element.js';
import { getLikes } from './get-likes.js';
import getMealData from './get-meals.js';
import counterMeals from './counter.js';

const showMeals = () => {
  const cardData = getMealData();
  cardData.then((value) => {
    if (value.meals) {
      for (let i = 1; i <= 6; i += 1) {
        const image = value.meals[i].strMealThumb;
        const title = value.meals[i].strMeal;
        const id = value.meals[i].idMeal;
        const likesData = getLikes(id);

        likesData.then((likeValue) => {
          if (!likeValue) { likeValue = 0; }
          createCard(image, title, id, likeValue);
        });
      }
    }
  });
  //

/* end of card data then statment */
};

export default showMeals;
