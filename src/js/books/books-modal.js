import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import { getBookById } from '../api';
import iconSprite from './icons.svg';

function createBookModalMarkup(book) {
  const {
    title = 'No title',
    author = 'Unknown author',
    price,
    book_image,
    description = '',
  } = book;

  return `
    <div class="books-modal-window">
      <div class="container books-modal-container">
        <button type="button" class="books-modal-close-btn" aria-label="close modal">
          <svg width="32" height="32">
            <use href="${iconSprite}#icon-x"></use>
          </svg>
        </button>
        <div class="books-modal-image-wrapper">
          <img class="books-modal-image" src="${book_image}" alt="${title}" />
        </div>
        <div class="books-modal-info-side">
          <h3 class="books-modal-title">${title}</h3>
          <p class="books-modal-author">${author}</p>
          <p class="books-modal-price">${
            price ? '$' + Math.ceil(Number(price)) : '—'
          }</p>
          <div class="books-modal-counter">
            <button type="button" class="book-modal-counter-btn book-modal-counter-decrease">
              <svg width="24" height="24"><use  href="${iconSprite}#icon-minus"></use></svg>
            </button>
            <span class="book-modal-counter-value">1</span>
            <button type="button" class="book-modal-counter-btn book-modal-counter-increase">
              <svg width="24" height="24"><use  href="${iconSprite}#icon-plus"></use></svg>
            </button>
          </div>
          <div class="books-modal-buttons">
            <button type="button" class="books-modal-add-to-cart">add to cart</button>
            <button type="button" class="books-modal-buy-now">buy now</button>
          </div>
         <div class="accordion" id="bookModalAccordion">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingDetails">
       <button class="accordion-button collapsed" type="button"
    data-bs-toggle="collapse"
    data-bs-target="#collapseDetails"
    aria-expanded="false"
    aria-controls="collapseDetails">
    Details
     <svg class="books-accordion-icon" width="24" height="24">
    <use  href="${iconSprite}#icon-chevron-down"></use>
  </svg>
  </button>
    </h2>
    <div id="collapseDetails" class="accordion-collapse collapse" aria-labelledby="headingDetails" >
       <div class="accordion-body">
        ${description || 'No description.'}
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingShipping">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseShipping" aria-expanded="false" aria-controls="collapseShipping">
        Shipping
         <svg class="books-accordion-icon" width="24" height="24">
    <use href="${iconSprite}#icon-chevron-down"></use>
  </svg>
      </button>
    </h2>
    <div id="collapseShipping" class="accordion-collapse collapse" aria-labelledby="headingShipping" >
      <div class="accordion-body">
       We ship across the United States within 2–5 business days. All orders are processed through USPS or a reliable courier service. Enjoy free standard shipping on orders over $50.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingReturns">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseReturns" aria-expanded="false" aria-controls="collapseReturns">
        Returns
         <svg class="books-accordion-icon" width="24" height="24">
    <use href="${iconSprite}#icon-chevron-down"></use>
  </svg>
      </button>
    </h2>
    <div id="collapseReturns" class="accordion-collapse collapse" aria-labelledby="headingReturns" >
      <div class="accordion-body">
       You can return an item within 14 days of receiving your order, provided it hasn’t been used and is in its original condition. To start a return, please contact our support team — we’ll guide you through the process quickly and hassle-free.
      </div>
    </div>
  </div>

</div>
        </div>
      </div>
    </div>
  `;
}

export async function openBookModal(bookId) {
  if (!bookId) return;
  const book = await getBookById(bookId);
  const markup = createBookModalMarkup(book);

  const instance = basicLightbox.create(markup, {
    onShow: instance => {
      const modalRoot = instance.element();

      // --- Блокируем фон ---
      document.body.classList.add('mod-open');

      modalRoot.addEventListener('click', e => {
        const btn = e.target.closest('.books-accordion-toggle');
        if (btn) {
          const item = btn.closest('.books-accordion-item');
          item.classList.toggle('is-open');
        }
        // Закрытие по крестику
        if (e.target.closest('.books-modal-close-btn')) {
          instance.close();
        }
        if (e.target === modalRoot) {
          instance.close();
        }
      });

      // --- Закрытие по ESC ---
      function handleEsc(event) {
        if (event.key === 'Escape') {
          instance.close();
        }
      }
      document.addEventListener('keydown', handleEsc);

      // --- Любое закрытие: снимаем класс с body и убираем esc
      function cleanup() {
        document.body.classList.remove('mod-open');
        document.removeEventListener('keydown', handleEsc);
      }
      instance.element().addEventListener('basiclightbox:close', cleanup);

      // Удалить обработчик при закрытии модалки

      const origClose = instance.close;
      instance.close = function () {
        cleanup();
        origClose.call(instance);
      };
    },
  });

  instance.show();
}
