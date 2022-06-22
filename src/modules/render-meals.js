import createCard from './card-element.js';
import getMealData from './get-meals.js';

const showMeals = () => {
  const cardData = getMealData();
  cardData.then((value) => {
    if (value.meals) {
      for (let i = 1; i <= 6; i += 1) {
        const image = value.meals[i].strMealThumb;
        const title = value.meals[i].strMeal;
        createCard(image, title);
      }
    }
  });
};

export default showMeals;
