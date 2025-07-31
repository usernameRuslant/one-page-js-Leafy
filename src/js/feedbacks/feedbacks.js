import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const swiper = new Swiper('.feedbacks-swiper', {
  // slidesPerGroup: 1,
  // spaceBetween: 24,
  breakpoints: {
    320: { slidesPerView: 1 }, // мобилка
    375: {
      slidesPerView: 1,
    },
    768: { slidesPerView: 2, spaceBetween: 24 }, // планшет
    1440: {
      slidesPerView: 3,
      spaceBetween: 24,
    }, // десктоп
  },
  modules: [Navigation, Pagination],
  navigation: {
    nextEl: '.feedbacks-button-next',
    prevEl: '.feedbacks-button-prev',
  },
  pagination: {
    el: '.feedbacks-swiper-pagination',
    // bulletClass: 'feedbacks-pagination-bullet',
    // bulletActiveClass: 'feedbacks-pagination-bullet-active',
    clickable: true,
    dynamicBullets: true,
    dynamicMainBullets: 2,
  },
});
