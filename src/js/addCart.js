import Cookies from 'js-cookie';
import getState from './getState.js';
import render from './view.js';

const addCart = () => {
  const state = getState();

  const buttons = document.querySelectorAll('.picture-card__buy-button');
  buttons.forEach((button) => {
    button.addEventListener('click', async () => {
      const nameOfPicture = button.dataset.namePicture;
      state.buttonsCart[nameOfPicture].process = 'request';
      render(state.buttonsCart);

      const parsedURL = new URL('https://jsonplaceholder.typicode.com/posts/1');
      try {
        await fetch(parsedURL);
        state.buttonsCart[nameOfPicture].process = 'done';
        state.buttonsCart[nameOfPicture].inCart = true;
      } catch (e) {
        state.buttonsCart[nameOfPicture].process = 'done';
        state.buttonsCart[nameOfPicture].errors.push(e);
        throw new Error(`Bad request for server ${e}`);
      }

      render(state.buttonsCart);
      Cookies.set('state', JSON.stringify(state));
    });
  });

  render(state.buttonsCart);
};

export default addCart;
