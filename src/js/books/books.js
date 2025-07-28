import { refs } from '../refs.js';
import { initCategories } from './books-init.js';
import {
  filterUniqueBooksByTitle,
  onCategoryLiClick,
  onCategorySelect,
} from './books-handlers.js';
import { onBooksDataLoaded } from './books-pagination.js';
import { getTopBooks } from '../api.js';

// Инициализация категорий (если нужно отрендерить селекты/список)
initCategories();

// Обработчики на список и селект категорий
refs.booksCategoriesList.addEventListener('click', onCategoryLiClick);
refs.booksCategoriesSelect.addEventListener('change', onCategorySelect);

// Первая загрузка книг при открытии страницы
async function initPage() {
  try {
    const topBooksArray = await getTopBooks();
    let books = topBooksArray.flatMap(category => category.books);
    books = filterUniqueBooksByTitle(books);
    onBooksDataLoaded(books);
  } catch (error) {
    // iziToast.error({ title: 'Ошибка', message: 'Не удалось загрузить книги' });
    console.error('Ошибка загрузки книг при запуске страницы:', error);
  }
}

initPage();
