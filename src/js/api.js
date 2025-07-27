import axios from 'axios';

axios.defaults.baseURL = 'https://books-backend.p.goit.global/books';

export async function getCategories() {
  const response = await axios.get(`/category-list`);

  return response.data;
}

export async function getBooksByCategory(category) {
  console.log('getBooksByCategory вызвана с категорией:', category);
  try {
    const response = await axios.get(
      // `/category?category=${encodeURIComponent(category)}`
      `/category?category=${category}`
    );
    console.log('BOOKS BY CATEGORY:', response.data);
    return response.data;
  } catch (error) {
    console.error('Ошибка запроса getBooksByCategory:', error);
    return [];
  }
}

export async function getTopBooks() {
  const response = await axios.get('/top-books');

  return response.data;
}
