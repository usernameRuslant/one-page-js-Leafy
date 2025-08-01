import{S as v,N as f,a as g,b as N,P as B}from"./assets/vendor-CSvUZ8xw.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function t(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(s){if(s.ep)return;s.ep=!0;const a=t(s);fetch(s.href,a)}})();const n={openMobileMenuBtn:document.querySelector(".header-mobile-menu"),closeMobileMenuBtn:document.querySelector(".mobile-menu-close"),mobileMenuModal:document.querySelector(".mobile-menu-modal"),booksCategoriesList:document.querySelector(".books-categories-list"),booksCategoriesSelect:document.querySelector(".books-categories-select"),booksCategoriesSelectList:document.querySelector(".books-categories-select-list"),booksList:document.querySelector(".books-list"),booksShowMoreBtn:document.querySelector(".books-item-show-more"),booksCount:document.querySelector(".books-info"),selectBtn:document.querySelector(".books-categories-select-btn"),selectList:document.querySelector(".books-categories-select-list")};function k(){n.mobileMenuModal.classList.remove("is-open"),document.body.classList.remove("no-scroll"),n.closeMobileMenuBtn.removeEventListener("click",k),n.openMobileMenuBtn.addEventListener("click",y),document.removeEventListener("keydown",S),n.mobileMenuModal.removeEventListener("click",E),n.openMobileMenuBtn.focus()}function y(){n.mobileMenuModal.classList.add("is-open"),document.body.classList.add("no-scroll"),n.closeMobileMenuBtn.focus(),n.closeMobileMenuBtn.addEventListener("click",k),n.openMobileMenuBtn.removeEventListener("click",y),document.addEventListener("keydown",S),n.mobileMenuModal.addEventListener("click",E)}function S(e){e.key==="Escape"&&k()}function E(e){e.target.classList.contains("mobile-menu-link")&&k()}n.openMobileMenuBtn.addEventListener("click",y);new v(".hero-swiper",{modules:[f],navigation:{nextEl:".hero-button-next",prevEl:".hero-button-prev"}});g.defaults.baseURL="https://books-backend.p.goit.global/books";async function R(){try{return(await g.get("/category-list")).data}catch{return[]}}async function C(e){try{return(await g.get(`/category?category=${e}`)).data}catch{return[]}}async function w(){try{return(await g.get("/top-books")).data}catch{return[]}}async function T(e){try{return(await g.get(`/${e}`)).data}catch{return{}}}function $(e,o){const t=e.map(({_id:i,book_image:s,title:a,author:c,price:u})=>{const m=u?Math.ceil(Number(u)):"";return`
        <li class="books-item" data-id="${i}">
          <img src="${s}" alt="${a} cover" class="books-item-image" />
          <div class="books-item-info">
            <div class="books-item-info-left">
              <h4 class="books-item-title">${a}</h4>
              <p class="books-item-author">${c}</p>
            </div>
            <p class="books-item-price">${m?`$${m}`:"—"}</p>
          </div>
          <button type="button" class="books-item-open-modal">
            learn more
          </button>
        </li>
      `}).join("");o.insertAdjacentHTML("beforeend",t)}function O(e){const o=['<li data-category="all" class="active">All categories</li>',...e.filter(t=>t.list_name).map(t=>`<li data-category="${t.list_name}">${t.list_name}</li>`)].join("");n.booksCategoriesList.innerHTML=o}function V(e){const o=['<li class="books-categories-select-item is-active" data-value="all">All categories</li>',...e.filter(t=>t.list_name).map(t=>`<li class="books-categories-select-item" data-value="${t.list_name}">${t.list_name}</li>`)].join("");n.booksCategoriesSelectList.innerHTML=o}function _(){n.booksShowMoreBtn.classList.remove("is-hidden")}function x(){n.booksShowMoreBtn.classList.add("is-hidden")}let r=[],l=window.innerWidth<768?10:24;const P=4;function D(e){r=e,l=window.innerWidth<768?10:24}function j(){l+=P}async function H(){try{const e=await R();O(e),V(e)}catch(e){console.error("Ошибка загрузки категорий:",e)}}function I(){n.booksList.innerHTML="";const e=r.slice(0,l);$(e,n.booksList),r.length>l?_():x()}const d="/one-page-js-Leafy/assets/icons-C5ed12rK.svg";function U(e){const{title:o="No title",author:t="Unknown author",price:i,book_image:s,description:a=""}=e;return`
    <div class="books-modal-window">
      <div class="container books-modal-container">
        <button type="button" class="books-modal-close-btn" aria-label="close modal">
          <svg width="32" height="32">
            <use href="${d}#icon-x"></use>
          </svg>
        </button>
        <div class="books-modal-image-wrapper">
          <img class="books-modal-image" src="${s}" alt="${o}" />
        </div>
        <div class="books-modal-info-side">
          <h3 class="books-modal-title">${o}</h3>
          <p class="books-modal-author">${t}</p>
          <p class="books-modal-price">${i?"$"+Math.ceil(Number(i)):"—"}</p>
          <div class="books-modal-counter">
            <button type="button" class="book-modal-counter-btn book-modal-counter-decrease">
              <svg width="24" height="24"><use  href="${d}#icon-minus"></use></svg>
            </button>
            <span class="book-modal-counter-value">1</span>
            <button type="button" class="book-modal-counter-btn book-modal-counter-increase">
              <svg width="24" height="24"><use  href="${d}#icon-plus"></use></svg>
            </button>
          </div>
          <div class="books-modal-buttons">
            <button type="button" class="books-modal-add-to-cart">add to cart</button>
            <button type="button" class="books-modal-buy-now">buy now</button>
          </div>
         <div class="accordion" id="bookModalAccordion">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingDetails">
       <button class="accordion-button collapsed" type="button"
    data-bs-toggle="collapse"
    data-bs-target="#collapseDetails"
    aria-expanded="false"
    aria-controls="collapseDetails">
    Details
     <svg class="books-accordion-icon" width="24" height="24">
    <use  href="${d}#icon-chevron-down"></use>
  </svg>
  </button>
    </h2>
    <div id="collapseDetails" class="accordion-collapse collapse" aria-labelledby="headingDetails" >
       <div class="accordion-body">
        ${a||"No description."}
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingShipping">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseShipping" aria-expanded="false" aria-controls="collapseShipping">
        Shipping
         <svg class="books-accordion-icon" width="24" height="24">
    <use href="${d}#icon-chevron-down"></use>
  </svg>
      </button>
    </h2>
    <div id="collapseShipping" class="accordion-collapse collapse" aria-labelledby="headingShipping" >
      <div class="accordion-body">
       We ship across the United States within 2–5 business days. All orders are processed through USPS or a reliable courier service. Enjoy free standard shipping on orders over $50.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingReturns">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseReturns" aria-expanded="false" aria-controls="collapseReturns">
        Returns
         <svg class="books-accordion-icon" width="24" height="24">
    <use href="${d}#icon-chevron-down"></use>
  </svg>
      </button>
    </h2>
    <div id="collapseReturns" class="accordion-collapse collapse" aria-labelledby="headingReturns" >
      <div class="accordion-body">
       You can return an item within 14 days of receiving your order, provided it hasn’t been used and is in its original condition. To start a return, please contact our support team — we’ll guide you through the process quickly and hassle-free.
      </div>
    </div>
  </div>

