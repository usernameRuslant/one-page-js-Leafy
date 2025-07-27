import { refs } from '../refs.js';
import { initTopBooks } from './books-init.js';
import { initCategories } from './books-init.js';
import { getCategories, getTopBooks, getBooksByCategory } from '../api';
import { renderTopBooks } from './books-render-top.js';
import { onCategoryLiClick } from './books-handlers.js';

initCategories();
initTopBooks();
//////////////////////////////
getBooksByCategory('Advice How-To and Miscellaneous');

refs.booksCategoriesList.addEventListener('click', onCategoryLiClick);
