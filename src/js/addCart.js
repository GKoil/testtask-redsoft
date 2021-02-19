import getState from './getState.js';
import rendor from './view.js';
import initial from './initial.js';

const addCart = () => {
  const state = getState();

  const watchedState = rendor(state);

  const buttons = document.querySelectorAll('.picture-card__buy-button');
  buttons.forEach((button) => {
    button.addEventListener('click', async () => {
      const nameOfPicture = button.dataset.namePicture;
      watchedState.buttonsCart[nameOfPicture].process = 'request';

      const parsedURL = new URL('https://jsonplaceholder.typicode.com/posts/1');
      try {
        await fetch(parsedURL);
        watchedState.buttonsCart[nameOfPicture].process = 'done';
        watchedState.buttonsCart[nameOfPicture].inCart = true;
      } catch (e) {
        watchedState.buttonsCart[nameOfPicture].process = 'done';
        watchedState.buttonsCart[nameOfPicture].errors.push(e);
        throw new Error(`Bad request for server ${e}`);
      }
      localStorage.setItem('state', JSON.stringify(state));
    });
  });

  initial(state.buttonsCart);
};

export default addCart;
