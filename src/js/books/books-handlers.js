import { getBooksByCategory, getTopBooks } from '../api';
import { refs } from '../refs';
import { renderTopBooks } from './books-render-top';

export async function onCategoryLiClick(e) {
  const li = e.target.closest('li[data-category]');
  if (!li) return;
  const category = li.getAttribute('data-category');
  const name = li.textContent.trim();

  console.log('Клик по категории:', name, '| data-category:', category);

  // Тут можно вызывать getBooksByCategory(category) и т.д.
  // getBooksByCategory(name);
  if (category === 'all') {
    const books = await getTopBooks();
    renderTopBooks(books, refs.booksList);
  } else {
    const books = await getBooksByCategory(category);
    renderTopBooks(books, refs.booksList); // [{ books }] — твой формат
  }
}
