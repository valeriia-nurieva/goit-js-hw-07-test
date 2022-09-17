import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEl = document.querySelector(".gallery");

const markup = createImgCard(galleryItems);
galleryEl.insertAdjacentHTML("beforeend", markup);

galleryEl.addEventListener("click", onHandleClick);

function onHandleClick(e) {
  if (e.target.nodeName !== "IMG") {
    return;
  }
  blockDefaultAction(e);

  const imgFullSize = e.target.dataset.source;

  const instance = basicLightbox.create(`
    <img src="${imgFullSize}">
`);
  instance.show();

  galleryEl.addEventListener("keydown", onEscKeyPress);

  function onEscKeyPress(e) {
    if (e.code === "Escape") {
      instance.close();
    }
    const visible = instance.visible();
    if (!visible) {
      galleryEl.removeEventListener("keydown", onEscKeyPress);
    }
  }
}

function createImgCard(array) {
  return array
    .map(
      ({ preview, original, description }) =>
        `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
    )
    .join("");
}

function blockDefaultAction(e) {
  e.preventDefault();
}
