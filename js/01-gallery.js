import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery');
 gallery.insertAdjacentHTML('afterbegin', creatMarkup(galleryItems));
gallery.addEventListener('click', handlerOpen);

 let instance;
function handlerOpen(evt) {
  evt.preventDefault();

  const item = evt.target;
  if (item.nodeName !== 'IMG') {
    return;
  }
  instance = basicLightbox.create(`<img src = "${item.dataset.source}"/>`)
  instance.show();
  window.addEventListener('keydown', handlerClose);
};

 function handlerClose(evt) {
  if (evt.code === 'Escape') {
    instance.close()
    window.removeEventListener('keydown', handlerClose);
  }
};

 function creatMarkup(arr) {
  return arr.map(({ preview, original, description}) =>
 `<li class="gallery__item">
  <a class="gallery__link" href="${preview}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`).join('')
};
console.log(basicLightbox);
 console.log(galleryItems);
