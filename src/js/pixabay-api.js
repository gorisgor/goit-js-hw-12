import axios from 'axios';
const URL = 'https://pixabay.com/api/';
const API_KEY = '43757696-1a32682a4096c08080d446579';

export const fetchImages = (userRequest) => {
  return axios.get(`${URL}?${API_KEY}`, {
    params: {
      q: userRequest,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: 15,
    }
  });
};






// const URL = 'https://pixabay.com/api/';
// const API_KEY = '43757696-1a32682a4096c08080d446579';

// export  function fetchImages(userRequest) {
//   const searchParams = new URLSearchParams({
//     key: API_KEY,
//     q: userRequest,
//     image_type: 'photo',
//     orientation: 'horizontal',
//     safesearch: true,
//   });

//   const response = fetch(`${URL}?${searchParams}`);
//   if (!response.ok) {
//     throw new Error(response.status);
//   }
//   return response.json();
// }
