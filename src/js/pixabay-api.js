import axios from 'axios';

axios.defaults.headers.common['Authorization'] = '43757696-1a32682a4096c08080d446579';
axios.defaults.baseURL = 'https://pixabay.com/api';

export const fetchImages = (userRequest) => {
  return axios.get('/', {
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
