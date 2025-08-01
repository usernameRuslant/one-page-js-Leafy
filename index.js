import{S as h,N as f,a as g,b as E,P as B}from"./assets/vendor-CSvUZ8xw.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function s(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(t){if(t.ep)return;t.ep=!0;const a=s(t);fetch(t.href,a)}})();const i={openMobileMenuBtn:document.querySelector(".header-mobile-menu"),closeMobileMenuBtn:document.querySelector(".mobile-menu-close"),mobileMenuModal:document.querySelector(".mobile-menu-modal"),booksCategoriesList:document.querySelector(".books-categories-list"),booksCategoriesSelect:document.querySelector(".books-categories-select"),booksCategoriesSelectList:document.querySelector(".books-categories-select-list"),booksList:document.querySelector(".books-list"),booksShowMoreBtn:document.querySelector(".books-item-show-more"),booksCount:document.querySelector(".books-info"),selectBtn:document.querySelector(".books-categories-select-btn"),selectList:document.querySelector(".books-categories-select-list"),registerEvent:document.querySelectorAll(".section-events")};function v(){i.mobileMenuModal.classList.remove("is-open"),document.body.classList.remove("no-scroll"),i.closeMobileMenuBtn.removeEventListener("click",v),i.openMobileMenuBtn.addEventListener("click",y),document.removeEventListener("keydown",S),i.mobileMenuModal.removeEventListener("click",C),i.openMobileMenuBtn.focus()}function y(){i.mobileMenuModal.classList.add("is-open"),document.body.classList.add("no-scroll"),i.closeMobileMenuBtn.focus(),i.closeMobileMenuBtn.addEventListener("click",v),i.openMobileMenuBtn.removeEventListener("click",y),document.addEventListener("keydown",S),i.mobileMenuModal.addEventListener("click",C)}function S(e){e.key==="Escape"&&v()}function C(e){e.target.classList.contains("mobile-menu-link")&&v()}i.openMobileMenuBtn.addEventListener("click",y);new h(".hero-swiper",{modules:[f],navigation:{nextEl:".hero-button-next",prevEl:".hero-button-prev"}});g.defaults.baseURL="https://books-backend.p.goit.global/books";async function T(){try{return(await g.get("/category-list")).data}catch{return[]}}async function x(e){try{return(await g.get(`/category?category=${e}`)).data}catch{return[]}}async function w(){try{return(await g.get("/top-books")).data}catch{return[]}}async function _(e){try{return(await g.get(`/${e}`)).data}catch{return{}}}function $(e,o){const s=e.map(({_id:n,book_image:t,title:a,author:l,price:u})=>{const c=u?Math.ceil(Number(u)):"";return`
        <li class="books-item" data-id="${n}">
          <img src="${t}" alt="${a} cover" class="books-item-image" />
          <div class="books-item-info">
            <div class="books-item-info-left">
              <h4 class="books-item-title">${a}</h4>
              <p class="books-item-author">${l}</p>
            </div>
            <p class="books-item-price">${c?`$${c}`:"—"}</p>
          </div>
          <button type="button" class="books-item-open-modal">
            learn more
          </button>
        </li>
      `}).join("");o.insertAdjacentHTML("beforeend",s)}function N(e){const o=['<li data-category="all" class="active">All categories</li>',...e.filter(s=>s.list_name).map(s=>`<li data-category="${s.list_name}">${s.list_name}</li>`)].join("");i.booksCategoriesList.innerHTML=o}function O(e){const o=['<li class="books-categories-select-item is-active" data-value="all">All categories</li>',...e.filter(s=>s.list_name).map(s=>`<li class="books-categories-select-item" data-value="${s.list_name}">${s.list_name}</li>`)].join("");i.booksCategoriesSelectList.innerHTML=o}function V(){i.booksShowMoreBtn.classList.remove("is-hidden")}function q(){i.booksShowMoreBtn.classList.add("is-hidden")}let r=[],d=window.innerWidth<768?10:24;const A=4;function D(e){r=e,d=window.innerWidth<768?10:24}function j(){d+=A}async function H(){try{const e=await T();N(e),O(e)}catch(e){console.error("Ошибка загрузки категорий:",e)}}function I(){i.booksList.innerHTML="";const e=r.slice(0,d);$(e,i.booksList),r.length>d?V():q()}const b="/one-page-js-Leafy/assets/icons-C5ed12rK.svg";function U(e){const{title:o="No title",author:s="Unknown author",price:n,book_image:t,description:a=""}=e;return`
    <div class="books-modal-window">
      <div class="container books-modal-container">
        <button type="button" class="books-modal-close-btn" aria-label="close modal">
          <svg width="32" height="32">
            <use href="${b}#icon-x"></use>
          </svg>
        </button>
        <div class="books-modal-image-wrapper">
          <img class="books-modal-image" src="${t}" alt="${o}" />
        </div>
        <div class="books-modal-info-side">
          <h3 class="books-modal-title">${o}</h3>
          <p class="books-modal-author">${s}</p>
          <p class="books-modal-price">${n?"$"+Math.ceil(Number(n)):"—"}</p>
          <div class="books-modal-counter">
            <button type="button" class="book-modal-counter-btn book-modal-counter-decrease">
              <svg width="24" height="24"><use  href="${b}#icon-minus"></use></svg>
            </button>
            <span class="book-modal-counter-value">1</span>
            <button type="button" class="book-modal-counter-btn book-modal-counter-increase">
              <svg width="24" height="24"><use  href="${b}#icon-plus"></use></svg>
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
    <use  href="${b}#icon-chevron-down"></use>
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
    <use href="${b}#icon-chevron-down"></use>
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
    <use href="${b}#icon-chevron-down"></use>
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
  `}async function z(e){if(!e)return;const o=await _(e),s=U(o);E.create(s,{onShow:t=>{const a=t.element();document.body.classList.add("mod-open"),a.addEventListener("click",m=>{const M=m.target.closest(".books-accordion-toggle");M&&M.closest(".books-accordion-item").classList.toggle("is-open"),m.target.closest(".books-modal-close-btn")&&t.close(),m.target===a&&t.close()});function l(m){m.key==="Escape"&&t.close()}document.addEventListener("keydown",l);function u(){document.body.classList.remove("mod-open"),document.removeEventListener("keydown",l)}t.element().addEventListener("basiclightbox:close",u);const c=t.close;t.close=function(){u(),c.call(t)}}}).show()}function P(){const e=i.booksCount;if(!e)return;const o=Math.min(d,r.length);r.length===0?e.textContent="No books to show":e.textContent=`Showing ${o} of ${r.length}`}function L(e){D(e),I(),P()}function Z(){const e=r.slice(d,d+A);$(e,i.booksList),j(),d>=r.length&&q(),P()}i.booksShowMoreBtn.addEventListener("click",Z);function p(e){const o=new Set;return e.filter(s=>o.has(s.title)?!1:(o.add(s.title),!0))}async function K(e){try{const o=e.target.closest("li[data-category]");if(!o)return;const s=o.getAttribute("data-category");let n;s==="all"?(n=(await w()).flatMap(a=>a.books),n=p(n)):(n=await x(s),n=p(n)),L(n)}catch(o){console.error("Ошибка при выборе категории:",o)}}async function R(e){try{const o=e.target.value;let s;o==="all"?(s=(await w()).flatMap(t=>t.books),s=p(s)):(s=await x(o),s=p(s)),L(s)}catch(o){console.error("Ошибка при выборе категории через select:",o)}}function W(e){const o=e.target.closest(".books-item-open-modal"),s=e.target.closest(".books-item-image");if(!o&&!s)return;const n=e.target.closest(".books-item");if(!n)return;const t=n.dataset.id;z(t),console.log("Клик по learn more, id книги:",t)}function F(){i.selectList.classList.toggle("is-hidden")}const k=document.querySelector(".books-categories-select-list"),G=document.querySelector(".books-categories-select-btn-text");k.addEventListener("click",e=>{const o=e.target.closest(".books-categories-select-item");if(!o)return;const s=o.dataset.value,n=o.textContent;G.textContent=n,k.classList.add("is-hidden"),k.querySelectorAll(".is-active").forEach(t=>t.classList.remove("is-active")),o.classList.add("is-active"),R({target:{value:s}})});H();i.booksCategoriesList.addEventListener("click",K);i.booksCategoriesSelectList.addEventListener("change",R);async function Y(){try{let o=(await w()).flatMap(s=>s.books);o=p(o),L(o)}catch(e){console.error("Ошибка загрузки книг при запуске страницы:",e)}}Y();i.booksList.addEventListener("click",W);i.selectBtn.addEventListener("click",F);new h(".feedbacks-swiper",{breakpoints:{320:{slidesPerView:1},375:{slidesPerView:1},768:{slidesPerView:2,spaceBetween:24},1440:{slidesPerView:3,spaceBetween:24}},modules:[f,B],navigation:{nextEl:".feedbacks-button-next",prevEl:".feedbacks-button-prev"},pagination:{el:".feedbacks-swiper-pagination",clickable:!0,dynamicBullets:!0,dynamicMainBullets:2}});const J="/one-page-js-Leafy/assets/icons-C5ed12rK.svg";function Q(){return`
   <div class="event-modal-window">
  <div class="event-modal-container">
    <button
      type="button"
      class="event-modal-close-btn"
      aria-label="close modal"
    >
      <svg width="32" height="32">
        <use href="${J}#icon-x"></use>
      </svg>
    </button>
    <h2 class="event-modal-title">Register</h2>
    <p class="event-modal-description">
      Cozy Book Club — “The Midnight Library”
    </p>
    <form class="event-form">
      <ul class="event-form-list">
        <li class="event-form-item">
          <label class="event-form-label" for="name"
            >Name*
            <input
              class="event-form-input"
              id="name"
              name="user_name"
              type="text"
              placeholder="Ann"
              minlength="5"
              maxlength="64"
              required
            />
            <span class="form-input-invalid-text">Error text</span>
          </label>
        </li>
        <li class="event-form-item">
          <label class="event-form-label" for="mail"
            >Email*
            <input
              class="event-form-input"
              id="mail"
              name="user_email"
              type="email"
              placeholder="hello@booksy.com"
              pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$"
              required
            />
            <span class="form-input-invalid-text">Error text</span>
          </label>
        </li>
        <li class="event-form-item">
          <label class="event-form-label" for="message">
            Message
            <textarea
              class="event-form-area"
              name="user_message"
              id="message"
              placeholder="Type your message..."
              minlength="10"
              maxlength="500"
              required
            ></textarea>
            <span class="form-area-invalid-text">Error text</span>
          </label>
        </li>
      </ul>
      <button class="event-btn" type="submit">Register</button>
    </form>
  </div>
