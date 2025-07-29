import { refs } from '../refs';

export function renderCategoriesList(categories) {
  const markup = [
    `<li data-category="all" class="active">All categories</li>`,
    ...categories
      .filter(categ => categ.list_name)
      .map(
        categ =>
          // `<li data-category="${encodeURIComponent(categ.list_name)}">${
          //   categ.list_name
          // }</li>`
          `<li data-category="${categ.list_name}">${categ.list_name}</li>`
      ),
  ].join('');
  refs.booksCategoriesList.innerHTML = markup;
}

// export function renderCategoriesSelect(categories) {
//   const markup = [
//     `<option value="" selected disabled hidden>Categories</option>`,
//     `<option value="all">All categories</option>`,
//     ...categories
//       .filter(cat => cat.list_name)
//       .map(
//         cat =>
//           // `<option value="${encodeURIComponent(cat.list_name)}">${
//           //   cat.list_name
//           // }</option>`
//           `<option value="${cat.list_name}">${cat.list_name}</option>`
//       ),
//   ].join('');
//   refs.booksCategoriesSelect.innerHTML = markup;
// }
export function renderCategoriesSelect(categories) {
  const markup = [
    `<li class="books-categories-select-item is-active" data-value="all">All categories</li>`,
    ...categories
      .filter(cat => cat.list_name)
      .map(
        cat =>
          `<li class="books-categories-select-item" data-value="${cat.list_name}">${cat.list_name}</li>`
      ),
  ].join('');
  refs.booksCategoriesSelectList.innerHTML = markup;
}
