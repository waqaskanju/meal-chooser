import createCard from "./card-element";
import getMealData from "./get-meals.js";

const showMeals = () => {
  const cardData = getMealData();
  cardData.then((value) => {
    if (value.meals) {
      value.meals.forEach((element) => {
        const image = `${element.strMealThumb}`;
        console.log(image)
        const title = `${element.strMeal}`;
        const description = `${element.strInstructions}`;
        createCard(image, title, description);
      });
    }
  });
};

export default showMeals;
