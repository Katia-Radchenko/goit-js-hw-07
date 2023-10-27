import {galleryItems} from './gallery-items.js';


// Change code below this line

console.log(galleryItems);

const list = document.querySelector('.gallery')
list.insertAdjacentHTML('beforeend', createMarkup(galleryItems))
list.addEventListener('click', onModal)

function createMarkup(array) {
    return array.map(({preview, original, description}) =>
        ` <li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`).join('')

}

 function onModal(e) {
     e.preventDefault()
     if (e.target.nodeName !== "IMG") {
         return;
     }

     const isItemImage = e.target.classList.contains('gallery__image');
     if (!isItemImage){
         return;
     }

     const currentImgUrl = e.target.dataset.source;

     const instance = basicLightbox.create(
         `<img src="${currentImgUrl}" width="800" height="600"/>`);
     instance.show();

 }
