import {galleryItems} from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const list = document.querySelector('.gallery')


function createMarkup(array) {
    return array.map(({preview, original, description}) =>
        `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>
`).join('')

}

list.insertAdjacentHTML('beforeend', createMarkup(galleryItems))


const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: `250`,
    captionPosition: 'bottom',
});


