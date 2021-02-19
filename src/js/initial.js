const initial = (state) => {
  const keys = Object.keys(state);
  keys.forEach((key) => {
    const isInCart = state[key].inCart;
    if (isInCart) {
      const button = document.querySelector(`[data-name-picture=${key}]`);
      button.textContent = 'В корзине';
      button.classList.add('picture-card__buy-button--in-cart');
    }
  });
};

export default initial;
