import { getCategories, getTopBooks } from '../api.js';
import { refs } from '../refs.js';
import {
  renderCategoriesList,
  renderCategoriesSelect,
} from './books-render-categories.js';
import { renderTopBooks } from './books-render-top.js';

//////////////////////////////////////////////////////
export async function initCategories() {
  const categories = await getCategories();
  renderCategoriesList(categories);
  renderCategoriesSelect(categories);
}

export async function initTopBooks() {
  const topBooksArray = await getTopBooks();
  renderTopBooks(topBooksArray, refs.booksList);
}
