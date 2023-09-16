import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const imageGalleryListEl = document.querySelector('.gallery');

const galleryItemEl = galleryItems

  .map(
    ({ preview, original, description }) =>
      `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img class="gallery__image" src="${preview}" alt="${description}"/>
        </a>
      </li>`
  )

  .join('');

imageGalleryListEl.insertAdjacentHTML('beforeend', galleryItemEl);

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
