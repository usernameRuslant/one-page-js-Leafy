import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const swiper = new Swiper('.feedbacks-swiper', {
  breakpoints: {
    320: { slidesPerView: 1 },
    375: {
      slidesPerView: 1,
    },
    768: { slidesPerView: 2, spaceBetween: 24 },
    1440: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
  },
  modules: [Navigation, Pagination],
  navigation: {
    nextEl: '.feedbacks-button-next',
    prevEl: '.feedbacks-button-prev',
  },
  pagination: {
    el: '.feedbacks-swiper-pagination',
    clickable: true,
    dynamicBullets: true,
    dynamicMainBullets: 2,
  },
});
////////////снимаю стили фокуса с кнопок
document
  .querySelectorAll('.feedbacks-button-prev, .feedbacks-button-next')
  .forEach(btn => {
    btn.addEventListener('mouseup', () => btn.blur());
  });
