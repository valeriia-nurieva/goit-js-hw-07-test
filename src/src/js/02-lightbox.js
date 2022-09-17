import { galleryItems } from './gallery-items.js';


const galleryEl = document.querySelector(".gallery");

const markup = createImgCard(galleryItems);
galleryEl.insertAdjacentHTML("beforeend", markup);

function createImgCard(array) {
  return array
    .map(
      ({ preview, original, description }) =>
        `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a> `
    )
    .join("");
}

new SimpleLightbox('.gallery__item', { 
  captionsData: 'alt',
  captionDelay: 250,
 });