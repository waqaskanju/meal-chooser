import countComment from './modules/count-comments.js';

/* Here we are moking the data. comming from the server api reqeust. */

function countNumberOfComments(arr) {
  return arr.length;
}

const arr = [
  {
    comment: 'I like this food',
    creation_date: '2022-06-23',
    username: 'waqas',
  },
  {
    username: 'waqas',
    comment: 'I like this food',
    creation_date: '2022-06-23',
  },
];
test('check the value if it is 2', () => {
  expect(countNumberOfComments(arr)).toBe(2);
});

const arr2 = [
  { creation_date: '2022-06-23', username: 'Ahmad', comment: 'I need more' },
  {
    creation_date: '2022-06-24',
    username: 'Hussain',
    comment: 'So excited to taste it',
  },
  { creation_date: '2022-06-24', username: 'amir', comment: 'food with style' },
  { username: 'Fazal', comment: 'good beef', creation_date: '2022-06-24' },
  { username: 'mishal', creation_date: '2022-06-24', comment: 'deer yummy da' },
  { creation_date: '2022-06-24', username: 'Ceser', comment: 'i am hungry' },
];

test('check the value if it is 6', () => {
  expect(countNumberOfComments(arr2)).toBe(6);
});

const a = 1;
const b = 2;
if (a > b) {
  countComment();
}
