import axios from 'axios';

axios.defaults.baseURL = 'https://books-backend.p.goit.global/books';

export async function getCategories() {
  try {
    const response = await axios.get('/category-list');
    return response.data;
  } catch (error) {
    // iziToast.error({ title: 'Ошибка', message: 'Не удалось загрузить категории' });
    return [];
  }
}

// Получение книг по категории
export async function getBooksByCategory(category) {
  try {
    const response = await axios.get(`/category?category=${category}`);
    return response.data;
  } catch (error) {
    // iziToast.error({ title: 'Ошибка', message: 'Не удалось загрузить книги' });
    return [];
  }
}

// Получение топовых книг (всех категорий)
export async function getTopBooks() {
  try {
    const response = await axios.get('/top-books');
    return response.data;
  } catch (error) {
    // iziToast.error({ title: 'Ошибка', message: 'Не удалось загрузить топовые книги' });
    return [];
  }
}
