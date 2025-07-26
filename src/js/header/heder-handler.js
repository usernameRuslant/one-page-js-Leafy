import { refs } from '../refs.js';

function onClickCloseMobileMenu() {
  refs.mobileMenuModal.classList.remove('is-open');
  document.body.classList.remove('no-scroll');
  refs.closeMobileMenuBtn.removeEventListener('click', onClickCloseMobileMenu);
  refs.openMobileMenuBtn.addEventListener('click', onClickOpenMobileMenu);
  document.removeEventListener('keydown', onEscCloseMenu);
  refs.mobileMenuModal.removeEventListener('click', onMenuLinkClick);
  refs.openMobileMenuBtn.focus();
}

export function onClickOpenMobileMenu() {
  refs.mobileMenuModal.classList.add('is-open');
  document.body.classList.add('no-scroll');
  refs.closeMobileMenuBtn.focus();
  refs.closeMobileMenuBtn.addEventListener('click', onClickCloseMobileMenu);
  refs.openMobileMenuBtn.removeEventListener('click', onClickOpenMobileMenu);

  document.addEventListener('keydown', onEscCloseMenu);
  refs.mobileMenuModal.addEventListener('click', onMenuLinkClick);
}
function onEscCloseMenu(e) {
  if (e.key === 'Escape') onClickCloseMobileMenu();
}
function onMenuLinkClick(e) {
  if (e.target.classList.contains('mobile-menu-link')) {
    onClickCloseMobileMenu();
  }
}
