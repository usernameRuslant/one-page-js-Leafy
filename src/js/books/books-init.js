import { getCategories } from '../api.js';
import { refs } from '../refs.js';
import { appendBooks } from './books-render-append.js';
import {
  renderCategoriesList,
  renderCategoriesSelect,
} from './books-render-categories.js';

import { hideLoadMoreButton, showLoadMoreButton } from './books-renders.js';
import { allBooks, visibleCount } from './books-state.js';

//////////////////////////////////////////////////////
export async function initCategories() {
  try {
    const categories = await getCategories();
    renderCategoriesList(categories);
    renderCategoriesSelect(categories);
  } catch (error) {
    // iziToast.error({ title: 'Ошибка', message: 'Не удалось загрузить категории' });
    console.error('Ошибка загрузки категорий:', error);
  }
}

export function renderInitialBooksPortion() {
  refs.booksList.innerHTML = ''; // очищаем список
  const booksToShow = allBooks.slice(0, visibleCount); // берём только часть книг!
  appendBooks(booksToShow, refs.booksList);

  // Управление кнопкой
  if (allBooks.length > visibleCount) {
    showLoadMoreButton();
  } else {
    hideLoadMoreButton();
  }
}
