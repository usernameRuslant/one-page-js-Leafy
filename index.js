import{S as f,N as y,a as v,i as b,b as B,P as S}from"./assets/vendor-CkkcyHV1.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function t(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(s){if(s.ep)return;s.ep=!0;const a=t(s);fetch(s.href,a)}})();const i={openMobileMenuBtn:document.querySelector(".header-mobile-menu"),closeMobileMenuBtn:document.querySelector(".mobile-menu-close"),mobileMenuModal:document.querySelector(".mobile-menu-modal"),booksCategoriesList:document.querySelector(".books-categories-list"),booksCategoriesSelect:document.querySelector(".books-categories-select"),booksCategoriesSelectList:document.querySelector(".books-categories-select-list"),booksList:document.querySelector(".books-list"),booksShowMoreBtn:document.querySelector(".books-item-show-more"),booksCount:document.querySelector(".books-info"),selectBtn:document.querySelector(".books-categories-select-btn"),selectList:document.querySelector(".books-categories-select-list"),registerEvent:document.querySelectorAll(".section-events")};function h(){i.mobileMenuModal.classList.remove("is-open"),document.body.classList.remove("no-scroll"),i.closeMobileMenuBtn.removeEventListener("click",h),i.openMobileMenuBtn.addEventListener("click",w),document.removeEventListener("keydown",x),i.mobileMenuModal.removeEventListener("click",C),i.openMobileMenuBtn.focus()}function w(){i.mobileMenuModal.classList.add("is-open"),document.body.classList.add("no-scroll"),i.closeMobileMenuBtn.focus(),i.closeMobileMenuBtn.addEventListener("click",h),i.openMobileMenuBtn.removeEventListener("click",w),document.addEventListener("keydown",x),i.mobileMenuModal.addEventListener("click",C)}function x(e){e.key==="Escape"&&h()}function C(e){e.target.classList.contains("mobile-menu-link")&&h()}i.openMobileMenuBtn.addEventListener("click",w);new f(".hero-swiper",{slidesPerView:1,spaceBetween:24,modules:[y],navigation:{nextEl:".hero-button-next",prevEl:".hero-button-prev"}});document.querySelectorAll(".hero-button-prev, .hero-button-next").forEach(e=>{e.addEventListener("mouseup",()=>e.blur())});v.defaults.baseURL="https://books-backend.p.goit.global/books";async function _(){try{return(await v.get("/category-list")).data}catch{return b.error({title:"Error",message:"Failed to load categories",position:"topRight"}),[]}}async function $(e){try{return(await v.get(`/category?category=${e}`)).data}catch{return b.error({title:"Error",message:"Failed to load books for this category",position:"topRight"}),[]}}async function L(){try{return(await v.get("/top-books")).data}catch{return b.error({title:"Error",message:"Failed to load top books",position:"topRight"}),[]}}async function N(e){try{return(await v.get(`/${e}`)).data}catch{return b.error({title:"Error",message:"Failed to load the book",position:"topRight"}),{}}}function q(e,o){const t=e.map(({_id:n,book_image:s,title:a,author:r,price:u})=>{const l=u?Math.ceil(Number(u)):"";return`
        <li class="books-item" data-id="${n}">
          <img src="${s}" alt="${a} cover" class="books-item-image" />
          <div class="books-item-info">
            <div class="books-item-info-left">
              <h4 class="books-item-title">${a}</h4>
              <p class="books-item-author">${r}</p>
            </div>
            <p class="books-item-price">${l?`$${l}`:"—"}</p>
          </div>
          <button type="button" class="books-item-open-modal">
            learn more
          </button>
        </li>
      `}).join("");o.insertAdjacentHTML("beforeend",t)}function V(e){const o=['<li data-category="all" class="active">All categories</li>',...e.filter(t=>t.list_name).map(t=>`<li data-category="${t.list_name}">${t.list_name}</li>`)].join("");i.booksCategoriesList.innerHTML=o}function D(e){const o=['<li class="books-categories-select-item is-active" data-value="all">All categories</li>',...e.filter(t=>t.list_name).map(t=>`<li class="books-categories-select-item" data-value="${t.list_name}">${t.list_name}</li>`)].join("");i.booksCategoriesSelectList.innerHTML=o}function O(){i.booksShowMoreBtn.classList.remove("is-hidden")}function A(){i.booksShowMoreBtn.classList.add("is-hidden")}let c=[],d=window.innerWidth<768?10:24;const P=4;function F(e){c=e,d=window.innerWidth<768?10:24}function j(){d+=P}async function z(){try{const e=await _();V(e),D(e)}catch(e){console.error("Ошибка загрузки категорий:",e)}}function H(){i.booksList.innerHTML="";const e=c.slice(0,d);q(e,i.booksList),c.length>d?O():A()}const m="/one-page-js-Leafy/assets/icons-C5ed12rK.svg";function I(e){const{title:o="No title",author:t="Unknown author",price:n,book_image:s,description:a=""}=e;return`
    <div class="books-modal-window">
      <div class="container books-modal-container">
        <button type="button" class="books-modal-close-btn" aria-label="close modal">
          <svg width="32" height="32">
            <use href="${m}#icon-x"></use>
          </svg>
        </button>
        <div class="books-modal-image-wrapper">
          <img class="books-modal-image" src="${s}" alt="${o}" />
        </div>
        <div class="books-modal-info-side">
          <h3 class="books-modal-title">${o}</h3>
          <p class="books-modal-author">${t}</p>
          <p class="books-modal-price">${n?"$"+Math.ceil(Number(n)):"—"}</p>
          <div class="books-modal-counter">
            <button type="button" class="book-modal-counter-btn book-modal-counter-decrease">
              <svg width="24" height="24"><use  href="${m}#icon-minus"></use></svg>
            </button>
            <span class="book-modal-counter-value">1</span>
            <button type="button" class="book-modal-counter-btn book-modal-counter-increase">
              <svg width="24" height="24"><use  href="${m}#icon-plus"></use></svg>
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
    <use  href="${m}#icon-chevron-down"></use>
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
    <use href="${m}#icon-chevron-down"></use>
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
    <use href="${m}#icon-chevron-down"></use>
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
  `}async function U(e){if(!e)return;const o=await N(e),t=I(o);B.create(t,{onShow:s=>{const a=s.element();document.body.classList.add("mod-open"),a.addEventListener("click",p=>{const M=p.target.closest(".books-accordion-toggle");M&&M.closest(".books-accordion-item").classList.toggle("is-open"),p.target.closest(".books-modal-close-btn")&&s.close(),p.target===a&&s.close()});function r(p){p.key==="Escape"&&s.close()}document.addEventListener("keydown",r);function u(){document.body.classList.remove("mod-open"),document.removeEventListener("keydown",r)}s.element().addEventListener("basiclightbox:close",u);const l=s.close;s.close=function(){u(),l.call(s)}}}).show()}function R(){const e=i.booksCount;if(!e)return;const o=Math.min(d,c.length);c.length===0?e.textContent="No books to show":e.textContent=`Showing ${o} of ${c.length}`}function E(e){F(e),H(),R()}function Z(){const e=c.slice(d,d+P);q(e,i.booksList),j(),d>=c.length&&A(),R()}i.booksShowMoreBtn.addEventListener("click",Z);function g(e){const o=new Set;return e.filter(t=>o.has(t.title)?!1:(o.add(t.title),!0))}async function K(e){try{const o=e.target.closest("li[data-category]");if(!o)return;const t=o.getAttribute("data-category");let n;t==="all"?(n=(await L()).flatMap(a=>a.books),n=g(n)):(n=await $(t),n=g(n)),E(n)}catch(o){b.error({title:"Error",message:"Failed to load books. Please try again.",position:"topRight"}),console.error("Error selecting category:",o)}}async function T(e){try{const o=e.target.value;let t;o==="all"?(t=(await L()).flatMap(s=>s.books),t=g(t)):(t=await $(o),t=g(t)),E(t)}catch(o){b.error({title:"Error",message:"Failed to load books. Please try again.",position:"topRight"}),console.error("Error selecting category via select:",o)}}function W(e){try{const o=e.target.closest(".books-item-open-modal"),t=e.target.closest(".books-item-image");if(!o&&!t)return;const n=e.target.closest(".books-item");if(!n)return;const s=n.dataset.id;U(s)}catch(o){b.error({title:"Error",message:"Failed to open book modal.",position:"topRight"}),console.error("Error opening book modal:",o)}}function G(){i.selectList.classList.toggle("is-hidden")}const k=document.querySelector(".books-categories-select-list"),Y=document.querySelector(".books-categories-select-btn-text");k.addEventListener("click",e=>{const o=e.target.closest(".books-categories-select-item");if(!o)return;const t=o.dataset.value,n=o.textContent;Y.textContent=n,k.classList.add("is-hidden"),k.querySelectorAll(".is-active").forEach(s=>s.classList.remove("is-active")),o.classList.add("is-active"),T({target:{value:t}})});z();i.booksCategoriesList.addEventListener("click",K);i.booksCategoriesSelectList.addEventListener("change",T);async function J(){try{let o=(await L()).flatMap(t=>t.books);o=g(o),E(o)}catch(e){console.error("Ошибка загрузки книг при запуске страницы:",e)}}J();i.booksList.addEventListener("click",W);i.selectBtn.addEventListener("click",G);new f(".feedbacks-swiper",{breakpoints:{320:{slidesPerView:1},375:{slidesPerView:1},768:{slidesPerView:2,spaceBetween:24},1440:{slidesPerView:3,spaceBetween:24}},modules:[y,S],navigation:{nextEl:".feedbacks-button-next",prevEl:".feedbacks-button-prev"},pagination:{el:".feedbacks-swiper-pagination",clickable:!0,dynamicBullets:!0,dynamicMainBullets:2}});document.querySelectorAll(".feedbacks-button-prev, .feedbacks-button-next").forEach(e=>{e.addEventListener("mouseup",()=>e.blur())});const Q="/one-page-js-Leafy/assets/icons-C5ed12rK.svg";function X(){return`
   <div class="event-modal-window">
  <div class="event-modal-container">
    <button
      type="button"
      class="event-modal-close-btn"
      aria-label="close modal"
    >
      <svg width="32" height="32">
        <use href="${Q}#icon-x"></use>
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
  `}function ee(e){const o=X();B.create(o,{onShow:n=>{document.body.classList.add("mod-open");const s=n.element();s.addEventListener("click",l=>{l.target.closest(".event-modal-close-btn")&&n.close(),l.target===s&&n.close()});function a(l){l.key==="Escape"&&n.close()}document.addEventListener("keydown",a);function r(){document.body.classList.remove("mod-open"),document.removeEventListener("keydown",a)}n.element().addEventListener("basiclightbox:close",r);const u=n.close;n.close=function(){r(),u.call(n)}}}).show()}new f(".events-swiper",{breakpoints:{320:{slidesPerView:1},375:{slidesPerView:1},768:{slidesPerView:2,spaceBetween:24},1440:{slidesPerView:3,spaceBetween:24}},modules:[y,S],navigation:{nextEl:".events-button-next",prevEl:".events-button-prev"},pagination:{el:".events-swiper-pagination",clickable:!0,dynamicBullets:!0,dynamicMainBullets:2}});document.querySelectorAll(".event-show-more").forEach(e=>{e.addEventListener("click",function(){const o=document.getElementById(this.getAttribute("aria-controls"));o.classList.toggle("expanded"),e.textContent=o.classList.contains("expanded")?"Hide":"Read more"})});document.querySelector(".section-events").addEventListener("click",e=>{e.target.closest(".events-register-modal-open")&&ee()});document.querySelectorAll(".events-button-prev, .events-button-next").forEach(e=>{e.addEventListener("mouseup",()=>e.blur())});document.querySelector(".footer-form").addEventListener("submit",function(e){e.preventDefault()});"scrollRestoration"in history&&(history.scrollRestoration="manual");window.scrollTo(0,0);
//# sourceMappingURL=index.js.map
