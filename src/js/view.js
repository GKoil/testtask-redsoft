import onChange from 'on-change';

const render = (state) => onChange(state, (path, value) => {
  const [, nameOfPicture, changeData] = path.split('.');
  const changeButton = document.querySelector(`[data-name-picture="${nameOfPicture}"]`);

  switch (changeData) {
    case 'process':
      changeButton.disabled = true;
      changeButton.classList.add('picture-card__buy-button--request');
      break;
    case 'inCart':
      if (value === true) {
        changeButton.disabled = false;
        changeButton.textContent = 'В корзине';
        changeButton.classList.remove('picture-card__buy-button--request');
        changeButton.classList.add('picture-card__buy-button--in-cart');
      }
      if (value === false) {
        // Удаление из корзины
      }
      break;
    default:
      throw new Error(`${changeData} changeData doesn't support`);
  }
});

export default render;
