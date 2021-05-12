import './styles.css';
import './js/menu';

const chekboxTheme = document.querySelector('#theme-switch-toggle');

chekboxTheme.addEventListener('change', changeTheme);

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

function changeTheme(event) {
  if (event.target.checked) {
    updateLocaleStorage('theme', Theme.DARK);
    replaceTheme(Theme.DARK, Theme.LIGHT);
  } else {
    updateLocaleStorage('theme', Theme.LIGHT);
    replaceTheme(Theme.LIGHT, Theme.DARK);
  }
}

function replaceTheme(oldTheme, newTheme) {
  document.body.classList.add(oldTheme);
  document.body.classList.remove(newTheme);
}

function updateLocaleStorage(key, value) {
  localStorage.setItem(key, value);
}

function saveTheme() {
  const theme = localStorage.getItem('theme') ?? Theme.LIGHT;
  document.body.classList.add(theme);
  chekboxTheme.checked = theme === Theme.DARK;
}

saveTheme();

// import './styles.css';
// // console.log('run');
// import './js/test';

// // import print from './js/test';  Дефолтный импорт
// // console.log(print);

// // print('zigzag');

// // import { text, printText } from './js/test';

// import * as object from './js/test';

// console.log(object.text);

// object.printText('lhpm');
