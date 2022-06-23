const counterMeals = (id) => {
  let counter = 0;
  console.log(id)

  for (let i = 0; i <= id.length; i += 1) {
    counter += 1;
  }
  document.querySelector('#list').textContent = `(${counter}) Meals`;
};
export default counterMeals;