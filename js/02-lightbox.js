import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery');
gallery.insertAdjacentHTML('afterbegin', markup(galleryItems));
 /* gallery.addEventListener('click', handlerOpen); */

function markup(arr) {
 return arr.map(({ preview, original, description }) =>
    `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`).join('')
}

/* function handlerOpen(evt) {
 evt.preventDefault();

} */
const lightbox = new Simplelightbox('.gallary a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: '250ms',

})
console.log(galleryItems);
