import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery');
gallery.insertAdjacentHTML('afterbegin', creatMarkup(galleryItems));
gallery.addEventListener('click', handlerOpen);
window.addEventListener('keydown', handlerClose);
let instance;
function handlerOpen(evt) {
  evt.preventDefault();

  const item = evt.target.alt;
  const items = galleryItems.find(({ description }) => item === description);
  console.log(items);
  instance = basicLightbox.create(`
  <div>
    <img
      class="gallery__image"
      src="${items.original}"
      data-source="${items.original}"
      alt="${items.description}"
    />
  </div>
`,
)
instance.show();
};

function handlerClose(evt) {
  if (evt.code === 'Escape') {
     instance.close()
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

 console.log(galleryItems);
