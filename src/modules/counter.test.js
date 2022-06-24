const counterMeals = require('./counter.js');

describe('Counter', () => {
  test('Number of meals on the page', () => {
    expect(counterMeals()).toBe(6);
  });
});
