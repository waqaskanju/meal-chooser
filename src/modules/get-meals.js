const getMealData = async () => {
  const mealIdUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s=beef';
  const getData = await fetch(`${mealIdUrl}`);
  const receivedMeals = await getData.json();
  return receivedMeals;
};

export default getMealData;