</div>
        </div>
      </div>
    </div>
  `}async function W(e){if(!e)return;const o=await T(e),t=U(o);N.create(t,{onShow:s=>{const a=s.element();document.body.classList.add("mod-open"),a.addEventListener("click",b=>{const M=b.target.closest(".books-accordion-toggle");M&&M.closest(".books-accordion-item").classList.toggle("is-open"),b.target.closest(".books-modal-close-btn")&&s.close(),b.target===a&&s.close()});function c(b){b.key==="Escape"&&s.close()}document.addEventListener("keydown",c);function u(){document.body.classList.remove("mod-open"),document.removeEventListener("keydown",c),console.log("Модалка закрывается (basiclightbox:close)")}s.element().addEventListener("basiclightbox:close",u);const m=s.close;s.close=function(){u(),m.call(s)}}}).show()}function q(){const e=n.booksCount;if(!e)return;const o=Math.min(l,r.length);r.length===0?e.textContent="No books to show":e.textContent=`Showing ${o} of ${r.length}`}function L(e){D(e),I(),q()}function K(){const e=r.slice(l,l+P);$(e,n.booksList),j(),l>=r.length&&x(),q()}n.booksShowMoreBtn.addEventListener("click",K);function p(e){const o=new Set;return e.filter(t=>o.has(t.title)?!1:(o.add(t.title),!0))}async function F(e){try{const o=e.target.closest("li[data-category]");if(!o)return;const t=o.getAttribute("data-category");let i;t==="all"?(i=(await w()).flatMap(a=>a.books),i=p(i)):(i=await C(t),i=p(i)),L(i)}catch(o){console.error("Ошибка при выборе категории:",o)}}async function A(e){try{const o=e.target.value;let t;o==="all"?(t=(await w()).flatMap(s=>s.books),t=p(t)):(t=await C(o),t=p(t)),L(t)}catch(o){console.error("Ошибка при выборе категории через select:",o)}}function G(e){const o=e.target.closest(".books-item-open-modal"),t=e.target.closest(".books-item-image");if(!o&&!t)return;const i=e.target.closest(".books-item");if(!i)return;const s=i.dataset.id;W(s),console.log("Клик по learn more, id книги:",s)}function Y(){n.selectList.classList.toggle("is-hidden")}const h=document.querySelector(".books-categories-select-list"),Z=document.querySelector(".books-categories-select-btn-text");h.addEventListener("click",e=>{const o=e.target.closest(".books-categories-select-item");if(!o)return;const t=o.dataset.value,i=o.textContent;Z.textContent=i,h.classList.add("is-hidden"),h.querySelectorAll(".is-active").forEach(s=>s.classList.remove("is-active")),o.classList.add("is-active"),A({target:{value:t}})});H();n.booksCategoriesList.addEventListener("click",F);n.booksCategoriesSelectList.addEventListener("change",A);async function z(){try{let o=(await w()).flatMap(t=>t.books);o=p(o),L(o)}catch(e){console.error("Ошибка загрузки книг при запуске страницы:",e)}}z();n.booksList.addEventListener("click",G);n.selectBtn.addEventListener("click",Y);new v(".feedbacks-swiper",{breakpoints:{320:{slidesPerView:1},375:{slidesPerView:1},768:{slidesPerView:2,spaceBetween:24},1440:{slidesPerView:3,spaceBetween:24}},modules:[f,B],navigation:{nextEl:".feedbacks-button-next",prevEl:".feedbacks-button-prev"},pagination:{el:".feedbacks-swiper-pagination",clickable:!0,dynamicBullets:!0,dynamicMainBullets:2}});new v(".events-swiper",{breakpoints:{320:{slidesPerView:1},375:{slidesPerView:1},768:{slidesPerView:2,spaceBetween:24},1440:{slidesPerView:3,spaceBetween:24}},modules:[f,B],navigation:{nextEl:".events-button-next",prevEl:".events-button-prev"},pagination:{el:".events-swiper-pagination",clickable:!0,dynamicBullets:!0,dynamicMainBullets:2}});document.querySelectorAll(".event-show-more").forEach(e=>{e.addEventListener("click",function(){const o=document.getElementById(this.getAttribute("aria-controls"));o.classList.toggle("expanded"),e.textContent=o.classList.contains("expanded")?"Hide":"Read more"})});"scrollRestoration"in history&&(history.scrollRestoration="manual");window.scrollTo(0,0);
//# sourceMappingURL=index.js.map
