import { layout } from '../pages/layout.js';


export const printPage = (string) => {

  const container = document.querySelector('.container');
  container.appendChild(layout(string));

  return container;

}