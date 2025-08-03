import iziToast from 'izitoast';

import { getBooksByCategory, getTopBooks } from '../api';
import { openBookModal } from './books-modal.js';
import { onBooksDataLoaded } from './books-pagination.js';

// Фильтрация уникальных книг по названию
export function filterUniqueBooksByTitle(books) {
  const seenTitles = new Set();
  return books.filter(book => {
    if (seenTitles.has(book.title)) return false;
    seenTitles.add(book.title);
    return true;
  });
}
// Обработчик клика по категории
export async function onCategoryLiClick(e) {
  try {
    const li = e.target.closest('li[data-category]');
    if (!li) return;
    const category = li.getAttribute('data-category');

    let books;
    if (category === 'all') {
      const topBooksArray = await getTopBooks();
      books = topBooksArray.flatMap(category => category.books);
      books = filterUniqueBooksByTitle(books);
    } else {
      books = await getBooksByCategory(category);
      books = filterUniqueBooksByTitle(books);
    }
    onBooksDataLoaded(books);
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: 'Failed to load books. Please try again.',
      position: 'topRight',
    });
    console.error('Error selecting category:', error);
  }
}

// Обработчик выбора в select
export async function onCategorySelect(e) {
  try {
    const value = e.target.value;
    let books;
    if (value === 'all') {
      const topBooksArray = await getTopBooks();
      books = topBooksArray.flatMap(category => category.books);
      books = filterUniqueBooksByTitle(books);
    } else {
      books = await getBooksByCategory(value);
      books = filterUniqueBooksByTitle(books);
    }
    onBooksDataLoaded(books);
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: 'Failed to load books. Please try again.',
      position: 'topRight',
    });
    console.error('Error selecting category via select:', error);
  }
}
///////////////////////////////////////
export function onClickOpenModalBook(e) {
  try {
    const btn = e.target.closest('.books-item-open-modal');
    const img = e.target.closest('.books-item-image');
    if (!btn && !img) return;

    const li = e.target.closest('.books-item');
    if (!li) return;

    const bookId = li.dataset.id;
    openBookModal(bookId);
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: 'Failed to open book modal.',
      position: 'topRight',
    });
    console.error('Error opening book modal:', error);
  }
}
