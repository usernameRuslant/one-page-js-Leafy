export let allBooks = [];
export let visibleCount = window.innerWidth < 768 ? 10 : 24;
export const PAGE_SIZE = 4;

export function resetBooksState(books) {
  allBooks = books;
  visibleCount = window.innerWidth < 768 ? 10 : 24;
}

export function increaseVisibleCount() {
  visibleCount += PAGE_SIZE;
}
