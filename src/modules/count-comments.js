import getComment from './getComment.js';

const countComment = async () => {
  const CommentData = await getComment('52952');
  CommentData.then((comments) => comments.length);
};

export default countComment;