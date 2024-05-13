const URL = 'https://pixabay.com/api/';
const API_KEY = '43757696-1a32682a4096c08080d446579';

export function fetchImages(userRequest) {
  const searchParams = new URLSearchParams({
    key: API_KEY,
    q: userRequest,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  return fetch(`${URL}?${searchParams}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
}
