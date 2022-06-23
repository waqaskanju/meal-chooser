import { baseUrl, involmentId } from './baseUrl.js';

const addNewInvolment = async (itemId, item) => {
  const response = await fetch(`${baseUrl}/app/:${involmentId}/likes/`, {
    method: 'POST',
    mode: 'no-cors',
    body: JSON.stringify({
      itemId, item,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const AddScoreResponse = await response.json();
  return AddScoreResponse;
};
export default addNewInvolment;