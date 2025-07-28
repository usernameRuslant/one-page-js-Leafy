import { refs } from '../refs.js';
import { updateBooksCounter } from './books-counter.js';
import { renderInitialBooksPortion } from './books-init.js';
import { appendBooks } from './books-render-append.js';
import { hideLoadMoreButton } from './books-renders.js';
import {
  allBooks,
  visibleCount,
  resetBooksState,
  increaseVisibleCount,
  PAGE_SIZE,
} from './books-state.js';

export function onBooksDataLoaded(books) {
  resetBooksState(books);
  renderInitialBooksPortion();
  updateBooksCounter();
}

function renderNextBooks() {
  // Вычисляем следующую порцию
  const newBooks = allBooks.slice(visibleCount, visibleCount + PAGE_SIZE);
  appendBooks(newBooks, refs.booksList);
  increaseVisibleCount();

  // Прячем кнопку, если книг больше нет
  if (visibleCount >= allBooks.length) {
    hideLoadMoreButton();
  }
  updateBooksCounter();
}

refs.booksShowMoreBtn.addEventListener('click', renderNextBooks);
