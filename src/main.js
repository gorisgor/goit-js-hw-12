import { fetchImages } from './js/pixabay-api.js';
import { renderImageCards } from './js/render-functions.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import axios from 'axios';

const gallery = document.querySelector('.gallery');
const searchForm = document.querySelector('.form');
const loader = document.querySelector('.loader');
const loadMore = document.querySelector(".load-more")

let userRequest = null;
let imagesCurrentPage = 1;
let totalPages = 0;

searchForm.addEventListener('submit', onSearch);
loadMore.addEventListener("click", onLoadMoreBtnClick)
async function onSearch(event) {
  event.preventDefault();
  const form = event.currentTarget;
  userRequest = form.elements.query.value;

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

async function onLoadMoreBtnClick(event) {
  event.preventDefault();
  try {
    imagesCurrentPage += 1;
    const { data } = await fetchImages(userRequest, imagesCurrentPage);
    
    gallery.insertAdjacentHTML('beforeend', renderImageCards(data));

    if (imagesCurrentPage > totalPages) {
      loadMore.classList.add('invisible');
      loadMore.removeEventListener('click', onLoadMoreBtnClick);
    }
  } catch (error) {
    iziToast.error({
      message: 'Search params is not valid',
      position: 'topRight',
      timeout: 2000,
    });
  }
}
