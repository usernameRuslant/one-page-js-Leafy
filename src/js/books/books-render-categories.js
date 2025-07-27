import { refs } from '../refs';

export function renderCategoriesList(categories) {
  const markup = [
    `<li data-category="all" class="active">All categories</li>`,
    ...categories
      .filter(categ => categ.list_name)
      .map(
        categ =>
          `<li data-category="${encodeURIComponent(categ.list_name)}">${
            categ.list_name
          }</li>`
      ),
  ].join('');
  refs.booksCategoriesList.innerHTML = markup;
}

export function renderCategoriesSelect(categories) {
  const markup = [
    `<option value="" selected disabled hidden>Categories</option>`, // заголовок-фикс
    `<option value="all">All categories</option>`,
    ...categories
      .filter(cat => cat.list_name)
      .map(
        cat =>
          `<option value="${encodeURIComponent(cat.list_name)}">${
            cat.list_name
          }</option>`
      ),
  ].join('');
  refs.booksCategoriesSelect.innerHTML = markup;
}
