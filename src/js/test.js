import menu from '../menu.json';

// export const text = 'TEXT TEST';
// export function printText(string) {
//   console.log(string);
// }

// export default printText; дефолтный експорт

const text = 'TEXT TEST';
function printText(string) {
  console.log(string);
}
printText(text);

console.log(menu);

export { text, printText };
