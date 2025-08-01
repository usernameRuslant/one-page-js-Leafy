import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

import iconSprite from './icons.svg';

function createEventModalMarkup() {
  return `
   <div class="event-modal-window">
  <div class="event-modal-container">
    <button
      type="button"
      class="event-modal-close-btn"
      aria-label="close modal"
    >
      <svg width="32" height="32">
        <use href="${iconSprite}#icon-x"></use>
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
              pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
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
  `;
}

export function openEventModal(e) {
  const markup = createEventModalMarkup();

  const instance = basicLightbox.create(markup, {
    onShow: instance => {
      document.body.classList.add('mod-open');

      const modalRoot = instance.element();

      modalRoot.addEventListener('click', e => {
        if (e.target.closest('.event-modal-close-btn')) {
          instance.close();
        }
        if (e.target === modalRoot) {
          instance.close();
        }
      });

      function handleEsc(event) {
        if (event.key === 'Escape') {
          instance.close();
        }
      }
      document.addEventListener('keydown', handleEsc);

      function cleanup() {
        document.body.classList.remove('mod-open');
        document.removeEventListener('keydown', handleEsc);
      }

      instance.element().addEventListener('basiclightbox:close', cleanup);

      const origClose = instance.close;
      instance.close = function () {
        cleanup();
        origClose.call(instance);
      };
    },
  });

  instance.show();
}
