import _ from 'lodash';
import Cookies from 'js-cookie';

const getState = () => {
  const localState = Cookies.get('state');

  let state;
  if (!localState) {
    state = {
      buttonsCart: {},
    };
  } else {
    state = JSON.parse(localState);
  }

  const buttons = document.querySelectorAll('.picture-card__buy-button');
  buttons.forEach((button) => {
    const dataButton = button.dataset.namePicture;
    if (!_.has(state.buttonsCart, dataButton)) {
      const stateButton = {
        inCart: false,
        process: 'done',
        errors: [],
      };
      state.buttonsCart[dataButton] = stateButton;
    }
  });
  return state;
};

export default getState;
