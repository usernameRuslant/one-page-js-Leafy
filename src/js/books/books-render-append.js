//  добавляем книги в конец списка
export function appendBooks(books, container) {
  const markup = books
    .map(({ _id, book_image, title, author, price }) => {
      const roundedPrice = price ? Math.ceil(Number(price)) : '';
      return `
        <li class="books-item" data-id="${_id}">
          <img src="${book_image}" alt="${title} cover" class="books-item-image" />
          <div class="books-item-info">
            <div class="books-item-info-left">
              <h4 class="books-item-title">${title}</h4>
              <p class="books-item-author">${author}</p>
            </div>
            <p class="books-item-price">${
              roundedPrice ? `$${roundedPrice}` : '—'
            }</p>
          </div>
          <button type="button" class="books-item-open-modal">
            learn more
          </button>
        </li>
      `;
    })
    .join('');
  container.insertAdjacentHTML('beforeend', markup);
}
