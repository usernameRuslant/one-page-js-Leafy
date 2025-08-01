import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const swiper = new Swiper('.events-swiper', {
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
    nextEl: '.events-button-next',
    prevEl: '.events-button-prev',
  },
  pagination: {
    el: '.events-swiper-pagination',
    clickable: true,
    dynamicBullets: true,
    dynamicMainBullets: 2,
  },
});
//
document.querySelectorAll('.event-show-more').forEach(btn => {
  btn.addEventListener('click', function () {
    const desc = document.getElementById(this.getAttribute('aria-controls'));
    desc.classList.toggle('expanded');
    btn.textContent = desc.classList.contains('expanded')
      ? 'Hide'
      : 'Read more';
  });
});
