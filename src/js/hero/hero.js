// или
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const swiper = new Swiper('.hero-swiper', {
  slidesPerView: 1,
  spaceBetween: 24,
  modules: [Navigation],
  navigation: {
    nextEl: '.hero-button-next',
    prevEl: '.hero-button-prev',
  },
});

////////////снимаю стили фокуса с кнопок
document
  .querySelectorAll('.hero-button-prev, .hero-button-next')
  .forEach(btn => {
    btn.addEventListener('mouseup', () => btn.blur());
  });
