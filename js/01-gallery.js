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

    const currentImgUrl = e.target.dataset.source;

    const instance = basicLightbox.create(`
  <div class="modal">
    <img src="${currentImgUrl}" alt="${e.target.description}"  width="800" height="600"/>
  </div>
  `, {
            onShow: instance => {
                instance.element().querySelector('img').onclick = instance.close;

                window.addEventListener('keydown', eventHandler);
            },
            onClose: instance => {
                window.removeEventListener('keydown', eventHandler);
            },
        },
    );

    function eventHandler(e) {
        if (e.code === 'Escape') {
            instance.close();
            return;
        }
    }

    instance.show();

}
