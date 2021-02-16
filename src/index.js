import './style.scss';
import _ from 'lodash';

const getGreeting = () => {
  const element = document.createElement('p');
  const fooBar = _.toUpper('--foo-bar--');
  element.textContent = fooBar;
  return element;
};

const greeting = getGreeting();
document.body.append(greeting);
