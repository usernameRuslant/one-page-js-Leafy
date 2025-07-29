// Найти элементы

import { onCategorySelect } from './books-handlers.js'; // или твой путь
import { refs } from '../refs';
// Добавить обработчик
// selectBtn.addEventListener('click', () => {
//   selectList.classList.toggle('is-hidden');
// });

export function onClickOpenDropdown() {
  refs.selectList.classList.toggle('is-hidden');
}
// export function onClickOpenDropdown() {
//   refs.dropdownContainer.classList.toggle('is-hidden');
// }
//////////////////
const selectList = document.querySelector('.books-categories-select-list');
const selectBtnText = document.querySelector(
  '.books-categories-select-btn-text'
);

selectList.addEventListener('click', e => {
  const li = e.target.closest('.books-categories-select-item');
  if (!li) return;

  // 1. Получаем значение
  const value = li.dataset.value;
  const label = li.textContent;

  // 2. Показываем выбранный текст в кнопке
  selectBtnText.textContent = label;

  // 3. Закрываем список
  selectList.classList.add('is-hidden');
  // refs.dropdownContainer.classList.add('is-hidden');

  // 4. (Опционально) выделяем выбранный пункт
  selectList
    .querySelectorAll('.is-active')
    .forEach(item => item.classList.remove('is-active'));
  li.classList.add('is-active');

  onCategorySelect({ target: { value } });
  // 5. Вызвать свой обработчик (например, onCategorySelect)
  // onCategorySelect(value); // ← если у тебя такая функция есть
  // console.log('Selected:', value);
});
