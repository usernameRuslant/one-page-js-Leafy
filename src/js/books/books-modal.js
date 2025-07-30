// import * as basicLightbox from 'basiclightbox';
// import 'basiclightbox/dist/basicLightbox.min.css';
// import { getBookById } from '../api';

// function createBookModalMarkup(book) {
//   const {
//     title = 'No title',
//     author = 'Unknown author',
//     price,
//     book_image,
//     description = '',
//   } = book;

//   return `
//     <div class="books-modal-window">
//       <div class="container books-modal-container">
//         <button type="button" class="books-modal-close-btn" aria-label="close modal">
//           <svg width="32" height="32">
//             <use href="/img/icons.svg#icon-x"></use>
//           </svg>
//         </button>
//         <div class="books-modal-image-wrapper">
//           <img class="books-modal-image" src="${book_image}" alt="${title}" />
//         </div>
//         <div class="books-modal-info-side">
//           <h3 class="books-modal-title">${title}</h3>
//           <p class="books-modal-author">${author}</p>
//           <p class="books-modal-price">${price ? '$' + price : '—'}</p>
//           <div class="books-modal-counter">
//             <button type="button" class="book-modal-counter-btn book-modal-counter-decrease">
//               <svg width="24" height="24"><use href="/img/icons.svg#icon-minus"></use></svg>
//             </button>
//             <span class="book-modal-counter-value">1</span>
//             <button type="button" class="book-modal-counter-btn book-modal-counter-increase">
//               <svg width="24" height="24"><use href="/img/icons.svg#icon-plus"></use></svg>
//             </button>
//           </div>
//           <div class="books-modal-buttons">
//             <button type="button" class="books-modal-add-to-cart">add to cart</button>
//             <button type="button" class="books-modal-buy-now">buy now</button>
//           </div>
//           <ul class="books-accordion">
//            <li class="books-accordion-item ">
//           <button class="books-accordion-toggle" type="button">
//             <span class="books-accordion-title">Details</span>
//             <svg class="books-accordion-icon" width="24" height="24">
//               <use href="/img/icons.svg#icon-chevron-down"></use>
//             </svg>
//           </button>
//           <div class="books-accordion-content">
//             <p class="books-accordion-text">
//               I Will Find You is a gripping thriller by the master of suspense,
//               Harlan Coben. The story follows David Burroughs, a former prisoner
//               wrongfully convicted of murdering his own son. When he discovers a
//               clue suggesting his son might still be alive, David escapes from
//               prison to uncover the truth. Fast-paced, emotional, and full of
//               unexpected twists — this novel will keep you hooked until the very
//               last page.
//             </p>
//           </div>
//         </li>
//          <li class="books-accordion-item ">
//           <button class="books-accordion-toggle" type="button">
//             <span class="books-accordion-title">Shipping</span>
//             <svg class="books-accordion-icon" width="24" height="24">
//               <use href="/img/icons.svg#icon-chevron-down"></use>
//             </svg>
//           </button>
//           <div class="books-accordion-content">
//             <p class="books-accordion-text">
//               We ship across the United States within 2–5 business days. All orders are processed through USPS or a reliable courier service. Enjoy free standard shipping on orders over $50.
//             </p>
//           </div>
//         </li>
//         <li class="books-accordion-item ">
//           <button class="books-accordion-toggle" type="button">
//             <span class="books-accordion-title">Returns</span>
//             <svg class="books-accordion-icon" width="24" height="24">
//               <use href="/img/icons.svg#icon-chevron-down"></use>
//             </svg>
//           </button>
//           <div class="books-accordion-content">
//             <p class="books-accordion-text">
//               You can return an item within 14 days of receiving your order, provided it hasn’t been used and is in its original condition. To start a return, please contact our support team — we’ll guide you through the process quickly and hassle-free.
//             </p>
//           </div>
//         </li>
//             <li class="books-accordion-item ">
//               <button class="books-accordion-toggle" type="button">
//                 <span class="books-accordion-title">Description</span>
//                 <svg class="books-accordion-icon" width="24" height="24">
//                   <use href="/img/icons.svg#icon-chevron-down"></use>
//                 </svg>
//               </button>
//               <div class="books-accordion-content">
//                 <p class="books-accordion-text">${
//                   description || 'No description.'
//                 }</p>
//               </div>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   `;
// }

