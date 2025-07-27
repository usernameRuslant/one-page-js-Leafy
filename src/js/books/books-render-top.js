export function renderTopBooks(data, container) {
  container.innerHTML = '';
  // const allBooks = topBooksArray.flatMap(category => category.books);
  const isMobile = window.innerWidth < 768;
  const limit = isMobile ? 10 : 24;
  //
  let books = [];
  if (Array.isArray(data) && data.length && data[0].books) {
    // top-books (категории)
    books = data.flatMap(category => category.books);
  } else {
    // просто массив книг (по категории)
    books = data;
  }
  //
  const seenTitles = new Set();
  const filteredBooks = books.filter(book => {
    // if (!book.price || book.price === '0.00') return false;
    if (seenTitles.has(book.title)) return false;
    seenTitles.add(book.title);
    return true;
  });

  const limitedBooks = filteredBooks.slice(0, limit);

  const markup = limitedBooks
    .map(({ book_image, title, author, price }) => {
      const roundedPrice = Math.ceil(Number(price));
      return `
    <li class="books-item">
      <img src="${book_image}" alt="book cover" class="books-item-image" />
      <div class="books-item-info">
        <div class="books-item-info-left">
          <h4 class="books-item-title">${title}</h4>
          <p class="books-item-author">${author}</p>
        </div>
        <p class="books-item-price">$${roundedPrice}</p>
      </div>
      <button type="button" class="books-item-open-modal">
        learn more
      </button>
    </li>
  `;
    })
    .join('');
  container.innerHTML = markup;
}
