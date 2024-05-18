import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

export function renderImageCards(data, gallery) {
  const imagesMarkup = data.hits
    .map(image => {
      const {
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      } = image;
      return `<li class="card">
          <a class="gallery-link" href="${largeImageURL}">
            <img src="${webformatURL}" alt="${tags}">
          </a>
          <div class="card-body">
            <p class="card-text">Likes <span>${likes}</span></p>
            <p class="card-text">Views <span>${views}</span></p>
            <p class="card-text">Comments <span>${comments}</span></p>
            <p class="card-text">Downloads <span>${downloads}</span></p>
          </div>
        </li>`;
    })
    .join('');

  gallery.insertAdjacentHTML('beforeend', imagesMarkup);
}
// if (data.total !== 0) {
// } else {
//   gallery.innerHTML = '';
//   iziToast.show({
//     message:'Sorry, there are no images matching your search query. Please try again!',
//     messageColor: '#fff',
//     backgroundColor: '#b52222',
//     position: 'topRight',
//     progressBar: false,
//   });
// }
