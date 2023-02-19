// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';





const listEl = document.querySelector('.gallery');

const listTemplate = (preview, original, description) => `
    <div>
        <a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
    </div>
`;

const render = () => {
    const arrayFromListTemplate = galleryItems.map(item => listTemplate(item.preview, item.original, item.description));

    listEl.innerHTML = arrayFromListTemplate.join('');
};
render();

const galleryEl = new SimpleLightbox('.gallery__item', {
    captionsData: 'alt',
    captionDelay: 250,   
});
