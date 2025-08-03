import axios from 'axios';
import iziToast from 'izitoast';

axios.defaults.baseURL = 'https://books-backend.p.goit.global/books';

export async function getCategories() {
  try {
    const response = await axios.get('/category-list');
    return response.data;
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: 'Failed to load categories',
      position: 'topRight',
    });
    return [];
  }
}

// Получение книг по категории
export async function getBooksByCategory(category) {
  try {
    const response = await axios.get(`/category?category=${category}`);
    return response.data;
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: 'Failed to load books for this category',
      position: 'topRight',
    });

    return [];
  }
}

// Получение топовых книг (всех категорий)
export async function getTopBooks() {
  try {
    const response = await axios.get('/top-books');
    return response.data;
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: 'Failed to load top books',
      position: 'topRight',
    });

    return [];
  }
}
// Получение одной книги по id
export async function getBookById(id) {
  try {
    const response = await axios.get(`/${id}`);
    return response.data;
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: 'Failed to load the book',
      position: 'topRight',
    });

    return {};
  }
}
