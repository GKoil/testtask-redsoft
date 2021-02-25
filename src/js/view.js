const initial = (state) => {
  const keys = Object.keys(state);
  keys.forEach((key) => {
    const { inCart, process } = state[key];
    const button = document.querySelector(`[data-name-picture=${key}]`);
    if (inCart) {
      button.textContent = 'В корзине';
      button.classList.add('picture-card__buy-button--in-cart');
    }
    if (!inCart) {
      button.textContent = 'Купить';
      button.classList.remove('picture-card__buy-button--in-cart');
    }
    if (process === 'request') {
      button.disabled = true;
      button.classList.add('picture-card__buy-button--request');
    }
    if (process === 'done') {
      button.disabled = false;
      button.classList.remove('picture-card__buy-button--request');
    }
  });
};

export default initial;
