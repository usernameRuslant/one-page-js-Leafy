import { refs } from '../refs';

export function showLoadMoreButton() {
  refs.booksShowMoreBtn.classList.remove('is-hidden');
}
export function hideLoadMoreButton() {
  refs.booksShowMoreBtn.classList.add('is-hidden');
}
