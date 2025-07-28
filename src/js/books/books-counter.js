import { refs } from '../refs.js';
import { visibleCount, allBooks } from './books-state.js';

export function updateBooksCounter() {
  const countElem = refs.booksCount;
  if (!countElem) return;

  const shown = Math.min(visibleCount, allBooks.length);
  if (allBooks.length === 0) {
    countElem.textContent = `No books to show`;
  } else {
    countElem.textContent = `Showing ${shown} of ${allBooks.length}`;
  }
}