// // export async function openBookModal(bookId) {
// //   if (!bookId) return;
// //   const book = await getBookById(bookId);
// //   const markup = createBookModalMarkup(book);

// //   basicLightbox.create(markup).show();
// // }
// export async function openBookModal(bookId) {
//   if (!bookId) return;
//   const book = await getBookById(bookId);
//   const markup = createBookModalMarkup(book);

//   const instance = basicLightbox.create(markup, {
//     onShow: instance => {
//       const modalRoot = instance.element();

//       // Делегирование по всему модальному окну
//       modalRoot.addEventListener('click', e => {
//         const btn = e.target.closest('.books-accordion-toggle');
//         if (!btn) return;
//         const item = btn.closest('.books-accordion-item');
//         item.classList.toggle('is-open');
//       });
//     },
//   });

//   instance.show();
// }
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
            <use xlink:href="${iconSprite}#icon-x"></use>
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
              <svg width="24" height="24"><use  href="./img/icons.svg#icon-minus"></use></svg>
            </button>
            <span class="book-modal-counter-value">1</span>
            <button type="button" class="book-modal-counter-btn book-modal-counter-increase">
              <svg width="24" height="24"><use  xlink:href="./img/icons.svg#icon-plus"></use></svg>
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
    <use  xlink:href="./img/icons.svg#icon-chevron-down"></use>
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
    <use xlink:href="./img/icons.svg#icon-chevron-down"></use>
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
    <use xlink:href="./img/icons.svg#icon-chevron-down"></use>
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

// export async function openBookModal(bookId) {
//   if (!bookId) return;
//   const book = await getBookById(bookId);
//   const markup = createBookModalMarkup(book);

//   basicLightbox.create(markup).show();
// }
//////////////
// export async function openBookModal(bookId) {
//   if (!bookId) return;
//   const book = await getBookById(bookId);
//   const markup = createBookModalMarkup(book);

//   const instance = basicLightbox.create(markup, {
//     onShow: instance => {
//       const modalRoot = instance.element();
//       // --- Блокируем фон ---

//       // --- Аккордеон делегирование ---
//       modalRoot.addEventListener('click', e => {
//         const btn = e.target.closest('.books-accordion-toggle');
//         if (btn) {
//           const item = btn.closest('.books-accordion-item');
//           item.classList.toggle('is-open');
//         }
//         // Закрытие по крестику
//         if (e.target.closest('.books-modal-close-btn')) {
//           instance.close();
//         }
//       });

//       // --- Закрытие по ESC ---
//       function handleEsc(event) {
//         if (event.key === 'Escape') {
//           instance.close();
//         }
//       }
//       document.addEventListener('keydown', handleEsc);

//       // Удалить обработчик при закрытии модалки
//       instance.element().addEventListener('basiclightbox:close', () => {
//         document.removeEventListener('keydown', handleEsc);
//       });
//     },
//   });

//   instance.show();
// }
export async function openBookModal(bookId) {
  if (!bookId) return;
  const book = await getBookById(bookId);
  const markup = createBookModalMarkup(book);

  const instance = basicLightbox.create(markup, {
    onShow: instance => {
      const modalRoot = instance.element();

      // --- Блокируем фон ---
      document.body.classList.add('mod-open');

      // --- Аккордеон делегирование ---

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
        console.log('Модалка закрывается (basiclightbox:close)');
      }
      instance.element().addEventListener('basiclightbox:close', cleanup);

      // Удалить обработчик при закрытии модалки
      // На всякий случай, если вызван instance.close() напрямую
      const origClose = instance.close;
      instance.close = function () {
        cleanup();
        origClose.call(instance);
      };
    },
  });

  instance.show();
}
