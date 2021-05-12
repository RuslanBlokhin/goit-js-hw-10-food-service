import menuData from '../menu.json';

import makeMarkup from '../template/menu.hbs';

const insertRef = document.querySelector('.js-menu');

const markup = makeMarkup(menuData);

insertRef.innerHTML = markup;
