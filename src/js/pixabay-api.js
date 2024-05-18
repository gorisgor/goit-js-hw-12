import axios from 'axios';
const URL = 'https://pixabay.com/api/';
const API_KEY = '43757696-1a32682a4096c08080d446579';

export const fetchImages = (userRequest, imagesCurrentPage) => {
  return axios.get(`${URL}?key=${API_KEY}`, {
    params: {
      q: userRequest,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: 15,
      page: imagesCurrentPage,
    },
  });
};
