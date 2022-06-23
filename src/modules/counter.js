const counterMeals = (id) => {
  let counter = 0;

  for (let i = 0; i < id.lenght; i += 1) {
    counter += 1;
  }
  document.querySelector('#list').textContent = `${counter}`;
};
export default counterMeals;