</div>
  `}function X(e){const o=Q();E.create(o,{onShow:n=>{document.body.classList.add("mod-open");const t=n.element();t.addEventListener("click",c=>{c.target.closest(".event-modal-close-btn")&&n.close(),c.target===t&&n.close()});function a(c){c.key==="Escape"&&n.close()}document.addEventListener("keydown",a);function l(){document.body.classList.remove("mod-open"),document.removeEventListener("keydown",a)}n.element().addEventListener("basiclightbox:close",l);const u=n.close;n.close=function(){l(),u.call(n)}}}).show()}new h(".events-swiper",{breakpoints:{320:{slidesPerView:1},375:{slidesPerView:1},768:{slidesPerView:2,spaceBetween:24},1440:{slidesPerView:3,spaceBetween:24}},modules:[f,B],navigation:{nextEl:".events-button-next",prevEl:".events-button-prev"},pagination:{el:".events-swiper-pagination",clickable:!0,dynamicBullets:!0,dynamicMainBullets:2}});document.querySelectorAll(".event-show-more").forEach(e=>{e.addEventListener("click",function(){const o=document.getElementById(this.getAttribute("aria-controls"));o.classList.toggle("expanded"),e.textContent=o.classList.contains("expanded")?"Hide":"Read more"})});document.querySelector(".section-events").addEventListener("click",e=>{e.target.closest(".events-register-modal-open")&&X()});"scrollRestoration"in history&&(history.scrollRestoration="manual");window.scrollTo(0,0);
//# sourceMappingURL=index.js.map
