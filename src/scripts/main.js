'use strict';

const list = document.querySelectorAll('span.population');
const listPopulation = [...list].map(item => +item.innerText.replace(/,/g, ''));

const totalPopulation = listPopulation.reduce((sum, item) => sum + item, 0);
const averagePopulation = totalPopulation / listPopulation.length;

document.querySelectorAll('span.total-population')
  .textContent = `${new Intl.NumberFormat('en-US')
    .format(totalPopulation)} people`;

document.querySelectorAll('span.average-population')
  .textContent = `${new Intl.NumberFormat('en-US')
    .format(averagePopulation)} people`;
