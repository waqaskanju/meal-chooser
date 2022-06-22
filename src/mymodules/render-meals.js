import createCard from "./card-element";
import getMealData from "./get-meals.js";

export default showScore = () => {
  const cardData = getMealData();
  console.log(getMealData());
  cardData.then((value) => {
    console.log(cardData);
    // if (value.result) {
    //   value.result.forEach((element) => {
    //     const text = `${element.user}: ${element.score}`;
    //     createLi(text);
    //   });
  });
};

