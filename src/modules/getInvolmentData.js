import { baseUrl, involmentId } from './baseUrl.js';

const getInvolment = async () => {
  const score = await fetch(`${baseUrl}/apps/:${involmentId}/likes/`, {
    mode: 'no-cors',
  });
  const jsonScore = await score.json();
  return jsonScore.result;
};
export default getInvolment;