import { fetchImages } from './js/pixabay-api.js';
import { renderImageCards } from './js/render-functions.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const gallery = document.querySelector('.gallery');
const searchForm = document.querySelector('.form');
const loader = document.querySelector('.loader');
const loadMore = document.querySelector(".load-more")

searchForm.addEventListener('submit', onSearch);

async function onSearch(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const userRequest = form.elements.query.value;

  if (userRequest.trim() !== '') {
    loader.classList.remove('is-hidden');
    
    try {
      const { data } = await fetchImages(userRequest);
      renderImageCards(data, gallery);
      loadMore.classList.remove('invisible');
    } catch (error) {
      console.error(error);
      iziToast.show({
        message: 'Something went wrong!',
        messageColor: '#fff',
        backgroundColor: '#b52222',
        position: 'topRight',
        progressBar: false,
      });
    } finally {
      form.reset();
      loader.classList.add('is-hidden');
      initLightbox();
    }
  }
}

function initLightbox() {
  const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionsDelay: 250,
    overlayOpacity: 0,
  });
  lightbox.refresh();
}
