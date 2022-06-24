import getComment from './getComment.js';

const CommentData = getComment('52952');

CommentData.then((comments) => {
  console.log(comments.length);
});